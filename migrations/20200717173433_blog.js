
exports.up = function (knex) {
    return knex.schema.createTable('blog', (table) => {
        table.increments('id');
        table.string('title', 255).notNullable();
        table.text('content');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('blog');
};
