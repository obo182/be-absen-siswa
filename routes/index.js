const router = require('express').Router()

router.get('/', (req,res,next) => res.status(200).json({message : 'SMKN 2 Sumbawa Besar'}))

module.exports = router