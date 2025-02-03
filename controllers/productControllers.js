const Product = require('../models/productModels');

// Create a new product
const createProduct = async (req, res) => {
  try {
    const { productId, category, name, details, imagePath } = req.body;

    const newProduct = new Product({
      productId,
      category,
      name,
      details,
      imagePath,
    });

    await newProduct.save(); // Save the product to the database
    res.status(201).json({ message: 'Product created successfully', product: newProduct });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find(); // Fetch all products from the database
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching products' });
  }
};

// Get a single product by its ID
const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findOne({ productId: id }); // Find product by productId

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching product' });
  }
};

// Get products by category
const getProductsByCategory = async (req, res) => {
  try {
    const { category } = req.params;

    const products = await Product.find({ category: category }); // Find products by category

    if (!products || products.length === 0) {
      return res.status(404).json({ message: `No products found for category: ${category}` });
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching products by category' });
  }
};

// Search products by name and category
const searchProducts = async (req, res) => {
  try {
    const { query } = req.query; // Get search query from query parameters

    const products = await Product.find({
      $or: [
        { name: { $regex: query, $options: 'i' } }, // Search by name (case-insensitive)
        { category: { $regex: query, $options: 'i' } } // Search by category (case-insensitive)
      ]
    });

    if (!products || products.length === 0) {
      return res.status(404).json({ message: 'No products found matching your search' });
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: 'Error searching for products' });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  getProductsByCategory,
  searchProducts,
};
