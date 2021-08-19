import { RequestHandler  } from 'express'
import  Product  from './product'

export const getHome: RequestHandler =  (_req, res) => {
	res.send('hello world')	
}

export const getProducts: RequestHandler = async (_req, res) => {
	try {
		const products = await Product.find()
		res.send(products)
	} catch(err) {
		res.json(err)
	}
}

export const getProduct: RequestHandler = async (req, res) => {
	const productFound = await Product.findById(req.params.id)
	if (!productFound) return res.status(204).json()
	return res.json(productFound)
}

export const createProduct: RequestHandler = async (req, res) => {
	const ProductFound = await Product.findOne({ name: req.body.name })
	if(ProductFound)
		return res.status(301).json({ message: 'name already exist' })
	console.log(req.body)
	const product = new Product(req.body)
	const savedProduct = await product.save()
	res.json(savedProduct)
}

export const updateProduct: RequestHandler = async (req, res) => {
	const productFound = await Product.findByIdAndUpdate(req.params.id, req.body)
	res.json(productFound)
}

export const deleteProduct: RequestHandler = async (req, res) => {
	const productFound = await Product.findByIdAndDelete(req.params.id)
	!productFound ? res.status(204).json() : res.json(productFound) 
}

