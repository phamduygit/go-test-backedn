const express = require('express');

const router = express.Router();

const cartController = require('../controllers/cartController');


router.get('/all', cartController.getAllCartItem);
router.post('/add', cartController.addToCart);
router.put('/:id', cartController.update);
router.delete('/:id', cartController.delete);


module.exports = router;