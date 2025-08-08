const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  category: { type: String, enum: ["Women", "Men", "Kids", "Maternity"] },
  imageUrl: String,
  altText: String,
  price: Number,
  gst: { type: Number, default: 5 },
  sizes: [String],
  colors: [String],
  brand: String,
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
  rating: { type: Number, default: 0 },
  model3dUrl: String,
  stock: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = {
  Product: mongoose.model("Product", productSchema),
};