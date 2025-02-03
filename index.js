const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const userFormRoutes = require('./routes/userFormRoutes');
const productTypeRoutes = require('./routes/productTypeRoutes');
const authRoutes = require('./routes/authRoutes');
const landingPageRoutes = require('./routes/landingPageRoutes');
const newsRoutes = require('./routes/newsRoutes');
require("./database/config");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads')); // Serve static files like images from 'uploads' folder

app.use(express.json());
app.use(cors());

// // MongoDB connection
// mongoose.connect('mongodb://localhost:27017/productDB', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => {
//   console.log('Connected to MongoDB');
// })
// .catch(err => {
//   console.log('Error connecting to MongoDB:', err);
// });

// Routes
app.use('/api/landingPage', landingPageRoutes);
app.use('/api/news', newsRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/userForm', userFormRoutes);
app.use('/api/products', productRoutes);
app.use('/api/product-types', productTypeRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
