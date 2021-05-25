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

function update(user_id, changes) {
  return db('users as u')
    .where({ user_id })
    .returning(["u.username", "u.phoneNumber"])
    .update({
      username: changes.username,
      password: changes.password,
      phoneNumber: changes.phoneNumber
    })
}

module.exports = {
    add,
    findBy,
    update
}