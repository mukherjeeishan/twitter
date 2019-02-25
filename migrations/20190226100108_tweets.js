
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tweets', table => {
      table.increments('id').primary()
      table.string('text')
      table.integer('tweeted_at')
      table.integer('user_id')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('tweets')
  
};
