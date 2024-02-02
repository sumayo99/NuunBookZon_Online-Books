const jwt = require('jsonwebtoken');

const varifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.json("Token is missing");
    } else {
        // jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
            jwt.verify(token, "jwt-secret-key", (err, decoded) => {
            if (err) {
                return res.json("Error with token");
            } else {
                if (decoded.role === "admin") {
                    next();
                } else {
                    return res.json("Not admin");
                }
            }
        });
    }
};

module.exports = varifyUser;
