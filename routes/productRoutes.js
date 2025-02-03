const express = require('express');
const router = express.Router();
const productController = require('../controllers/productControllers');
const { auth } = require('../middleware/authMiddleware'); // Import the auth middleware

// Route to create a new product (authenticated users only)
router.post('/products', auth, productController.createProduct);

// Route to get all products
router.get('/products', productController.getAllProducts);

// Route to get a product by its productId
router.get('/products/:id', productController.getProductById);

// Route to get products by category
router.get('/products/category/:category', productController.getProductsByCategory);

// Route to search products by name and category
router.get('/products/search', productController.searchProducts);

module.exports = router;
