const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
    try {
        const token = req.header("Authorization");

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "No token provided"
            });
        }

        const actualToken = token.startsWith("Bearer ")
            ? token.slice(7)
            : token;

        const decoded = jwt.verify(actualToken, process.env.JWT_SECRET);

        req.user = decoded;

        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invalid token"
        });
    }
};

module.exports = auth;