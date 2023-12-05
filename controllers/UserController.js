const user = require("../models/User");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const jwtSecret = process.env.JWT_SECRET;

// Generate user token 
const generatyeToken = (id) => {
    return jwt.sign({ id }, jwtSecret, { expiresIn: "7d" });
};

// registre user and sing in
const register = async(req, res) => {
    res.send("Registro");
};

module.exports = {
    register,
};
