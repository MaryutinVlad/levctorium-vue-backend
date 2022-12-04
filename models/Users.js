const mongoose = require('mongoose')

const User = new mongoose.Schema({
  username: {
    type: String,
    maxLength: [20, "username's max length is 20 characters"]
  },
  password: {
    type: String,
    required: [true, 'password is missing'],
    minLength: [6, 'password has to be at least 6 characters long'],
    select: false
  },
  email: {
    type: String,
    required: [true, 'email is missing'],
    unique: true
  }
})

module.exports = mongoose.model('User', User)