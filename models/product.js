const mongoose = require('mongoose')
const Schema = mongoose.Schema


const productSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  maker: { type: Schema.Types.ObjectId, ref: 'User'},
  price: { type: String, default: "0", required: true },
  category: { type: String, required: true },
  countInStock: { type: Number, default: 0, required: true },
  description: { type: String, required: true },
});


module.exports = mongoose.model('Product', productSchema)