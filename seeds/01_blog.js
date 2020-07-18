
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('blog').del()
    .then(function () {
      // Inserts seed entries
      return knex('blog').insert([
        { id: 1, title: 'Hello' },
        { id: 2, title: 'World' },
        { id: 3, title: 'Again' }
      ]);
    });
};
