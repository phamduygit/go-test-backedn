const mongoose = require('mongoose');

const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
const cartSchema = new mongoose.Schema({
  image: {
    type: String,
  },
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  color: {
    type: String,
  },
  quantity: {
    type: Number,
    default: 1
  },
  productId: {
    type: String
  }
})

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;