import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import productRoutes from './routes/productRoutes'

const app = express()


app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(productRoutes)

export default app
