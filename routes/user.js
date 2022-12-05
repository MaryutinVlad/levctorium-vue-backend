const userRouter = require('express').Router()

const { signUp, signIn, validate } = require('../controllers/user')

userRouter.post('/sign-up', signUp)

userRouter.post('/sign-in', signIn)

userRouter.get('/:id', validate)

module.exports = userRouter