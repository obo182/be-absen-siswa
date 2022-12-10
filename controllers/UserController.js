const { compare, hash } = require('../helpers/bcryptjs.js')
const { token } = require('../helpers/jwt.js')
const {User} = require('../models/index.js')

module.exports = class UserController {
  static async login(req, res, next){
    try {
      const {username, password} = req.body
      
      const user = await User.findOne({
        where : {
          username
        }
      })
      if(username === null){
        throw {status : 401, message : "Email/Password Wrong"}
      }
      
      const checkPassword = compare(password, user.password)
      if(!checkPassword){
        throw {status : 401, message : "Email/Password Wrong"}
      }

      const acs_tkn = token({id : user.id, username : user.username, role:user.role})
      res.status(200).json({access_token : acs_tkn})
    } catch (error) {
      next(error)
    }
  }

  static async updateAkun(req, res, next){
    try {
      const {username, password, role} = req.body
      const pass = hash(password)
      const result = await User.update({
        username, 
        password : pass,
        role
      }, {
        where : {
          id : req.params.idUser
        }
      })
      if(!result[0]){
        throw {status : 404, message : `User Id ${req.params.idUser} Not Found`}
      }
      res.status(200).json({message : `Succes Update User Id ${req.params.idUser}`})
      
    } catch (error) {
      next(error)
    }
  }
}