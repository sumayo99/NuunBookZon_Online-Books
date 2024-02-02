const express = require("express");
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/forgot-password', authController.forgotPassword);
router.post('/reset-password/:id', authController.resetPassword);
router.get("/all-user", authController.getAllUsers);
router.delete("/user/:id", authController.deleteUser);

module.exports = router;
