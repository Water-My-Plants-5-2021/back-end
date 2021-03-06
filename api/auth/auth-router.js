const router = require("express").Router()
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const auth = require("../users/users-model")
const { checkUsernameExists, usernameUnique } = require("./auth-middleware")

router.post("/register", usernameUnique, async (req, res, next) => {
    try{
        const {username, password, phoneNumber} = req.body;
        const newUser = await auth.add({
            username,
            password: await bcrypt.hash(password, 1),
            phoneNumber
        })
        const User = newUser[0]
        res.status(201).json({
          username: User.username,
          phoneNumber: User.phoneNumber
        })
    }catch(err){
        next(err)
    }
})

router.post("/login", checkUsernameExists, async (req, res, next) => {
    try{
        const { password } = req.body
        const user = req.user
        const passwordValid = await bcrypt.compare(password, user.password)
    
        if(!passwordValid){
          return res.status(401).json({
            message: "Invalid Credentials",
          })
        }else{
          const token = jwt.sign({
            user_id: user.user_id,
            username: user.username,
            phoneNumber: user.phoneNumber
          }, process.env.SECRET, { expiresIn: '24h'})
      
          res.cookie("token", token)
          res.json({
            username: user.username,
            phoneNumber: user.phoneNumber,
            token: token
          })
        }
    }catch(err){
        next(err)
    }
})

module.exports = router;