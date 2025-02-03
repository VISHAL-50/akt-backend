const mongoose = require('mongoose');

// Define the Product Type schema
const productTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true, // Ensure that each product type name is unique
  }
}, { timestamps: true }); // Adds createdAt and updatedAt fields automatically

// Create the ProductType model from the schema
const ProductType = mongoose.model('ProductType', productTypeSchema);

module.exports = ProductType;
