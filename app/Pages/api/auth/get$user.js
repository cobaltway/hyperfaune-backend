module.exports = {
  middlewares: ['auth'],
  async handle({ auth: { user } }) {
    if (!user.is_active) throw new Error('USER_SUSPENDED');

    return {
      ...user.toJSON()
    };
  }
};
