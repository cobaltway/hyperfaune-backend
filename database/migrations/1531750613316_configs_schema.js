const Schema = use('Schema');

class ConfigsSchema extends Schema {
  up() {
    this.create('configs', (table) => {
      table.increments();

      table.string('key').notNullable().unique();
      table.json('value').notNullable();
      table.string('type').default('String');
    });
  }

  down() {
    this.raw('DROP TABLE IF EXISTS configs CASCADE');
  }
}

module.exports = ConfigsSchema;
