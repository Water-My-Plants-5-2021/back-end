exports.up = async (knex) => {
  await knex.schema
    .createTable('users', (users) => {
      users.increments('user_id')
      users.string('username').notNullable().unique()
      users.string('password').notNullable()
      users.string('phoneNumber').notNullable()
    })
    .createTable('plants', (plants) => {
      plants.increments('plant_id')
      plants.string('nickname').notNullable()
      plants.string('species').notNullable()
      plants.string('h2oFrequency').notNullable()
      plants.string('image')
      plants.integer('user_id').unsigned().notNullable().references('user_id').inTable('users').onUpdate("CASCADE").onDelete("CASCADE");
    })
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('plants')
  await knex.schema.dropTableIfExists('users')
}
