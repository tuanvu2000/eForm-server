const { response } = require('express');
const User = require('../models/user');

const getAll = async (req, res) => {
    try {
        const list = await User.find().sort('-createdAt');
        res.status(200).json({ message: 'Get list user success', data: list });
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

const postUser = async (req, res) => {
    const { fullname, gender, age, birthday, email, phone, address } = req.body;
    try {
        const newUser = await User.create({
            fullname,
            gender,
            age,
            birthday,
            email,
            phone,
            address
        });
        res.status(200).json({ message: 'create new user success', data: newUser });
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

module.exports = {
    getAll,
    postUser
};
