const db = require("../data/db-config")

async function add(user) {
  const User = await db("users").returning(["user_id", "username", "password", "phoneNumber"]).insert(user)
    return User;
}

function findBy(filter) {
      return db("users as u")
      .where(filter)
      .first("u.user_id", "u.username", "u.password", "u.phoneNumber")
  }

module.exports = {
    add,
    findBy
}