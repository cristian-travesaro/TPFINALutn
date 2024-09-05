var express = require('express');
var router = express.Router();
var novedadesModel = require('./../models/novedadesModel');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');

/* GET novedades page. */
router.get('/novedades', async function(req, res, next) {
    let novedades = await novedadesModel.getNovedades();

    // Procesar las novedades obtenidas
    novedades = novedades.map(novedad => {
        if (novedad.img_id) {
            const imagen = cloudinary.url(novedad.img_id, {
                width: 960,
                height: 200,
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

    res.json(novedades);
});

/* POST contacto page. */
router.post('/contacto', async (req, res) => {
    try {
        const mail = {
            to: 'cristiantravesaro12@gmail.com',
            subject: "Contacto web",
            html: `${req.body.nombre} se contactó a través de la web y quiere más información a este correo: ${req.body.email}.<br>
                   Además, hizo el siguiente comentario: ${req.body.comentario}.<br>
                   Su teléfono es: ${req.body.telefono}.`
        };

        const transport = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        });

        await transport.sendMail(mail);

        res.status(200).json({
            error: false,
            message: "Mensaje enviado"
        });
    } catch (error) {
        res.status(500).json({
            error: true,
            message: "Hubo un error al enviar el mensaje"
        });
    }
});

module.exports = router;
