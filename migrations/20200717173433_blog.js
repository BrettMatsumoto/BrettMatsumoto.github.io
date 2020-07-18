
exports.up = function (knex) {
    return knex.schema.createTable('blog', (table) => {
        table.increments('id');
        table.string('title', 255).notNullable();
        table.text('content');
        table.timestamp('created_at');
        table.timestamp('updated_at');
    })
};

exports.down = function (knex) {

};
