const userRouter = require('express').Router()

import { signUp } from '../controllers/user'

userRouter.post('/signUp', signUp)