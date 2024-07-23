const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  price: Number,
  // Add other fields as needed
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
