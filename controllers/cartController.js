const Cart = require('../models/cart');
const Product = require("../models/products");

exports.addToCart = async (req, res, next) => {
  const existsCart = await Cart.findOne({productId: req.body.productId});
  if (existsCart != null) {
    const doc = await Cart.findByIdAndUpdate(existsCart._id, {quantity: existsCart.quantity + 1});
    res.status(201).json({
      status: "success",
      data: doc,
    });
    return;
  } 
  const doc = await Cart.create(req.body);
  await Product.findByIdAndUpdate(req.body.productId, {addedToCart: true});
  res.status(201).json({
    status: "success",
    data: doc,
  });
}

exports.getAllCartItem = async (req, res, next) => {
  const doc = await Cart.find()
  res.status(200).json({
    status: "success",
    length: doc.length,
    data: doc
  })
}

exports.update = async (req, res, next) => {
  const doc = await Cart.findByIdAndUpdate(req.params.id, {quantity: req.body.quantity});

  res.status(200).json({
    status: "success",
    data: doc
  })
}

exports.delete = async (req, res, next) => {
  const doc = await Cart.deleteOne({ _id: req.params.id })
  const shoes = await Product.findByIdAndUpdate(req.body.productId, {addedToCart: false});
  res.status(200).json({
    status: "success",
    data: doc
  })
}