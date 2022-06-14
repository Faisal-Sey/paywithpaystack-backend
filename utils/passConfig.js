const bcrypt = require("bcryptjs")

const hashPassword = (password) => {
  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(password, salt);
  return hash
}

const comparePass = (info_password, user_password) => {
  return bcrypt.compareSync(info_password, user_password)
}

module.exports = {
  hashPassword,
  comparePass
}