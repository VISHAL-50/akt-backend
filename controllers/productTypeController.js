const ProductType = require('../models/productTypeModel');

// Controller to create a new product type
const createProductType = async (req, res) => {
  try {
    const { name } = req.body;

    // Check if a product type with the same name already exists
    const existingProductType = await ProductType.findOne({ name });
    if (existingProductType) {
      return res.status(400).json({ message: 'Product type already exists' });
    }

    // Create a new ProductType instance
    const newProductType = new ProductType({
      name,
    });

    // Save the product type to the database
    await newProductType.save();

    res.status(201).json({
      message: 'Product Type created successfully!',
      productType: newProductType,
    });
  } catch (error) {
    res.status(400).json({ error: 'Error creating product type: ' + error.message });
  }
};

// Controller to get all product types
const getAllProductTypes = async (req, res) => {
  try {
    const productTypes = await ProductType.find(); // Fetch all product types
    res.status(200).json(productTypes); // Send the product types as JSON response
  } catch (error) {
    res.status(500).json({ error: 'Error fetching product types' });
  }
};

module.exports = {
  createProductType,
  getAllProductTypes,
};
