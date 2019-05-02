const Config = use('App/Models/Config');

class ConfigSeeder {
  async run() {
    if (await Config.first()) return;
    await Config.createMany([
      { key: 'APP_VERSION', value: '"1.0"', type: 'String' },
      { key: 'DEFAULT_LANG', value: '"fr"', type: 'String' },
      {
        key: 'AVAILABLE_LANGS',
        value: JSON.stringify([{ id: 'fr', name: 'français' }, { id: 'en', name: 'anglais' }]),
        type: 'Array'
      },
      { key: 'PLAYER_URL', value: '"http://eb.fr/:SLUG"' }
    ]);
  }
}

module.exports = ConfigSeeder;
