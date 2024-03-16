"use strict";
/* -------------------------------------------------------
    EXPRESSJS - MONGODB Connection Mongoose
------------------------------------------------------- */

const mongoose = require('mongoose')

const MONGODB = process.env.MONGODB

// mongoose.connect('mongodb://localhost:27017/blogAPI')
mongoose.connect(MONGODB)
    .then(() => console.log("DB Connected"))
    .catch((err) => console.log("DB  NOT Connected", err))