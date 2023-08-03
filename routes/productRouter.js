const express = require('express');

const router = express.Router();

const productController = require('../controllers/productController');


router.get('/all', productController.getAllProduct);
router.post('/add-all', productController.addAllProduct);


module.exports = router;