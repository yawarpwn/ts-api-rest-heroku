import dotenv from 'dotenv'
dotenv.config()

export default  {
	DB: process.env.MONGODB_URI || 'https://localhost:5000'
}
