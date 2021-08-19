import {Router} from 'express'
const router = Router()

import {
	getProducts, 
	createProduct, 
	getProduct, 
	updateProduct, 
	deleteProduct, 
	getHome
} from './productControllers'
import * as cintasCtr from './cintasControllers'
import * as accesoriosCtr from './accesoriosControllers'
import * as extintoresCtr from './extintoresControllers'
import * as corporativosCtr from './corporativosControllers'
import * as eppsCtr from './eppsControllers'

router.get('/', getHome)

router.get('/proteccion-vial', getProducts)
router.get('/cintas', cintasCtr.getCintas)
router.get('/accesorios', accesoriosCtr.getAccesorios)
router.get('/extintores', extintoresCtr.getExtintors)
router.get('/epps', eppsCtr.getEpps)
router.get('/corporativos', corporativosCtr.getCorporativos)

router.get('/proteccion-vial/:id', getProduct)
router.get('/cintas/:id', cintasCtr.getCinta)
router.get('/accesorios/:id', accesoriosCtr.getAccesorio)
router.get('/extintores/:id', extintoresCtr.getExtintor)
router.get('/epps/:id', eppsCtr.getEpp)
router.get('/corporativos/:id', corporativosCtr.getCorporativo)

router.post('/proteccion-vial', createProduct)
router.post('/cintas', cintasCtr.createCinta)
router.post('/accesorios', accesoriosCtr.createAccesorio)
router.post('/extintores', extintoresCtr.createExtintor)
router.post('/epps', eppsCtr.createEpp)
router.post('/corporativos', corporativosCtr.createCorporativo)

router.delete('/proteccion-vial/:id', deleteProduct)
router.delete('/cintas/:id', cintasCtr.deleteCinta)
router.delete('/accesorios/:id', accesoriosCtr.deleteAccesorio)
router.delete('/extintores/:id', extintoresCtr.deleteExtintor)
router.delete('/epps/:id', eppsCtr.deleteEpp)
router.delete('/corporativos/:id', corporativosCtr.deleteCorporativo)

router.put('/proteccion-vial/:id', updateProduct)
router.put('/cintas/:id', cintasCtr.updateCinta)
router.put('/accesorios/:id', accesoriosCtr.updateAccesorio)
router.put('/extintores/:id', extintoresCtr.updateExtintor)
router.put('/epps/:id', eppsCtr.updateEpp)
router.put('/corporativos/:id', corporativosCtr.updateCorporativo)

export default router


