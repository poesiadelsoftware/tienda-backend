'use strict';

const mongoose = require('mongoose');

const producto_schema = new mongoose.Schema({
    codigo: { type: String, required: true, unique: true },
    nombre: { type: String, required: true, unique: false },
    precio: { type: Number, required: true, unique: false },
    descripcion: { type: String, required: true, unique: false },
    estado: { type: String, required: true, unique: false }
});

//(Modelo, schema en que se apoya, nombre de la colección en la BD)
module.exports = mongoose.model('Producto', producto_schema, 'productos');