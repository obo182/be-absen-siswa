const router = require('express').Router()
const KelasController = require('../controllers/KelasController.js')
const authentication = require('../middlewares/authentication.js')
const authorizationAdmin = require('../middlewares/authorizationAdmin.js')

router.get('/',authentication, authorizationAdmin, KelasController.getAll)
router.get('/:idKelas',authentication, authorizationAdmin, KelasController.getDetailKelas)
router.post('/', authentication, authorizationAdmin, KelasController.tambahKelas)
router.delete('/:idKelas', authentication, authorizationAdmin, KelasController.hapusKelas)
router.put('/:idKelas', authentication, authorizationAdmin, KelasController.editKelas)

module.exports = router