const db = require("../data/db-config")

function insert(plant) {
    return db('plants')
    .returning(["plant_id", "nickname", "species", "h2oFrequency", "image"])
    .insert(plant)
}

function get(filter){
    return db("plants as p")
    .where(filter)
    .select("plant_id", "nickname", "species", "h2oFrequency", "image")
}

//function 
module.exports = {
    insert,
    get
}