const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        lowercase: true,
        trim: true,
    },
    firstName: String,
    lastName: String,
    encryptedPassword: String
})

module.exports = mongoose.model('User', UserSchema)