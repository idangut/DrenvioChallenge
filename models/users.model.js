const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  userId: { type: String, required: [true, 'ID is required'] },
  name: {
    type: String,
    required: [true, 'Names are required']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true
  }
})

module.exports = mongoose.model('Users', userSchema)
