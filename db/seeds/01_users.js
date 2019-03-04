
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          email: 'abc@gmail.com',
          password: 'test'
        },
        {
          id: 2,
          email: 'jamba1@gmail.com',
          password: 'test'
        },
        {
          id: 3,
          email: 'zoolander@gmail.com',
          password: 'test'
        },
        {
          id: 4,
          email: 'zyx@gmail.com',
          password: 'test'
        },
        {
          id: 5,
          email: 'zyx@gmail.com',
          password: 'test'
        },
        {
          id: 6,
          email: 'abc1@gmail.com',
          password: 'test'
        },
        {
          id: 7,
          email: 'jamba11@gmail.com',
          password: 'test'
        },
        {
          id: 8,
          email: 'zoolander1@gmail.com',
          password: 'test'
        },
        {
          id: 9,
          email: 'zyx1@gmail.com',
          password: 'test'
        },
        {
          id: 10,
          email: 'zyx2@gmail.com',
          password: 'test'
        }

      ]);
    });
};
