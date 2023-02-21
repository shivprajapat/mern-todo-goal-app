const expressAsyncHandler = require("express-async-handler")
const User = require('../models/userModel')
const bcrypt = require('bcryptjs')

// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = expressAsyncHandler(async (req, res) => {

    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    // Check if user exists
    const userExists = await User.findOne({ email })

    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    //   Hash Password
    const salt = await bcrypt.genSalt(0);
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
        name,
        email,
        password: hashedPassword,
    })
    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email
        })
    }
    else {

        res.status(400)
        throw new Error("Invalid user data")
    }
})

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
const loginUser = expressAsyncHandler(async (req, res) => {
    res.status(200).json({ message: "login user" })
})

// @desc    Get user data
// @route   GET /api/users/me
// @access  Private

const getMe = expressAsyncHandler(async (req, res) => {
    res.status(200).json({ message: "User Data" })
})

module.exports = {
    registerUser,
    loginUser,
    getMe
}