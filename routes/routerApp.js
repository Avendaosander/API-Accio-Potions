const express = require('express');
const { home, createPotion, updatePotion, deletePotion, searchPotions, obtenerIngredientes } = require('../controllers/appController');
const { upload } = require('../controllers/uploadsController');
const router = express.Router()

// Home
router.get('/home', home)

// Obtener Ingredientes
router.get('/ingredientes', obtenerIngredientes)

// Crear Pocion
router.post('/create-potion', upload.single('imagen'), createPotion)

// Modificar Pocion
router.put('/update-potion/:potionID', upload.single('imagen'), updatePotion)

// Eliminar Pocion
router.delete('/delete-potion/:potionID', deletePotion)

// Buscar Pociones
router.get('/search-potion', searchPotions)

module.exports = router
