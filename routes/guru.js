const router = require('express').Router()
const GuruController = require('../controllers/GuruController.js')

router.get('/', GuruController.getAll)

module.exports = router