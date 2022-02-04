const config = require('./knexfile').development
const connection = require('knex')(config)

function getAllGreetings (db = connection) {
  return db('greetings')
    .select()
}

module.exports = {
  getAllGreetings
}
