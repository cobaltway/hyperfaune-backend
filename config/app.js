const Env = use('Env');

module.exports = {
  appKey: Env.get('APP_KEY'),

  http: {
    allowMethodSpoofing: false,
    trustProxy: false,
    subdomainOffset: 2,
    jsonpCallback: 'callback',
    etag: true
  },

  static: {
    dotfiles: 'ignore',
    etag: true,
    extensions: false
  },

  locales: {
    loader: 'file',
    locale: 'en'
  },

  logger: {
    transport: 'console',
    console: {
      driver: 'console',
      name: 'adonis-app',
      level: 'debug'
    },
    file: {
      driver: 'file',
      name: 'adonis-app',
      filename: 'adonis.log',
      level: 'info'
    }
  }
};
