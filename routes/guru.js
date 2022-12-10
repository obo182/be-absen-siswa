const router = require('express').Router()
const GuruController = require('../controllers/GuruController.js')
const authentication = require('../middlewares/authentication.js')
const authorizationAdmin = require('../middlewares/authorizationAdmin.js')

router.get('/',authentication, authorizationAdmin, GuruController.getAll)
router.post('/', authentication, authorizationAdmin, GuruController.tambahGuru)
router.delete('/:idGuru', authentication, authorizationAdmin, GuruController.hapusGuru)
router.put('/:idGuru', authentication, authorizationAdmin, GuruController.editGuru)

module.exports = router