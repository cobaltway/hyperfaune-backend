const Schema = use('Schema');

class UserSchema extends Schema {
  up() {
    this.create('users', (table) => {
      table.increments();

      table.string('name');
      table.string('email').unique();
      table.string('password');

      table.string('reset_token');
      table.integer('access_level').defaultTo(0);
      table.boolean('is_active').default(true);

      table.string('lang').defaultTo('en');

      table.timestamp('last_online');

      table.timestamps();
    });
  }

  down() {
    this.raw('DROP TABLE IF EXISTS users CASCADE');
  }
}

module.exports = UserSchema;
