const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require('body-parser');

const productRouter = require("./routes/productRouter");
const cartRouter = require("./routes/cartRouter");

const app = express();
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const uri =
  "mongodb+srv://minhduybthuy:Pmd011220@cluster0.kkrbeak.mongodb.net/?retryWrites=true&w=majority";

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
}

connect();

app.use("/api/v1/products", productRouter);
app.use("/api/v1/cart", cartRouter);
app.use("/", async (req, res, next) => {
  res.status(200).json({
    status: "success",
    data: {
      text: "Hello",
    },
  });
});

app.listen(8000, () => {
  console.log("Server started on port 8000");
});
