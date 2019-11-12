'use strict';
 
const mongoose = require('mongoose');
 
const cliente_schema = new mongoose.Schema({
    nombre: { type: String, required: true, unique: false },
    apellidos: { type: String, required: true, unique: false },
    apodo: { type: String, required: false, unique: false },
    cedula: { type: String, required: true, unique: true },
    nacimiento: { type: String, required: true, unique: false },
    email: { type: String, required: true, unique: true },
    telefonos: [
        {
            numero:{ type: String, required: true, unique: false },
            descripcion : { type: String, required: true, unique: false }
        }   
    ],
    estado: String
})
 
module.exports = mongoose.model('Cliente', cliente_schema, 'clientes');