"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG API
------------------------------------------------------- */

const mongoose = require('mongoose')

// // Password Encryption:
// // https://nodejs.org/api/crypto.html#cryptopbkdf2syncpassword-salt-iterations-keylen-digest
// const crypto = require('node:crypto')

// const keyCode = process.env?.SECRET_KEY || 'write_random_chars_in_here'
// const loopCount = 10_000 // 10K
// const charCount = 32 // write 32 for 64
// const encType = 'sha512'

// const passwordEncrypt = function (password) {
//     return crypto.pbkdf2Sync(password, keyCode, loopCount, charCount, encType).toString('hex')
// }
const passwordEncrypt = require('../helpers/passwordEncrypt')


// Schema:
const UserSchema = new mongoose.Schema({

    email: {
        type: String,
        trim: true,
        unique: true,
        // unique: [true, 'Email must be unique.'], // Not support
        // required: true,
        required: [true, 'Email must be required.'],
        // validate: (email) => { return true },
        // validate: [
        //     (email) => {
        //         if (email.includes('@') && email.includes('.')) {
        //             return true
        //         }
        //         return false
        //     },
        //     'Email type is incorrect'
        // ],
        validate: [
            (email) => (email.includes('@') && email.includes('.')),
            'Email type is incorrect'
        ]
    },

    password: {
        type: String,
        trim: true,
        required: true,
        // set: (password) => { return password + '123' },
        // set: function (password) { return password + '123' },
        set: (password) => passwordEncrypt(password)
        // set: passwordEncrypt
    },

    firstName: String,

    lastName: String,

}, {
    collection: 'user',
    timestamps: true
})

// module.exports = {
//     User: mongoose.model('User', UserSchema)
// }

module.exports = mongoose.model('User', UserSchema)