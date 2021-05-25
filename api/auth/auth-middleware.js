const { findBy } = require("../users/users-model")

const checkUsernameExists = async (req, res, next) => {
   const { username } = req.body
   const existingUser = await findBy({username});
   if(!existingUser){
     res.status(401).json({
      message: "Invalid credentials"
     })
   }else{
     req.user = existingUser
     next()
   }
}

const usernameUnique = async (req, res, next) => {
  const { username } = req.body
  const existingUser = await findBy({username});
  if(existingUser){
    res.status(400).json({
     message: "Username taken!"
    })
  }else{
    next()
  }
}

module.exports = {
    checkUsernameExists,
    usernameUnique
}