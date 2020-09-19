const mongoose = require('mongoose')
const Schema = mongoose.Schema

const storeSchema = new Schema({
    storePicture: String,
    storeName: String,
    storeLocation: String,
    bio: String
});

module.exports = mongoose.model('Store', storeSchema)