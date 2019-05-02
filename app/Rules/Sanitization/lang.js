const Config = use('Config');

module.exports = (value) => {
  return Config.get('AVAILABLE_LANGS').find(l => l.id === value) ?
    value : Config.get('DEFAULT_LANG');
};
