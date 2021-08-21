import mongoose, { MongooseOptions } from 'mongoose'
import config from './config'
(async () => {
	try{
		const mongooseOptions: MongooseOptions = {
			useUnifiedTopology: true,
			useNewUrlParser: true,

			//user: config.MONGO_USER, 
		}
		const db = await mongoose.connect(config.MONGODB_URI, mongooseOptions)
		console.log('database is connect to:', db.connection.name)
	}	catch(err) {
		console.error(err)
	}

})()
