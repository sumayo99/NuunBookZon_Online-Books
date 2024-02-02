require('dotenv').config(); // Load environment variables from .env file
const jwt = require('jsonwebtoken');
const UserModel = require('../models/Users');
const emailService = require('../services/emailService');

const authController = {
    register: async (req, res) => {
        // Registration logic
        const { name, email, password } = req.body;

        try {
            const existingUser = await UserModel.findOne({ email });
            if (existingUser) {
                return res.json({ error: "Email already exists" });
            }

            await UserModel.create({ name, email, password });
            res.json("Success");
        } catch (err) {
            res.json(err);
        }
    },

    login: async (req, res) => {
        // Login logic
        const { email, password } = req.body;

        try {
            const user = await UserModel.findOne({ email });
            if (user && user.password === password) {
                const token = jwt.sign({ email: user.email, role: user.role }, process.env.KEY, { expiresIn: '1d' });
                res.cookie('token', token);
                return res.json({ Status: "Success", role: user.role });
            } else {
                return res.json("The password is incorrect or user does not exist");
            }
        } catch (err) {
            res.json(err);
        }
    },

    forgotPassword: async (req, res) => {
        // Forgot password logic
        const { email } = req.body;

        try {
            const user = await UserModel.findOne({ email });
            if (!user) {
                return res.send({ Status: "User not existed" });
            }

            const token = jwt.sign({ id: user._id }, process.env.KEY, { expiresIn: "1d" });
            emailService.sendResetPasswordEmail(user.email, user._id, token);

            return res.send({ Status: "Success" });
        } catch (err) {
            res.json(err);
        }
    },

    resetPassword: async (req, res) => {
        // Reset password logic
        const { id } = req.params;
        const { password } = req.body;

        try {
            
            await UserModel.findByIdAndUpdate({ _id: id }, { password });
            res.send({ Status: "Success" });
        } catch (err) {
            res.send({ Status: err });
        }
    },

    getAllUsers: async (req, res) => {
        let query = {};
        if (req.query?.category) {
            query = { category: req.query.category };
        }
        try {
            const result = await UserModel.find(query);
            res.send(result);
        } catch (error) {
            console.error('Error fetching user:', error);
            res.status(500).send({ error: 'Internal Server Error' });
        }
    },

    deleteUser: async (req, res) => {
        const id = req.params.id;
        try {
            const result = await UserModel.findByIdAndDelete(id);
            res.send(result);
        } catch (error) {
            console.error('Error deleting user:', error);
            res.status(500).send({ error: 'Internal Server Error' });
        }
    }
};

module.exports = authController;


// // const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const UserModel = require('../models/Users');
// const emailService = require('../services/emailService');

// const authController = {
//     register: async (req, res) => {
//         // Registration logic
//         const { name, email, password } = req.body;

//         try {
//             const existingUser = await UserModel.findOne({ email });
//             if (existingUser) {
//                 return res.json({ error: "Email already exists" });
//             }

//             await UserModel.create({ name, email, password });
//             res.json("Success");
//         } catch (err) {
//             res.json(err);
//         }
//     },
//     login: async (req, res) => {
//         // Login logic
//         const { email, password } = req.body;

//         try {
//             const user = await UserModel.findOne({ email });
//             if (user && user.password === password) {
//                 const token = jwt.sign({ email: user.email, role: user.role }, "jwt-secret-key", { expiresIn: '1d' });
//                 res.cookie('token', token);
//                 return res.json({ Status: "Success", role: user.role });
//             } else {
//                 return res.json("The password is incorrect or user does not exist");
//             }
//         } catch (err) {
//             res.json(err);
//         }
//     },
//     forgotPassword: async (req, res) => {
//         // Forgot password logic
//         const { email } = req.body;

//         try {
//             const user = await UserModel.findOne({ email });
//             if (!user) {
//                 return res.send({ Status: "User not existed" });
//             }

//             const token = jwt.sign({ id: user._id }, "jwt_secret_key", { expiresIn: "1d" });
//             emailService.sendResetPasswordEmail(user.email, user._id, token);

//             return res.send({ Status: "Success" });
//         } catch (err) {
//             res.json(err);
//         }
//     },

//     resetPassword: async (req, res) => {
//         // Reset password logic
//         const { id } = req.params;
//         const { password } = req.body;

//         try {
//             // Directly update the password without verifying the token
//             await UserModel.findByIdAndUpdate({ _id: id }, { password });
//             res.send({ Status: "Success" });
//         } catch (err) {
//             res.send({ Status: err });
//         }
//     },

//     getAllUsers: async (req, res) => {
//         let query = {};
//         if (req.query?.category) {
//             query = { category: req.query.category };
//         }
//         try {
//             const result = await UserModel.find(query);
//             res.send(result);
//         } catch (error) {
//             console.error('Error fetching user:', error);
//             res.status(500).send({ error: 'Internal Server Error' });
//         }
//     },

//     deleteUser: async (req, res) => {
//         const id = req.params.id;
//         try {
//             const result = await UserModel.findByIdAndDelete(id);
//             res.send(result);
//         } catch (error) {
//             console.error('Error deleting user:', error);
//             res.status(500).send({ error: 'Internal Server Error' });
//         }
//      }
//     };

// module.exports = authController;
