import mongoose, { MongooseOptions } from 'mongoose'

(async () => {
	try{
		const mongooseOptions: MongooseOptions = {
			useUnifiedTopology: true,
			useNewUrlParser: true,

			//user: config.MONGO_USER, 
		}
		const db = await mongoose.connect(`mongodb+srv://yawarpwn:Db4524987@cluster0.ms9fs.mongodb.net/tellDatabase?retryWrites=true&w=majority`, mongooseOptions)
		console.log('database is connect to:', db.connection.name)
	}	catch(err) {
		console.error(err)
	}

})()
