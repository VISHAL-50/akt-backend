// models/newsModel.js
const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema(
  {
    newsId: {
      type: String,
      required: true,
      unique: true, // Ensures newsId is unique
    },
    headline: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields automatically
  }
);

const News = mongoose.model('News', newsSchema);

module.exports = News;
