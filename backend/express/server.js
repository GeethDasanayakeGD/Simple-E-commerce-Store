// server.js
const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/Product");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/ecommerce");

app.get("/api/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.post("/api/orders", async (req, res) => {
  const { products, total } = req.body;
  // Save order logic here
  res.json({ message: "Order placed successfully!" });
});

app.listen(5000, () => console.log("Server running on port 5000"));