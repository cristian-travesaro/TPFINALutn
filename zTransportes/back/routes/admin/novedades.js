var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel');
const util = require('util');
const cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

/* GET novedades page */
router.get('/', async function(req, res, next) {
  try {
    // Verificación de la sesión
    if (!req.session || !req.session.nombre) {
      return res.redirect('/admin/login');
    }

    // Obtener novedades de la base de datos
    var novedades = await novedadesModel.getNovedades();
    console.log('Novedades obtenidas:', novedades);

    // Procesar las novedades obtenidas
    novedades = novedades.map(novedad => {
      if (novedad.img_id) {
        const imagen = cloudinary.image(novedad.img_id, {
        width: 100,
        height: 100,
        crop: 'fill'
      });
      return {
        ...novedad,
        imagen
      };
    } else {
      return {
        ...novedad,
        imagen: ''
      };
    }
  });


    // Renderizar la vista con las novedades
    res.render('admin/novedades', {
      layout: 'admin/layout',
      persona: req.session.nombre,  // Usar la variable de sesión correctamente
      novedades: novedades.length > 0 ? novedades : [] // Enviar un array vacío si no hay novedades
    });
  } catch (error) {
    console.error('Error al obtener novedades:', error);
    res.render('admin/novedades', {
      layout: 'admin/layout',
      persona: req.session.nombre,
      novedades: [],
      error: 'No se pudieron cargar las novedades. Inténtalo más tarde.' // Mostrar mensaje de error
    });
  }
});


/* GET agregar page */
router.get('/agregar', (req, res, next) => {
  // Verificación de la sesión
  if (!req.session || !req.session.nombre) {
    return res.redirect('/admin/login');
  }
  res.render('admin/agregar', {
    layout: 'admin/layout'
  });
});

/* POST agregar novedad */
router.post('/agregar', async (req, res, next) => {
  try {
    const { titulo, subtitulo, cuerpo } = req.body;
    console.log('Datos recibidos en el formulario:', req.body);

      // Validación de campos
    var img_id = '';
    console.log(req.files.imagen);
    if (req.files && Object.keys(req.files).length > 0) {
      imagen = req.files.imagen;
      img_id = (await uploader(imagen.tempFilePath)).public_id;
    }

    if (req.body.titulo !== "" && req.body.subtitulo !== "" && req.body.cuerpo !== "") { 
      console.log('Validación exitosa: Todos los campos están completos');
      // Aquí podrías continuar con el proceso de agregar la novedad
      await novedadesModel.insertNovedad({
        ...req.body,
        img_id
        });
        res.redirect('/admin/novedades')
    } else {
      console.log('Validación fallida: Todos los campos son requeridos');
      res.render('admin/agregar', {
          layout: 'admin/layout',
          error: true,
          message: 'Todos los campos son requeridos'
      });
    }


        // Insertar novedad en la base de datos
        var resultado = await novedadesModel.insertNovedad(req.body);
        console.log('Novedad agregada con éxito', resultado);

        // Redirigir en caso de éxito
        res.redirect('/admin/novedades');
  } catch (error) {
    console.error('Error al agregar la novedad:', error);
    res.render('admin/agregar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se pudo cargar la novedad. Inténtalo de nuevo.'
    });
  }
});

router.get('/eliminar/:id', async (req, res, next) => {
  var id = req.params.id;
  console.log(id)
  let novedad = await novedadesModel.getNovedadById(id);
  if (novedad.img_id) {
    await (destroy(novedad.img_id));
  }
  await novedadesModel.deleteNovedadesById(id);
  res.redirect('/admin/novedades');  
});

router.get('/modificar/:id', async (req, res, next) => {
  try {
      var id = req.params.id;
      var novedad = await novedadesModel.getNovedadById(id);
      res.render('admin/modificar', {
          layout: 'admin/layout',
          novedad
      });
  } catch (error) {
      console.error('Error al obtener la novedad para modificar:', error);
      next(error);  // Llama a next con el error para manejarlo en el middleware de error
  }
});

router.post('/modificar', async (req, res, next) => {
  try {
    let img_id = req.body.img_original;
    let borrar_img_vieja = false;

    if (req.body.img_delete === "1") {
    img_id = null;
    borrar_img_vieja = true;
    } else {
      if (req.files && Object.keys(req.files).length > 0) {
        imagen = req.files.imagen;
        img_id = (await uploader(imagen.tempFilePath)).public_id;
        borrar_img_vieja = true;
      }
    }

    if (borrar_img_vieja && req.body.img_original) {
      await destroy(req.body.img_original);
    }

    var obj = {
      titulo: req.body.titulo,
      subtitulo: req.body.subtitulo,
      cuerpo: req.body.cuerpo
    }
    console.log(obj)

    await novedadesModel.modificarNovedadById(obj, req.body.id);
    res.redirect('/admin/novedades');

  } catch (error) {
      console.log(error)
      res.render('admin/modificar', {
          layout: 'admin/modificar',
          error: true,
          message: 'No se modifico la novedad'
      })
  }
})

module.exports = router;

