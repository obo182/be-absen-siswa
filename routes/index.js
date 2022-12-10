const router = require('express').Router()
const siswa = require('./siswa.js')
const guru = require('./guru.js')

router.get('/', (req,res,next) => res.status(200).json({message : 'SMKN 2 Sumbawa Besar'}))
router.use('/siswa',siswa)
router.use('/guru',guru)

module.exports = router