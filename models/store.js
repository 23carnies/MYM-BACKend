const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Store = new Schema ({
    storePicture: String,
    storeName: String,
    storeLocation: String,
    bio: String
})