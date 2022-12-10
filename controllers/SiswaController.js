const {Siswa, DataAbsen} = require('../models/index.js')

module.exports = class SiswaController {
  static async getAll(req, res, next){
    try {
      const result = await Siswa.findAll()
      res.status(200).json(result)
    } catch (error) {
      next(error)
    }
  }
  static async tambahSiswa(req, res, next){
    try {
      const {nisn, nama_lengkap, alamat, ttl, no_hp_siswa, no_hp_ortu} = req.body

      const siswa = await Siswa.create({
        nisn, nama_lengkap, alamat, ttl, no_hp_siswa, no_hp_ortu
      })

      res.status(201).json(siswa)
    } catch (error) {
      next(error)
    }
  }
  static async hapusSiswa(req, res, next){
    try {
      const result = await Siswa.destroy({
        where : {
          id : req.params.idSiswa
        }
      })
      if(!result){
        throw {status : 404, message : `Siswa Id ${req.params.idSiswa} Not Found`}
      }
      res.status(200).json({message : `Succes Delete Siswa Id ${req.params.idSiswa}`})
    } catch (error) {
      next(error)
    }
  }
  static async editSiswa(req, res, next){
    try {
      const {nisn, nama_lengkap, alamat, ttl, no_hp_siswa, no_hp_ortu} = req.body

      const result = await Siswa.update({
        nisn, nama_lengkap, alamat, ttl, no_hp_siswa, no_hp_ortu
      }, {
        where : {
          id : req.params.idSiswa
        }
      })
      if(!result[0]){
        throw {status : 404, message : `Siswa Id ${req.params.idSiswa} Not Found`}
      }
      res.status(200).json({message : `Succes Update Siswa Id ${req.params.idSiswa}`})
    } catch (error) {
      next(error)
    }
  }

  static async detailSiswa(req, res, next){
    try {
      try {
        const result = await Siswa.findOne({
          where : {
            id : req.params.idSiswa
          },
          include : [DataAbsen]
        })
        res.status(200).json(result)
      } catch (error) {
        next(error)
      }
    } catch (error) {
      next(error)
    }
  }

  static async absensi(req, res, next){
    try {
      const {id_siswa, status} = req.body
      const absen = await DataAbsen.create({
        id_siswa, status
      })
      res.status(201).json(absen)
    } catch (error) {
      next(error)
    }
  }
}