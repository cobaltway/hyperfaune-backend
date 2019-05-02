const User = use('App/Models/User');

module.exports = {
  middlewares: ['online'],
  async handle() {
    return User.query()
      .orderBy('created_at', 'asc')
      .fetch();
  }
};
