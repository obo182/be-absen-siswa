module.exports = (err, req, res, next) => {
  let message = err.message || 'Something broke!'
  let status = err.status || 500

  res.status(status).json({message})
}