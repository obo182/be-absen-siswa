const {Siswa, DataAbsen} = require('../models/index.js')

module.exports = class SiswaController {
  static async getAll(req, res, next){
    try {
      const result = await Siswa.findAll({
        include : [DataAbsen]
      })
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
}