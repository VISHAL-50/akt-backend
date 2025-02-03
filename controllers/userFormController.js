const UserForm = require('../models/userFormModel');

// Controller to handle form submission
const createUserForm = async (req, res) => {
  try {
    const { fullName, profession, country, industryType, requestType, contact, email, message } = req.body;

    // Create a new UserForm instance
    const newUserForm = new UserForm({
      fullName,
      profession,
      country,
      industryType,
      requestType,
      contact,
      email,
      message,
    });

    // Save the form data to the database
    await newUserForm.save();

    res.status(201).json({
      message: 'Form submitted successfully!',
      formData: newUserForm,
    });
  } catch (error) {
    res.status(400).json({ error: 'Error in form submission: ' + error.message });
  }
};

// Controller to get all submitted forms
const getAllUserForms = async (req, res) => {
  try {
    const forms = await UserForm.find(); // Fetch all submitted forms
    res.status(200).json(forms); // Send the forms as JSON response
  } catch (error) {
    res.status(500).json({ error: 'Error fetching forms' });
  }
};

// Controller to get a specific form by email
const getUserFormByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const form = await UserForm.findOne({ email: email }); // Find form by email

    if (!form) {
      return res.status(404).json({ message: 'Form not found for this email' });
    }

    res.status(200).json(form); // Send the form data as JSON response
  } catch (error) {
    res.status(500).json({ error: 'Error fetching the form by email' });
  }
};

// Controller to get a specific form by ID (optional, if you want to fetch forms by MongoDB _id)
const getUserFormById = async (req, res) => {
  try {
    const { id } = req.params;
    const form = await UserForm.findById(id); // Find form by MongoDB ObjectId

    if (!form) {
      return res.status(404).json({ message: 'Form not found for this ID' });
    }

    res.status(200).json(form); // Send the form data as JSON response
  } catch (error) {
    res.status(500).json({ error: 'Error fetching form by ID' });
  }
};

module.exports = {
  createUserForm,
  getAllUserForms,
  getUserFormByEmail,
  getUserFormById,
};
