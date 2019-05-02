const Config = use('Config');

module.exports = (lang) => {
  return Config.get('AVAILABLE_LANGS').find(l => l.id === lang) ?
    lang : Config.get('DEFAULT_LANG');
};
