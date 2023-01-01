const router = require('express').Router()
const UserController = require('../controllers/UserController.js')
const authentication = require('../middlewares/authentication.js')
const authorizationAdmin = require('../middlewares/authorizationAdmin.js')

router.post('/login', UserController.login)
router.post('/check-token',UserController.checkToken)
router.put('/:idUser', authentication, authorizationAdmin, UserController.updateAkun)

module.exports = router