var express = require('express');
var router = express.Router();
var usuariosModel = require('../../models/usuariosModel');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/login', {
    layout:'admin/layout'
});
});

router.get('/logout', function (req, res, next) {
  req.session.destroy(function (err) { // Destruir las variables de sesión (id y usuario)
    if (err) {
      console.log(err);
      return next(err); // Manejar el error si ocurre durante la destrucción de la sesión
    }
    res.render('admin/login', {
      layout: 'admin/layout'
    });
  });
}); // Cierro logout


router.post('/', async (req, res, next) => {
  try {
    var usuario = req.body.usuario; // Capturando la información del usuario
    var password = req.body.password; // Capturando la contraseña

    var data = await usuariosModel.getUserByUsernameAndPassword(usuario, password);

    if (data !== undefined) {
      req.session. id_usuario = data.id
      req.session.nombre = data.usuario;
      res.redirect("/admin/novedades");
    } else {
      res.render('admin/login', {
        layout: 'admin/layout',
        errors: true
      });
    }
  } catch (error) {
    console.log(error);
    next(error); // Pasar el error al manejador de errores de Express
  }
}); // Cierro router.post


module.exports = router;