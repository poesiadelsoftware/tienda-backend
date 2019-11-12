'use strict';

const express = require('express'),
    router = express.Router(),
    Cliente = require('../models/clientes.model');

router.post('/registrar-cliente', function(req, res) {
    let body = req.body;

    let nuevo_cliente = new Cliente({
        nombre: body.nombre,
        apellidos: body.apellidos,
        apodo: body.apodo,
        cedula: body.cedula,
        nacimiento: body.nacimiento,
        email: body.email,
        estado: 'Habilitado'
    });

    nuevo_cliente.save(
        function(err, contactoDB) {
            if (err) {
                return res.json({
                    success: false,
                    msj: 'El cliente no se pudo registrar',
                    err
                });
            } else {
                res.json({
                    success: true,
                    msj: 'El cliente se registró con éxito'
                });
            }
        }
    );
});

router.post('/agregar-telefono', function(req, res) {
    if (req.body._id) {
        Cliente.update({ _id: req.body._id }, {
                $push: {
                    'telefonos': {
                        numero: req.body.numero,
                        descripcion: req.body.descripcion
                    }
                }
            },
            function(error) {
                if (error) {
                    return res.json({
                        success: false,
                        msj: 'No se pudo agregar el teléfono',
                        err
                    });
                } else {
                    return res.json({
                        success: true,
                        msj: 'Se agregó correctamente el teléfono'
                    });
                }
            }
        )
    } else {
        return res.json({
            success: false,
            msj: 'No se pudo agregar el teléfono, por favor verifique que el _id sea correcto'

        });
    }

});

router.get('/listar-clientes', function(req, res) {
    Cliente.find(
        function(err, clientesBD) {
            if (err) {
                res.json({
                    resultado: false,
                    msg: 'No se encontraron clientes',
                    err
                });
            } else {
                res.json({
                    resultado: true,
                    productos: clientesBD
                })
            }

        }
    );

});

module.exports = router;