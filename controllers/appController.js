const Pociones = require('../models/pociones')
const Ingredientes = require('../models/Ingredientes')
const { deleteImage, uploadImagePotion } = require('../middlewares/cloudinary');
var fs = require('fs-extra');

const modificarCantidadIngredientes = async (ingredientes, cantidades, acciones) => {
   const updates = ingredientes.map((nombreIngrediente, index) => {
      const cantidad = cantidades[index];
      const accion = acciones[index];
      return {
         updateOne: {
            filter: { nombre: nombreIngrediente },
            update: {
            $inc: { cantidad: accion === 'agregar' ? cantidad : -cantidad },
            },
         },
      };
   });

   await Ingredientes.bulkWrite(updates);
};

// Obtiene las pociones y los ingredientes
const home = async (req, res) => {
   try {
      const pociones = await Pociones.find().lean()
      res.status(200).json({ pociones });
   } catch (error) {
      res.status(500).json({ messageError: error.message });
   }
}

// Obtiene las pociones y los ingredientes
const obtenerIngredientes = async (req, res) => {
   try {
      const ingredientes = await Ingredientes.find().lean()
      res.status(200).json({ ingredientes });
   } catch (error) {
      res.status(500).json({ messageError: error.message });
   }
}

// Busca pociones iguales a un filtro
const searchPotions = async (req, res) => {
   try {
      const filter = req.body;
      const propertie = Object.keys(filter)[0];
      const value = filter[propertie];

      const pociones = await Pociones.find({[propertie]: { $regex: new RegExp(value, 'i') }})

      return res.status(200).json({pociones})
   } catch (error) {
      return res.status(500).json({messageError: error.message})
   }
}

// Crea una pocion
const createPotion = async (req, res) => {
   try {
      if (!req.file) return res.status(404).json({messageError: 'Debes agregar una imagen de la pocion'})
      const { path } = req.file;

      const { nombre, descripcion, precio, cantidad, categoria } = req.body;
      const ingredientesString = req.body.ingredientes
      const ingredientes = ingredientesString.split(',');
      let potion = await Pociones.findOne({ nombre });
      // console.log(potion);
      if (potion) {
         await fs.unlink(path)
         return res.status(404).json({messageError: 'Ya existe esta Pocion'});
      }

      potion = new Pociones({ nombre, descripcion, precio, cantidad, categoria, ingredientes});
      // console.log(potion)
      if (path) {
         const result = await uploadImagePotion(path)
         await fs.unlink(path)
         potion.imagen = {public_id: result.public_id, secure_url: result.secure_url}
      }
      
      // Restar 1 a la cantidad de ingredientes utilizados
      const ingredientesUtilizados = await Ingredientes.find({ nombre: { $in: ingredientes } });
      
      for (const ingrediente of ingredientesUtilizados) {
         ingrediente.cantidad -= cantidad;
         await ingrediente.save();
      }

      const allIngredients = await Ingredientes.find().lean()
      
      await potion.save()
      return res.status(200).json({potion, ingredientes: allIngredients});
   } catch (error) {
      // console.log(error.message);
      return res.status(500).json({messageError: error.message});
   }
}

// Modifica una pocion
const updatePotion = async (req, res) => {
   try {
      let path;
      if (!!req.file) {path = req.file.path}
   
      const { potionID } = req.params;
      let update = req.body;

      let pocion = await Pociones.findById(potionID)

      if (path !== undefined) {
         await deleteImage(pocion.imagen.public_id)
         const result = await uploadImagePotion(path)
         await fs.unlink(path)
         update.imagen = {public_id: result.public_id, secure_url: result.secure_url}
      }

      if (update.ingredientes || update.cantidad) {
         
         if(update.ingredientes) {
            const ingredientesArray = update.ingredientes.split(',')
            update.ingredientes = ingredientesArray
         }

         const ingredientesNew = update.ingredientes || []
         const cantidadNew = update.cantidad || pocion.cantidad
         
         const cantidadActual = pocion.cantidad
         const ingredientesActuales = pocion.ingredientes

         let modificarIngredientes = []
         let modificarCantidades = []
         let acciones = []

         if (ingredientesNew.length === 0 && cantidadNew !== cantidadActual) {
            ingredientesActuales.forEach(ingredient => {
               const diferencia = Math.abs(cantidadActual - cantidadNew);
               if (diferencia > 0) {
                  modificarIngredientes.push(ingredient);
                  modificarCantidades.push(diferencia);
                  acciones.push(cantidadActual > cantidadNew ? 'agregar' : 'eliminar');
               }
            });
         } else if (ingredientesNew.length >= ingredientesActuales.length) {
            ingredientesNew.forEach(ingredient => {
               if (ingredientesActuales.includes(ingredient)) {
                  const diferencia = Math.abs(cantidadActual - cantidadNew);
                  if (diferencia > 0) {
                     modificarIngredientes.push(ingredient);
                     modificarCantidades.push(diferencia);
                     acciones.push(cantidadActual > cantidadNew ? 'agregar' : 'eliminar');
                  }
               } else {
                  modificarIngredientes.push(ingredient);
                  modificarCantidades.push(cantidadNew);
                  acciones.push('eliminar');
               }
            });
         } else {
            ingredientesActuales.forEach(ingredient => {
               if (ingredientesNew.includes(ingredient) || ingredientesNew.length === 0) {
                  const diferencia = Math.abs(cantidadActual - cantidadNew);
                  if (diferencia > 0) {
                     modificarIngredientes.push(ingredient);
                     modificarCantidades.push(diferencia);
                     acciones.push(cantidadActual > cantidadNew ? 'agregar' : 'eliminar');
                  }
               } else {
                  modificarIngredientes.push(ingredient);
                  modificarCantidades.push(cantidadActual);
                  acciones.push('agregar');
               }
            });
         }

         if (modificarIngredientes.length > 0) {
            await modificarCantidadIngredientes(modificarIngredientes, modificarCantidades, acciones)
         }
      }

      pocion = await Pociones.findByIdAndUpdate(potionID, update, {new: true})
      const allIngredients = await Ingredientes.find().lean()

      return res.status(200).json({potion: pocion, ingredientes: allIngredients})
   } catch (error) {
      return res.status(500).json({messageError: error.message});
   }
}

// Elimina una pocion
const deletePotion = async (req, res) => {
   try {
      const { potionID } = req.params;
      const pocion = await Pociones.findByIdAndDelete(potionID)
      
      if (!pocion) return res.status(404).json({messageError: 'Esta pocion no existe'})
      
      const cantidad = pocion.cantidad
      const ingredientes = pocion.ingredientes

      await deleteImage(pocion.imagen.public_id)

      // Sumar 1 a la cantidad de ingredientes utilizados
      const ingredientesUtilizados = await Ingredientes.find({ nombre: { $in: ingredientes } });
      
      for (const ingrediente of ingredientesUtilizados) {
         ingrediente.cantidad += cantidad;
         await ingrediente.save();
      }

      const allIngredients = await Ingredientes.find().lean()

      return res.status(200).json({potion: pocion, ingredientes: allIngredients})
   } catch (error) {
      return res.status(404).json({messageError: error.message});
   }
}

module.exports = {
   home,
   obtenerIngredientes,
   createPotion,
   updatePotion,
   deletePotion,
   searchPotions
}