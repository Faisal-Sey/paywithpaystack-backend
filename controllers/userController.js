const db = require("../models")
const passConfig = require("../utils/passConfig")


// create main Model
const User = db.user


// create user
const register = async (req, res) => {


  let info = {
    username: req.body.username,
    password: passConfig.hashPassword(req.body.password),
    first_name: req.body.first_name,
    last_name: req.body.last_name,
  }

  const user = await User.create(info)
  res.status(200).send(user)
  console.log(user)
}


const login = async (req, res) => {
  

  let info = {
    username: req.body.username,
    password: req.body.password,
  }

  console.log(info.username)
  console.log(info.password)

  const user = await User.findOne({ where: { username: info.username }})
  console.log(user)
  if (passConfig.comparePass(info.password, user.password)) {res.status(200).send(user)}
  console.log(user)
}


// All Users
const getUsers = async(req, res) => {

  let users = await User.findAll({
    attributes: [
      'id',
      'username',
      'first_name',
      'last_name'
    ]
  })
  res.status(200).send(users)

}

// One User
const getUser = async(req, res) => {

  let id = req.params.id
  let user = await User.findOne({ where: {id: id} })
  res.status(200).send(user)

}

// Delete User
const deleteUser = async(req, res) => {

  let id = req.params.id
  await User.destroy({ where: {id: id} })
  res.status(200).send("Deleted!")

}


// Change User
const changePassword = async(req, res) => {

  let info = {
    username: req.body.username,
    password: req.body.password,
  } 
  let user = await User.update(
    { password: passConfig.hashPassword(info.password) }, 
    { where: { username: info.username } }
  )

  res.status(200).send("Password Changed Successfully")

}


// exports
module.exports = {
  register,
  login,
  getUser,
  getUsers,
  deleteUser,
  changePassword,
}



