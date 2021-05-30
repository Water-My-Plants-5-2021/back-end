const db = require("../data/db-config")

function insert(plant) {
    return db('sample')
    .returning(["plant_id", "nickname", "species", "h2oFrequency", "image"])
    .insert(plant)
}

function get(){
    return db("sample")
    .orderBy('plant_id')
    .select("plant_id", "nickname", "species", "h2oFrequency", "image")
}

function getById(filter){
    return db("sample")
    .where(filter)
    .select("plant_id", "nickname", "species", "h2oFrequency", "image")
}

function update(id, newPlant){
    return db("sample")
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
    return db("sample")
    .where({plant_id : id})
    .del()
}

//function 
module.exports = {
    insert,
    get,
    getById,
    update,
    remove
}