const express = require('express'),
router = express.Router(),
FurnituresControllers = require('../controllers/furnituresControllers')

router.get('/', FurnituresControllers.getAllFurnitures) //Muestra todos los muebles en orden cronológico.
router.post('/create', FurnituresControllers.createFurniture) //Envía la info del mueble a la base de datos.
router.get('/favorites', FurnituresControllers.getFavorites) //Muestra los muebles marcados como favoritos

router.get('/furniture/:_id', FurnituresControllers.getFurniture) //Trae la info del mueble seleccionado o buscado.

router.put('/furniture/:_id', FurnituresControllers.updateFurniture) //Editar mueble
router.delete('/furniture/:_id', FurnituresControllers.deleteFurniture) //Borrar mueble

router.get('/furnitures/:room', FurnituresControllers.getFurnitures) //Trae los muebles por estancia
router.get('/stores/:store', FurnituresControllers.getStoreFurnitures) //Muestra los muebles filtrado por tienda
module.exports = router;