const jwt = require('jsonwebtoken');
const User = require('../models/adminModel');

// Middleware to check if the user is authenticated
const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your_jwt_secret');
    
    // Attach user info to request object
    const user = await User.findById(decoded._id);
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    req.user = user; // Add user details to the request
    next(); // Continue to the next middleware/route handler
  } catch (error) {
    res.status(401).json({ message: 'Invalid or expired token' });
  }
};

// Middleware to check if the user is an admin
const admin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Admin access only' });
  }
  next(); // If user is admin, proceed to the next middleware/route handler
};

module.exports = { auth, admin };
