const express = require('express')
const dotenv = require('dotenv')
const products = require('./data/products')

dotenv.config()

const app = express()

app.get('/', (req, res) => {
  res.send('Api is running...5')
})

app.get('/api/products', (req, res) => {
  res.json(products)
})

app.get('/api/products/:id', (req, res) => {
  console.log(req)
  const product = products.find(p => p.id === req.params.id)
  res.json(product)
})

const PORT = process.env.PORT || 5000
console.log(PORT)
app.listen(PORT, console.log(`server is running in ${process.env.NODE_ENV} mode on port ${PORT}`))