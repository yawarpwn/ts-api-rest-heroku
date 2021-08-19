import { RequestHandler  } from 'express'
import  Epp  from './epps'

export const getEpps: RequestHandler = async (_req, res) => {
	try {
		const products = await Epp.find()
		res.send(products)
	} catch(err) {
		res.json(err)
	}
}

export const getEpp: RequestHandler = async (req, res) => {
	const productFound = await Epp.findById(req.params.id)
	if (!productFound) return res.status(204).json()
	return res.json(productFound)
}

export const createEpp: RequestHandler = async (req, res) => {
	const EppFound = await Epp.findOne({ name: req.body.name })
	if(EppFound)
		return res.status(301).json({ message: 'name already exist' })
	console.log(req.body)
	const epp = new Epp(req.body)
	const savedEpp = await epp.save()
	res.json(savedEpp)
}

export const updateEpp: RequestHandler = async (req, res) => {
	const productFound = await Epp.findByIdAndUpdate(req.params.id, req.body)
	res.json(productFound)
}

export const deleteEpp: RequestHandler = async (req, res) => {
	const productFound = await Epp.findByIdAndDelete(req.params.id)
	!productFound ? res.status(204).json() : res.json(productFound) 
}

