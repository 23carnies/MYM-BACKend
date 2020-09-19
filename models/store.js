const mongoose = require('mongoose');
const Schema = mongoose.Schema

const productSchema = new Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: String, default: "0", required: true },
    category: { type: String, required: true },
    countInStock: { type: Number, default: 0, required: true },
    description: { type: String, required: true },
  }, {
      timestamps: true,
  });


const storeSchema = new Schema({
    storePicture: String,
    storeName: String,
    storeLocation: String,
    bio: String,
    products: [productSchema]
  }, {
      timestamps: true,
  });