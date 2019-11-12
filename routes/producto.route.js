'use strict';

const express = require('express'),
    router = express.Router(),
    Producto = require('../models/productos.model'),
    mongoose = require('mongoose');

router.post('/registrar-producto', function(req, res) {
    let body = req.body;
    let nuevo_producto = new Producto({
        codigo: body.codigo,
        nombre: body.nombre,
        precio: body.precio,
        descripcion: body.descripcion,
        estado: 'activo'
    });
    nuevo_producto.save(
        function(err, productoBD) {
            if (err) {
                res.json({
                    resultado: false,
                    msg: 'El producto no se pudo registrar, ocurrió el siguiente error',
                    err
                });
            } else {
                res.json({
                    resultado: true,
                    productoBD
                });
            }
        });
});

router.get('/listar-productos', function(req, res) {
    Producto.find(
        function(err, productosBD) {
            if (err) {
                res.json({
                    resultado: false,
                    msg: 'No se encontraron productos',
                    err
                });
            } else {
                res.json({
                    resultado: true,
                    productos: productosBD
                })
            }

        }
    );

});


module.exports = router;