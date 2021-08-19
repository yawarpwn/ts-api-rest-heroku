import app from './app'
import './database'

const PORT:  string | number = process.env.PORT || 4000

app.listen(PORT, () => {
	console.log(`puerto levantando en ${PORT}`)
}) 
