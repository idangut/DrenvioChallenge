const mongoose = require('mongoose')
const Schema = mongoose.Schema

const producSchema = new Schema({
  brand: {
    type: String,
    required: [true, 'Brand is required']
  },
  price: {
    type: Number,
    required: [true, 'Price is required']
  },
  stock: {
    type: Number,
    required: [true, 'Stock is required']
  },
  specialPrices: {
    type: Object,
    default: {}
  }
})

module.exports = mongoose.model('products', producSchema)
