const Schema = use('Schema');

class ExtensionSchema extends Schema {
  async up() {
  //  await this.raw('CREATE EXTENSION IF NOT EXISTS timescaledb;');
  //  await this.raw('CREATE EXTENSION IF NOT EXISTS postgis;');
    await this.raw('CREATE EXTENSION IF NOT EXISTS fuzzystrmatch;');
  }

  down() {
  //  this.raw('DROP EXTENSION timescaledb;');
  //  this.raw('DROP EXTENSION postgis;');
    this.raw('DROP EXTENSION fuzzystrmatch;');
  }
}

module.exports = ExtensionSchema;
