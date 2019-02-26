
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tweets').del()
    .then(function () {
      // Inserts seed entries
      return knex('tweets').insert([
        {id: 10, text: 'Hi I am Bob',   tweeted_at: 1551129917092, user_id: 1 },
        {id: 20, text: 'Hi I am Alice', tweeted_at: 1551130034909, user_id: 2 },
        {id: 30, text: 'Hi I am Eve',   tweeted_at: 1551130051718, user_id: 3 }
      ]);
    });
};
