const express = require("express")
const router = express.Router()
const db = require("./sample2-model")

router.post("/", async (res, req, next) => {
    try{
        const {nickname, species, h2oFrequency, image} = req.req.body
        const newPlant = await db.insert({
            nickname: nickname,
            species: species,
            h2oFrequency: h2oFrequency,
            image: image
        })

        res.res.json(newPlant[0])

    }catch(err){
        next(err)
    }
})

router.get("/", async (req, res, next) => {
    try{
        const plants = await db.get();
        res.json(plants)
    }catch(err){
        next(err)
    }
})

router.get("/:plant_id", async (req, res, next) => {
    try{
        const { plant_id } = req.params
        const plant = await db.getById({plant_id});
        res.json(plant[0])
    }catch(err){
        next(err)
    }
})

router.put("/:plant_id", async (req, res, next) => {
    try{
    const { plant_id } = req.params
    const {nickname, species, h2oFrequency, image} = req.body
    const plant = await db.update(plant_id, {
        nickname: nickname,
        species: species,
        h2oFrequency: h2oFrequency,
        image: image
    });
    res.json(plant)
    console.log(nickname, species, h2oFrequency, image)
    }catch(err){
        next(err)
    }
})

router.delete("/:plant_id", async (req, res, next) => {
    try{
        const { plant_id } = req.params
        const plant = await db.remove(plant_id)
        res.end()
    }catch(err){
        next(err)
    }
})

module.exports = router;