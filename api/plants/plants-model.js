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

function update(id, newPlant){
    return db("plants")
    .where({plant_id : id})
    .returning(["plant_id", "nickname", "species", "h2oFrequency", "image"])
    .update({
        nickname: newPlant.nickname,
        species: newPlant.species,
        h2oFrequency: newPlant.h2oFrequency,
        image: newPlant.image
    })
}

function remove(id){
    return db("plants")
    .where({plant_id : id})
    .del()
}

module.exports = {
    insert,
    get,
    update,
    remove
}