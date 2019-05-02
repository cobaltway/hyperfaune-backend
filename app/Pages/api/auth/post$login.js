const User = use('App/Models/User');
const Action = use('App/Models/Action');

module.exports = {
  query: {
    login: ['required', 'trim'],
    password: ['required']
  },
  async handle({ query, auth }) {
    const user = await User.query()
      .where('email', 'LIKE', query.login)
      .firstOrFail();

    if (!user.is_active) throw new Error('USER_SUSPENDED');
    if (!user.password) throw new Error('USER_NOT_ACTIVATED');

    const token = await auth.withRefreshToken().attempt(user.email, query.password);

    await Action.create({
      type: 'LOGIN',
      user_id: user.id
    });

    return token;
  }
};
