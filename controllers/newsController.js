// controllers/newsController.js
const News = require("../models/newsModel")
// const jwt = require('jsonwebtoken');

// Controller to create a new news item
const createNews = async (req, res) => {
  try {
    const { newsId, headline, description, author } = req.body;

    // Check if the user is an admin
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'You are not authorized to create news' });
    }

    // Create a new news entry
    const news = new News({
      newsId,
      headline,
      description,
      author,
    });

    await news.save();
    res.status(201).json({ message: 'News created successfully', news });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create news', error });
  }
};

// Controller to fetch all news
const getAllNews = async (req, res) => {
  try {
    const news = await News.find();
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch news', error });
  }
};

// Controller to fetch news by its ID
const getNewsById = async (req, res) => {
  try {
    const news = await News.findOne({ newsId: req.params.newsId });
    if (!news) {
      return res.status(404).json({ message: 'News not found' });
    }
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch news', error });
  }
};

// Controller to delete a news item
const deleteNews = async (req, res) => {
  try {
    // Check if the user is an admin
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'You are not authorized to delete news' });
    }

    const news = await News.findOneAndDelete({ newsId: req.params.newsId });
    if (!news) {
      return res.status(404).json({ message: 'News not found' });
    }

    res.status(200).json({ message: 'News deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete news', error });
  }
};

module.exports = {
  createNews,
  getAllNews,
  getNewsById,
  deleteNews,
};
