import { RequestHandler  } from 'express'
import  Corporativo  from './corporativos'

export const getCorporativos: RequestHandler = async (_req, res) => {
	try {
		const products = await Corporativo.find()
		res.send(products)
	} catch(err) {
		res.json(err)
	}
}

export const getCorporativo: RequestHandler = async (req, res) => {
	const productFound = await Corporativo.findById(req.params.id)
	if (!productFound) return res.status(204).json()
	return res.json(productFound)
}

export const createCorporativo: RequestHandler = async (req, res) => {
	const CorporativoFound = await Corporativo.findOne({ name: req.body.name })
	if(CorporativoFound)
		return res.status(301).json({ message: 'name already exist' })
	console.log(req.body)
	const corporativo = new Corporativo(req.body)
	const savedCorporativo = await corporativo.save()
	res.json(savedCorporativo)
}

export const updateCorporativo: RequestHandler = async (req, res) => {
	const productFound = await Corporativo.findByIdAndUpdate(req.params.id, req.body)
	res.json(productFound)
}

export const deleteCorporativo: RequestHandler = async (req, res) => {
	const productFound = await Corporativo.findByIdAndDelete(req.params.id)
	!productFound ? res.status(204).json() : res.json(productFound) 
}

