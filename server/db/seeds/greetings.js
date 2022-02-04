exports.seed = (knex) => {
  return knex('greetings').del()
    .then(() => {
      return knex('greetings').insert([
        { id: 1, text: 'Kia ora' },
        { id: 2, text: 'Mōrena' },
        { id: 3, text: 'Hello' },
        { id: 4, text: 'Hi' }
      ])
    })
}
