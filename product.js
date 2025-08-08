const express = require("express");
const router = express.Router();
const { Product } = require("../models/Product");

// GET all products with filter, sort, pagination
router.get("/", async (req, res) => {
  // Filtering, sorting, etc. based on query params
  const { category, sort, page = 1, limit = 20 } = req.query;
  let query = {};
  if (category) query.category = category;
  let products = await Product.find(query)
    .sort({ price: sort === "asc" ? 1 : -1 })
    .skip((page - 1) * limit)
    .limit(Number(limit));
  res.json(products);
});

// GET single product
router.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
});

// POST new product (admin only)
router.post("/", async (req, res) => {
  // Auth middleware for admin omitted for brevity
  const product = new Product(req.body);
  await product.save();
  res.status(201).json(product);
});

// PUT update product (admin only)
router.put("/:id", async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(product);
});

// DELETE product (admin only)
router.delete("/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

module.exports = router;