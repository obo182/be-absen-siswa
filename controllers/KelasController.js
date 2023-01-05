const {Kelas, Siswa} = require('../models/index.js')

module.exports = class SiswaController {
  static async getAll(req, res, next){
    try {
      const result = await Kelas.findAll()
      res.status(200).json(result)
    } catch (error) {
      next(error)
    }
  }

  static async getDetailKelas(req, res, next){
    try {
      const result = await Kelas.findOne({
        where : {
          id : req.params.idKelas
        },
        include : [Siswa]
      })
      if(!result){
        throw {status : 404, message : "Data Not found!"}
      }
      res.status(200).json(result)
    } catch (error) {
      next(error)
    }
  }
  static async tambahKelas(req, res, next){
    try {
      const {name} = req.body

      const result = await Kelas.create({
        name
      },)
      res.status(201).json(result)
    } catch (error) {
      next(error)
    }
  }
  static async hapusKelas(req, res, next){
    try {
      const result = await Kelas.destroy({
        where : {
          id : req.params.idKelas
        }
      })
      if(!result){
        throw {status : 404, message : `Data Not Found!`}
      }
      res.status(200).json({message : `Succes Delete Kelas Id ${req.params.idKelas}`})
    } catch (error) {
      next(error)
    }
  }
  static async editKelas(req, res, next){
    try {
      const {name} =  req.body
      const result = await Kelas.update({
        name
      }, {
        where : {
          id : req.params.idKelas
        }
      })
      if(!result[0]){
        throw {status : 404, message : `Kelas Id ${req.params.idKelas} Not Found`}
      }
      res.status(200).json({message : `Succes Update Kelas Id ${req.params.idKelas}`})
    } catch (error) {
      next(error)
    }
  }
}