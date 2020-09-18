const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, default: 0 },
    comment: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  maker: { type: String, required: true },
  price: { type: Number, default: 0, required: true },
  category: { type: String, required: true },
  countInStock: { type: Number, default: 0, required: true },
  description: { type: String, required: true },
  rating: { type: Number, default: 0, required: true },
  numReviews: { type: Number, default: 0, required: true },
  reviews: [reviewSchema],
});


module.exports = mongoose.model('Product', productSchema)