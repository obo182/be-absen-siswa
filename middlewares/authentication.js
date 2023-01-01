const { decoded } = require("../helpers/jwt.js")

module.exports = (req, res, next) => {
  try {
    if(!req.get('Authorization')){
      throw{status : 401, message : 'Please Login'}
    }
    const user = decoded(req.get('Authorization').split(" ")[1])
    req.user = user
    next()
  } catch (error) {
    next({status : 401, message : 'Please Login'})
  }

}