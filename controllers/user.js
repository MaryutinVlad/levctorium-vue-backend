const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
//const { body, validationResult } = require('express-validator')

const User = require('../models/Users')
const BadRequest = require('../errors/BadRequest')
const AuthError = require('../errors/AuthError')

module.exports.signUp = (req, res, next) => {
  const { email, password, username } = req.body

  //there maybe should be validation for userdata

  return bcrypt.hash(password, 10)
    .then(hash => {
      User.create({
        email,
        password: hash,
        username
      }, { new: true })
    })
    .then(newUser => res.send(newUser))
    .catch(err => {
      return next(err)
    })
}