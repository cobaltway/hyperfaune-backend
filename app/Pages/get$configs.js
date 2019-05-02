const Config = use('Config');
const Action = use('App/Models/Action');

module.exports = {
  query: { backoffice: ['boolean', 'to_boolean'] },
  handle({ auth, query: { backoffice }, request }) {
    if (!backoffice) {
      Action.create({
        user_id: auth && auth.user ? auth.user.id : null,
        type: 'active',
        label: request.header('User-Agent')
      });
    }

    return {
      app_version: Config.get('APP_VERSION'),

      default_lang: Config.get('DEFAULT_LANG'),
      available_langs: Config.get('AVAILABLE_LANGS'),
      player_url: Config.get('PLAYER_URL')
    };
  }
};
