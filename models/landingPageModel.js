// models/landingPageModel.js
const mongoose = require('mongoose');

const landingPageSchema = new mongoose.Schema(
  {
    heroTextHeader: {
      type: String,
      required: true,
    },
    heroTextDescription: {
      type: String,
      required: true,
    },
    heroImage: {
      type: String, // This will be the path or URL to the image
      required: true,
    },
    aboutUsText: {
      type: String,
      required: true,
    },
    aboutUsImage: {
      type: String, // This will be the path or URL to the image
      required: true,
    },
    logoImage: {
      type: String, // This will be the path or URL to the image
      required: true,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields automatically
  }
);

const LandingPage = mongoose.model('LandingPage', landingPageSchema);

module.exports = LandingPage;
