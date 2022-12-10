const router = require('express').Router()
const SiswaController = require('../controllers/SiswaController.js')

router.get('/', SiswaController.getAll)

module.exports = router