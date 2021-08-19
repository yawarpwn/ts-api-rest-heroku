import { RequestHandler  } from 'express'
import  Extintor  from './extintores'

export const getExtintors: RequestHandler = async (_req, res) => {
	try {
		const products = await Extintor.find()
		res.send(products)
	} catch(err) {
		res.json(err)
	}
}

export const getExtintor: RequestHandler = async (req, res) => {
	const productFound = await Extintor.findById(req.params.id)
	if (!productFound) return res.status(204).json()
	return res.json(productFound)
}

export const createExtintor: RequestHandler = async (req, res) => {
	const ExtintorFound = await Extintor.findOne({ name: req.body.name })
	if(ExtintorFound)
		return res.status(301).json({ message: 'name already exist' })
	console.log(req.body)
	const extintor = new Extintor(req.body)
	const savedExtintor = await extintor.save()
	res.json(savedExtintor)
}

export const updateExtintor: RequestHandler = async (req, res) => {
	const productFound = await Extintor.findByIdAndUpdate(req.params.id, req.body)
	res.json(productFound)
}

export const deleteExtintor: RequestHandler = async (req, res) => {
	const productFound = await Extintor.findByIdAndDelete(req.params.id)
	!productFound ? res.status(204).json() : res.json(productFound) 
}

