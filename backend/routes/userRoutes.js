const express = require("express");
const router = express.Router();
const varifyUser = require('../middleware/authMiddleware'); // Assuming you have a middleware for user verification
const userController = require('../controllers/userController');

router.get('/dashboard', varifyUser, userController.dashboard);

module.exports = router;
