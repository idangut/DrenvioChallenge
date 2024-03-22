const mongoose = require('mongoose')
const request = require('supertest')
const { app, server } = require('../../app')

require('dotenv').config()

/* Connecting to the database before each test. */
beforeEach(async () => {
  await mongoose.connect(process.env.MONGODB_URI)
})

/* Closing database connection after each test. */
afterEach(async () => {
  await mongoose.connection.close()
  await server.close()
})

describe('GET /products', () => {
  test('should return a list of products when there are products in stock', async () => {
    const res = await request(app).get('/products')

    expect(res.statusCode).toBe(200)
    expect(res.body?.products.length).toBeGreaterThan(0)
  })
})

describe('GET /price/:user_id/:product_name', () => {
  test('should return special price for product if available else shold return default price', async () => {
    const res = await request(app).get(
      '/price/bce7cd06-6e6f-4c31-a132-740ed5c266a7/Puma'
    )
    expect(res.statusCode).toBe(200)
    expect(res.body).toEqual({ brand: 'Puma', price: 120 })
  })
})
