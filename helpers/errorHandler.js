module.exports = (err, req, res, next) => {
  console.log(err);
  let message = err.message || 'Something broke!'
  let status = err.status || 500

  if(err.name === 'SequelizeUniqueConstraintError'){
    message = err.errors[0].message
    status = 400
  }
  

  res.status(status).json({message})
}