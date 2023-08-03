const Product = require("../models/products");


exports.getAllProduct = async (req, res, next) => {
  const doc = await Product.find();
  res.status(200).json({
    status: "success",
    length: doc.length,
    data: doc,
  });
};

exports.addAllProduct = async (req, res, next) => {
  console.log(req.body);
  const doc = await Product.insertMany(req.body);
  res.status(201).json({
    status: "success",
    data: doc,
  });
};
