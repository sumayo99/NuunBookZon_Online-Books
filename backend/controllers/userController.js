const varifyUser = require('../middleware/authMiddleware');

const userController = {
    dashboard: (req, res) => {
        // Dashboard logic
        res.json("Success");
    },
    // You can add more methods here as needed

    // Example of using varifyUser middleware in another route
    anotherRoute: [
        varifyUser,
        (req, res) => {
            // Logic for another route that requires authentication
            res.json("Authenticated route");
        }
    ],
};

module.exports = userController;
