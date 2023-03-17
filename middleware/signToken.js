const jwt = require('jsonwebtoken')

const signToken = (user, id) => {
  return jwt.sign(
    {
      email: user,
      id: id,
      start: new Date().getTime(),
      end: new Date().setDate(new Date().getDate() + 1),
    },
    process.env.JWT_SECRET
  )
}
module.exports = signToken
