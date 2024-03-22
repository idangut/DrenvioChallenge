const productModel = require('../models/products.model')
const userModel = require('../models/users.model')

const getProducts = async (req, res) => {
  try {
    const products = await productModel.find({ stock: { $gt: 0 } }).exec()

    return res.status(200).json({
      products
    })
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
}

const getSpecialPrice = async (req, res) => {
  try {
    // get user_id and product_name from the paramas
    const { user_id, product_name } = req.params

    // find the user by id
    const user = await userModel.findOne({ userId: user_id })

    if (!user) return res.status(404).json({ error: 'User not found' })

    // find the product by brand
    const product = await productModel.findOne({ brand: product_name })

    if (!product) return res.status(404).json({ error: 'Product not found' })

    // look for special price in product based on user_id
    const specialPrice = product.specialPrices && product.specialPrices[user_id]

    if (specialPrice)
      res.status(200).json({ brand: product_name, price: specialPrice })
    else res.json({ brand: product_name, price: product.price })
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
}

module.exports = {
  getProducts,
  getSpecialPrice
}
