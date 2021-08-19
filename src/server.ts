import express from 'express'

const app = express()

const PORT:  string | number = process.env.PORT || 4000

app.use('/', (_req, res) => {
	res.send('<h1>Welcome to simple app</h1>')
})

app.listen(PORT, () => {
	console.log(`puerto levantando en ${PORT}`)
}) 
