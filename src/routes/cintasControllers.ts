import { RequestHandler  } from 'express'
import  Cinta  from './cinta'

export const getCintas: RequestHandler = async (_req, res) => {
	try {
		const products = await Cinta.find()
		res.send(products)
	} catch(err) {
		res.json(err)
	}
}

export const getCinta: RequestHandler = async (req, res) => {
	const productFound = await Cinta.findById(req.params.id)
	if (!productFound) return res.status(204).json()
	return res.json(productFound)
}

export const createCinta: RequestHandler = async (req, res) => {
	const CintaFound = await Cinta.findOne({ name: req.body.name })
	if(CintaFound)
		return res.status(301).json({ message: 'name already exist' })
	console.log(req.body)
	const cinta = new Cinta(req.body)
	const savedCinta = await cinta.save()
	res.json(savedCinta)
}

export const updateCinta: RequestHandler = async (req, res) => {
	const productFound = await Cinta.findByIdAndUpdate(req.params.id, req.body)
	res.json(productFound)
}

export const deleteCinta: RequestHandler = async (req, res) => {
	const productFound = await Cinta.findByIdAndDelete(req.params.id)
	!productFound ? res.status(204).json() : res.json(productFound) 
}

