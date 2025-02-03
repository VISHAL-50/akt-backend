// routes/newsRoutes.js
const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');
const { auth } = require('../middleware/authMiddleware');

// Route to create a new news item (admin only)
router.post('/addNews', auth, newsController.createNews);

// Route to fetch all news items
router.get('/getNews', newsController.getAllNews);

// Route to fetch a specific news item by its ID
router.get('/getNews/:newsId', newsController.getNewsById);

// Route to delete a news item by its ID (admin only)
router.delete('/deleteNews/:newsId', auth, newsController.deleteNews);

module.exports = router;
