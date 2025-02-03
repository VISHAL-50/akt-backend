// routes/landingPageRoutes.js
const express = require('express');
const router = express.Router();
const landingPageController = require('../controllers/landingPageController');
const { auth } = require('../middleware/authMiddleware'); // Assuming you have auth middleware set up

// Route to create landing page data (admin only)
router.post('/create-landing-page', auth, landingPageController.createLandingPage);

// Route to fetch landing page data
router.get('/fetch-landing-page', landingPageController.getLandingPageData);

// Route to update landing page data (admin only)
router.put('/update-landing-page', auth, landingPageController.updateLandingPageData);

module.exports = router;
