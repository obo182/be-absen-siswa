const router = require('express').Router()
const SiswaController = require('../controllers/SiswaController.js')
const authentication = require('../middlewares/authentication.js')
const authorizationAdmin = require('../middlewares/authorizationAdmin.js')

router.get('/',authentication,authorizationAdmin, SiswaController.getAll)
router.post('/',authentication,authorizationAdmin, SiswaController.tambahSiswa)
router.delete('/:idSiswa',authentication,authorizationAdmin, SiswaController.hapusSiswa)
router.put('/:idSiswa',authentication,authorizationAdmin, SiswaController.editSiswa)

module.exports = router