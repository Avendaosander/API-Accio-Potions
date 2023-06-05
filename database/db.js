require('dotenv').config();
const mongoose = require('mongoose');
const Pociones = require('../models/pociones')
const Ingredientes = require('../models/Ingredientes')
const addPociones = require('./dbPociones'); // Agrega Pociones
const addIngredientes = require('./dbIngredientes'); // Agrega Ingredientes

mongoose.set('strictQuery', false)

mongoose.connect(process.env.URI) 
   .then(async()=> {
      const pociones = await Pociones.findOne().lean();
      const ingredientes = await Ingredientes.findOne().lean();
      if (!pociones) {
         addPociones()
         console.log('Pociones Agregadas');
      }
      if (!ingredientes) {
         addIngredientes()
         console.log('Ingredientes Agregados');
      }
      console.log('DB Conectada🚀')
   })
   .catch((e) => console.log("Fallo de Conexion " + e));