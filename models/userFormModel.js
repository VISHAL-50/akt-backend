const mongoose = require('mongoose');

// Define the user form schema
const userFormSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  profession: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  industryType: {
    type: String,
    required: true,
  },
  requestType: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // To ensure no duplicate emails
  },
  message: {
    type: String,
    required: true,
  },
}, { timestamps: true }); // Adds createdAt and updatedAt fields automatically

// Create the model from the schema
const UserForm = mongoose.model('UserForm', userFormSchema);

module.exports = UserForm;
