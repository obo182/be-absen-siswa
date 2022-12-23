const {Siswa, DataAbsen} = require('../models/index.js')
const axios = require('axios')

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
      const {nisn, nama_lengkap,jenis_kelamin, alamat, tempat_lahir, ttl, no_hp_siswa, no_hp_ortu} = req.body

      const siswa = await Siswa.create({
        nisn, nama_lengkap,jenis_kelamin, alamat, tempat_lahir, ttl, no_hp_siswa, no_hp_ortu
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
      const {nisn, nama_lengkap,jenis_kelamin, alamat, tempat_lahir, ttl, no_hp_siswa, no_hp_ortu} = req.body

      const result = await Siswa.update({
        nisn, nama_lengkap,jenis_kelamin, alamat, tempat_lahir, ttl, no_hp_siswa, no_hp_ortu
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
      const siswa = await Siswa.findOne({
        where : {
          id : id_siswa
        }
      })

      if(!siswa){
        throw {status : 400, message :  `ID ${id_siswa} Not Found!`}
      }
      const absen = await DataAbsen.create({
        id_siswa, status
      })
      const notif = await axios({
        url : 'http://localhost:3001/send',
        method : 'POST',
        data : {
          no_hp_ortu : siswa.no_hp_ortu,
          message : `Anak Anda ${siswa.nama_lengkap} *${status}*`
        }
      })
      
      res.status(201).json({...absen.dataValues, ...notif.data})
    } catch (error) {
      next(error)
    }
  }
}