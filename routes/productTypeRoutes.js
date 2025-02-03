const express = require('express');
const router = express.Router();
const productTypeController = require('../controllers/productTypeController');
const { auth } = require('../middleware/authMiddleware'); // Import the auth middleware

// Route to create a new product type (POST request)
router.post('/create',auth, productTypeController.createProductType);

// Route to get all product types (GET request)
router.get('/', productTypeController.getAllProductTypes);

module.exports = router;
