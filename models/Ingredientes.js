const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const ingredientesSchema = new Schema({
   nombre: {
      type: String,
      unique: true,
      required: true
   },
   cantidad: {
      type: Number,
      required: true
   },
   descripcion: {
      type: String,
      required: true
   }
});

const Ingredientes = mongoose.model('Ingredientes', ingredientesSchema);
module.exports = Ingredientes