const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const userSchema = mongoose.Schema(
    {
        fullname: String,
        gender: Boolean,
        age: Number,
        birthday: Date,
        email: String,
        phone: String,
        address: String
    },
    { timestamps: true }
);

userSchema.plugin(toJSON);

const User = mongoose.model('User', userSchema);

module.exports = User;
