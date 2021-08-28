import { Schema, model } from 'mongoose'
const productSchema = new Schema({
	name: { type: String, require: true },
	desc: { 
		parraph1: {
			type: String,
			require: true,
		},
		parraph2: String,
		parraph3: String,
		parraph4: String
	},
	price: { type: Number, require: true },
	category: String,
	available: Boolean,
	fichaTecnica: String,
	pedidoMinimo: Number,
	sku: String,
	rating: Number,
	marca: String,
	img: {
		img1: { type: String, require: true },
		img2: String,
		img3: String,
		img4: String
	},
}, 
{
	versionKey: false,
	timestamps: true
})

export default model ('Product', productSchema)
