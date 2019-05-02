const Env = use('Env');

module.exports = {
  connection: Env.get('MAIL_CONNECTION', 'smtp'),
  smtp: {
    driver: 'smtp',
    pool: true,
    port: Env.get('MAIL_PORT', 25),
    host: Env.get('MAIL_HOST'),
    secure: true,
    auth: {
      user: Env.get('MAIL_USERNAME'),
      pass: Env.get('MAIL_PASSWORD')
    },
    rejectUnauthorized: false,
    maxConnections: 5,
    maxMessages: 100,
    rateLimit: 10
  }
};
