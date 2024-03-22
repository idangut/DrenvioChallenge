const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()

const PORT = process.env.PORT || 3000

app.use(cors())

/* Custom Middleware for Logging Requests */
app.use((req, res, next) => {
  let methodColor = ''
  switch (req.method) {
    case 'POST':
      methodColor = '\x1b[33m' // Yellow color
      break
    case 'PUT':
      methodColor = '\x1b[36m' // Cyan color
      break
    case 'DELETE':
      methodColor = '\x1b[31m' // Red color
      break
    default: // Green color
      methodColor = '\x1b[32m'
      break
  }

  const resetColor = '\x1b[0m' // Reset color
  console.log(`${methodColor}${req.method}${resetColor} ${req.url}`)
  next()
})

/* Routes */
app.use(require('./routes/products.routes'))

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB AG_Challenge'))
  .catch(error => console.error(error))

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

module.exports = {server, app}
