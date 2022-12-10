const router = require('express').Router()
const siswa = require('./siswa.js')
const guru = require('./guru.js')
const UserController = require('../controllers/UserController.js')

router.get('/', (req,res,next) => res.status(200).json({message : 'SMKN 2 Sumbawa Besar'}))
router.post('/login', UserController.login)
router.use('/siswa',siswa)
router.use('/guru',guru)

module.exports = router