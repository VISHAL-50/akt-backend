const express = require('express');
const router = express.Router();
const userFormController = require('../controllers/userFormController');

// Route to handle form submission (POST request)
router.post('/submit-form', userFormController.createUserForm);

// Route to get all submitted forms (GET request)
router.get('/forms', userFormController.getAllUserForms);

// Route to get a specific form by email (GET request)
router.get('/forms/email/:email', userFormController.getUserFormByEmail);

// Route to get a specific form by MongoDB ID (GET request)
router.get('/forms/id/:id', userFormController.getUserFormById);

module.exports = router;
