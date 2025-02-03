const mongoose = require('mongoose');

// Define the product schema
const productSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: true,
    unique: true, // Ensure the product ID is unique
  },
  category: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  imagePath: {
    type: String, // This will store the file path for the image
    required: true,
  },
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

// Create the model from the schema
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
