const router = require('express').Router()

const controllersVoiture = require('../controllers/voiture.control')
router.get('/:VoitureId',controllersVoiture.getVoiture )
router.get('/', controllersVoiture.getVoitures)
router.post('/create',controllersVoiture.creatVoiture)
router.put('/:VoitureId/update', controllersVoiture.updateVoiture)
router.delete('/:VoitureId/delete',controllersVoiture.deleteVoiture)

module.exports= router 