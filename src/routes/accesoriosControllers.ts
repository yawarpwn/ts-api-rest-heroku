import { RequestHandler  } from 'express'
import  Accesorio  from './accesorios'

export const getAccesorios: RequestHandler = async (_req, res) => {
	try {
		const products = await Accesorio.find()
		res.send(products)
	} catch(err) {
		res.json(err)
	}
}

export const getAccesorio: RequestHandler = async (req, res) => {
	const productFound = await Accesorio.findById(req.params.id)
	if (!productFound) return res.status(204).json()
	return res.json(productFound)
}

export const createAccesorio: RequestHandler = async (req, res) => {
	const AccesorioFound = await Accesorio.findOne({ name: req.body.name })
	if(AccesorioFound)
		return res.status(301).json({ message: 'name already exist' })
	console.log(req.body)
	const accesorio = new Accesorio(req.body)
	const savedAccesorio = await accesorio.save()
	res.json(savedAccesorio)
}

export const updateAccesorio: RequestHandler = async (req, res) => {
	const productFound = await Accesorio.findByIdAndUpdate(req.params.id, req.body)
	res.json(productFound)
}

export const deleteAccesorio: RequestHandler = async (req, res) => {
	const productFound = await Accesorio.findByIdAndDelete(req.params.id)
	!productFound ? res.status(204).json() : res.json(productFound) 
}

