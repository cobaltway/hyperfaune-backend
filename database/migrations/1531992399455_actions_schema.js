const Schema = use('Schema');
const Database = use('Database');

class ActionsSchema extends Schema {
  async up() {
    await this.create('actions', (table) => {
      table.timestamp('created_at').defaultTo(Database.fn.now());
      table.integer('user_id').references('users.id').onDelete('CASCADE');
      table.string('type');
      table.string('label');
    });

  //  await this.raw('SELECT create_hypertable(\'actions\', \'created_at\');');
  }

  down() {
    this.raw('DROP TABLE IF EXISTS actions CASCADE');
  }
}

module.exports = ActionsSchema;
