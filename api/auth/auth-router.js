const router = require("express").Router()
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const auth = require("../users/users-model")
const { checkUsernameExists, usernameUnique } = require("./auth-middleware")

router.post("/api/register", usernameUnique, async (req, res, next) => {
    try{
        const {username, password, phoneNumber} = req.body;
        const newUser = await auth.add({
            username,
            password: await bcrypt.hash(password, 1),
            phoneNumber
        })
        res.status(201).json(newUser)
    }catch(err){
        next(err)
    }
})

router.post("/api/login", checkUsernameExists, async (req, res, next) => {
    try{
        const { password } = req.body
        const user = req.user
        const passwordValid = await bcrypt.compare(password, user.password)
    
        if(!passwordValid){
          return res.status(401).json({
            message: "Invalid Credentials",
          })
        }
        const token = jwt.sign({
            user_id: user.user_id,
            username: user.username,
          }, process.env.SECRET, { expiresIn: '24h'})
      
          res.cookie("token", token)
          res.json({
            message: `${user.username} is back!`,
            token: token
          })
    }catch(err){
        next(err)
    }
})

module.exports = router;