// controllers/landingPageController.js
const LandingPage = require('../models/landingPageModel');

// Controller to create landing page data (admin only)
const createLandingPage = async (req, res) => {
  try {
    // Check if the user is an admin (you already have JWT auth middleware for that)
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'You are not authorized to create landing page data' });
    }

    // Check if landing page data already exists (you may only want one landing page entry)
    const existingLandingPage = await LandingPage.findOne();
    if (existingLandingPage) {
      return res.status(400).json({ message: 'Landing page data already exists' });
    }

    // Create a new landing page entry
    const landingPageData = new LandingPage({
      heroTextHeader: req.body.heroTextHeader,
      heroTextDescription: req.body.heroTextDescription,
      heroImage: req.body.heroImage,
      aboutUsText: req.body.aboutUsText,
      aboutUsImage: req.body.aboutUsImage,
      logoImage: req.body.logoImage,
    });

    await landingPageData.save();
    res.status(201).json({ message: 'Landing page data created successfully', landingPage: landingPageData });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create landing page data', error });
  }
};

// Controller to fetch landing page data
const getLandingPageData = async (req, res) => {
  try {
    const landingPage = await LandingPage.findOne();
    if (!landingPage) {
      return res.status(404).json({ message: 'Landing page data not found' });
    }
    res.status(200).json(landingPage);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch landing page data', error });
  }
};

// Controller to update landing page data (admin only)
const updateLandingPageData = async (req, res) => {
  try {
    // Check if the user is an admin
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'You are not authorized to update landing page data' });
    }

    const landingPage = await LandingPage.findOne();
    if (!landingPage) {
      return res.status(404).json({ message: 'Landing page data not found' });
    }

    // Update the landing page data
    landingPage.heroTextHeader = req.body.heroTextHeader || landingPage.heroTextHeader;
    landingPage.heroTextDescription = req.body.heroTextDescription || landingPage.heroTextDescription;
    landingPage.heroImage = req.body.heroImage || landingPage.heroImage;
    landingPage.aboutUsText = req.body.aboutUsText || landingPage.aboutUsText;
    landingPage.aboutUsImage = req.body.aboutUsImage || landingPage.aboutUsImage;
    landingPage.logoImage = req.body.logoImage || landingPage.logoImage;

    await landingPage.save();
    res.status(200).json({ message: 'Landing page data updated successfully', landingPage });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update landing page data', error });
  }
};

module.exports = {
  createLandingPage,
  getLandingPageData,
  updateLandingPageData,
};
