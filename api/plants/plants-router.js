const express = require("express")
const router = express.Router()
const db = require("./plants-model")
const { restricted } = require("../users/users-middleware")

router.post("/", restricted, async (res, req, next) => {
    try{
        const { user_id } = req.req.token
        const { nickname, species, h2oFrequency, image } = req.req.body
    
        const newPlant = await db.insert({
            nickname: nickname,
            species: species,
            h2oFrequency: h2oFrequency,
            image: image,
            user_id: user_id
        })
    
        res.res.json(newPlant[0])
    }catch(err){
        next(err)
    }
})

router.get("/", restricted, async (req, res, next) => {
    try{
        const { user_id } = req.token
        const plants = await db.get({user_id});
        res.json(plants)
    }catch(err){
        next(err)
    }
})

router.get("/:plant_id", restricted, async (req, res, next) => {
    try{
        const { plant_id } = req.params
        const plant = await db.get({plant_id});
        res.json(plant[0])
    }catch(err){
        next(err)
    }
})

module.exports = router;