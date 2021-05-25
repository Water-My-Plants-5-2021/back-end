const router = require("express").Router()
const bcrypt = require("bcryptjs")
const db = require("./users-model")
const { restricted } = require("./users-middleware")

router.put("/", restricted, async (res, req, next) => {
    try{
        const user_id = req.req.token.user_id


        const {username, password, phoneNumber} = req.req.body;

        const newUser = await db.update(user_id,{
            username,
            password: await bcrypt.hash(password, 1),
            phoneNumber
        })
        res.res.json(newUser)
    }catch(err){
        next(err)
    }
})

module.exports = router;