const { defaults } = use('lodash');

module.exports = {
  middlewares: ['auth'],
  query: {
    email: ['email', 'trim'],
    profile: []
  },
  async handle({ auth: { user }, query: { email, profile } }) {
    if (!user.is_active) throw new Error('USER_SUSPENDED');

    user.merge({
      email,
      profile: defaults({
        ...profile
      }, user.profile)
    });

    await user.save();
    await user.reload();

    return user;
  }
};
