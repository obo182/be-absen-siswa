const { hash } = require('../helpers/bcryptjs.js')
const {ProfileGuru, User, sequelize} = require('../models/index.js')

module.exports = class SiswaController {
  static async getAll(req, res, next){
    try {
      const result = await ProfileGuru.findAll({
        include : [User]
      })
      res.status(200).json(result)
    } catch (error) {
      next(error)
    }
  }
  static async tambahGuru(req, res, next){
    const t = await sequelize.transaction();
    try {
      const {username, nama_lengkap, alamat} = req.body
      const user = await User.create({
        username,
        password : hash(`${process.env.PASSWORD_GURU}`),
        role :'guru'
      }, { transaction: t })

      const guru = await ProfileGuru.create({
        user_id : user.id,
        nama_lengkap,
        alamat
      }, { transaction: t })
      
      await t.commit();
      res.status(201).json(guru)
    } catch (error) {
      await t.rollback();
      next(error)
    }
  }
  static async hapusGuru(req, res, next){
    try {
      if(+req.params.idGuru === 1){
        throw {status : 400, message : `Cannot Delete Profile Guru Id ${req.params.idGuru} - ADMIN`}
      }
      const checkUser = await ProfileGuru.findOne({
        where : {
          id : req.params.idGuru
        }
      })
      const result = await User.destroy({
        where : {
          id : checkUser.user_id
        }
      })
      if(!result){
        throw {status : 404, message : `Profile Guru Id ${req.params.idGuru} Not Found`}
      }
      res.status(200).json({message : `Succes Delete Profile Guru Id ${req.params.idGuru}`})
    } catch (error) {
      next(error)
    }
  }
  static async editGuru(req, res, next){
    try {
      const {nama_lengkap, alamat} =  req.body
      const result = await ProfileGuru.update({
        nama_lengkap, alamat
      }, {
        where : {
          id : req.params.idGuru
        }
      })
      if(!result[0]){
        throw {status : 404, message : `Profile Guru Id ${req.params.idGuru} Not Found`}
      }
      res.status(200).json({message : `Succes Update Profile Guru Id ${req.params.idGuru}`})
    } catch (error) {
      next(error)
    }
  }
}