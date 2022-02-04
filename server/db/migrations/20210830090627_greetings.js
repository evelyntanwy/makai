
exports.up = (knex) => {
  return knex.schema.createTable('greetings', (table) => {
    table.increments('id')
    table.string('text')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('greetings')
}
