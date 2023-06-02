const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const pocionesSchema = new Schema({
   nombre: {
      type: String,
      unique: true,
      required: true
   },
   descripcion: {
      type: String,
      required: true
   },
   precio: {
      type: Number,
      required: true
   },
   cantidad: {
      type: Number,
      required: true
   },
   imagen: {
      type: Object,
      public_id: String,
      secure_url: String,
      default: null
   },
   categoria: {
      type: String,
      required: true
   },
   ingredientes: {
      type: Array,
      default: [],
      required: true
   }
});

const Pociones = mongoose.model('Pociones', pocionesSchema);
module.exports = Pociones