const express = require('express');
const Product = require('../models/product.model');
const router = express.Router();
const productController = require("../controllers/product.controller.js")

//return all products
router.get('/', productController.getProducts);

//return a product given it's ID
router.get('/:id', productController.getProductByID)

//Create a new product 
router.post('/', productController.createProduct);

//Update a product
router.put('/:id', productController.updadeProduct);

//Delete a product
router.delete('/:id', productController.deleteProduct);

module.exports = router;
