const Action = use('App/Models/Action');

module.exports = {
  middlewares: ['auth'],
  async handle({ auth }) {
    await Action.create({
      type: 'LOGOUT',
      event_id: (await auth.getUser).id,
      user_id: auth.user.id
    });

    const token = auth.getAuthHeader();
    return auth.user.tokens().where('token', token).update({ is_revoked: true });
  }
};
