const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')

const { PORT = 5000 } = process.env
const app = express()

app.set('port', PORT)

mongoose.connect('mongodb://localhost:27017/lectorium-vue-db')
  .then(() => console.log('Db is connected'))
  .catch((err) => console.log(`Failed with error: ${err}`))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.listen(app.get('port'), () => {
  console.log(`listening on port ${app.get('port')}`)
})