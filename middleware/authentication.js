const jwt = require("jsonwebtoken")


const checkToken = (req, res, next) => {
  let token = req.get("authorization")

  if (token){
    
  }
}