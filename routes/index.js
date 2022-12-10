const router = require('express').Router()
const siswa = require('./siswa.js')
const guru = require('./guru.js')
const user = require('./user.js')

router.get('/', (req,res,next) => res.status(200).json({message : 'SMKN 2 Sumbawa Besar'}))
router.use('/user', user)
router.use('/siswa',siswa)
router.use('/guru',guru)

module.exports = router