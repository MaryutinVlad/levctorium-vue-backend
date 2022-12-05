const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
//const { body, validationResult } = require('express-validator')

const User = require('../models/Users')
const BadRequest = require('../errors/BadRequest')
const AuthError = require('../errors/AuthError')

module.exports.signUp = async (req, res, next) => {
  const { email, password, username } = req.body
  const hash = await bcrypt.hash(password, 10)
  const user = new User({...req.body, password: hash})

  await user.save()
  
  return res.json(await User.find(user))
}

module.exports.signIn = async (req, res, next) => {
  const { email, password } = req.body
  const user = await User.findOne({ email }).select('+password')

  const matched = await bcrypt.compare(password, user.password)

   if (matched) {
    const token = jwt.sign(
      { _id: user._id  },
      'some-secret-key',//
      { expiresIn: '5d' }
    )

    return res.json({ token })
  } else {

    return res.json({ error: 'wrong data'})
  }
}

module.exports.validate = async (req, res, next) => {
  const user = await User.findOne({ _id: req.params.id })
  
  return res.json(user)
}