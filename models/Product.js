// create a mongoose schema

const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  title: { type: String },
  price: Number,
  description: String,
  rating: { type: Number, default: 0 },
  stock: { type: Number, default: 0 },
  brand: String,
  category: String,
  thumbnail: String,
  images: [String],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
}).index(
  { title: 'text', brand: 'text', category: 'text' },
  {
    weights: {
      title: 10,
      brand: 5,
      category: 2,
    },
  }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
