// rutas para crear productos
const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoControllers');

//crea un prod
//api/productos
// router.post('/', 
//     productoController.crearProducto
// );

router.get('/', 
    productoController.getProducto
);

module.exports = router;