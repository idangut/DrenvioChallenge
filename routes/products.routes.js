const express = require('express')
const app = express()

const productsController = require('../controllers/products.controller')

app.get('/products', productsController.getProducts)
app.get('/price/:user_id/:product_name', productsController.getSpecialPrice)

module.exports = app
