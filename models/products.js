const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  image: {
    type: String,
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  color: {
    type: String,
  },
  addedToCart: {
    type: Boolean,
    default: false,
  }
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;