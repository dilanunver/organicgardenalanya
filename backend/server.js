import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
import productRoutes from '../backend/routes/productRoutes.js'

import { errorHandler, notFound } from '../backend/middleware/errorMiddleware.js'

dotenv.config()

connectDB()
const app = express()

app.use('/api/products', productRoutes)

app.use(notFound)

app.use(errorHandler)

app.get('/', (req, res) => {
  res.send('Api is running...5')
})

app.use('/api/products', productRoutes)


const PORT = process.env.PORT || 5000
console.log(PORT)
app.listen(PORT, console.log(`server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))