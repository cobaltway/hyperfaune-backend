const User = use('App/Models/User');
const Action = use('App/Models/Action');

module.exports = {
  middlewares: ['online'],
  params: {
    id: ['required|integer', 'to_int']
  },
  async handle({ auth: { user }, params: { id } }) {
    const deletedUser = await User.query()
      .where('id', id)
      .firstOrFail();

    await Action.create({
      type: 'DELETE_user',
      label: deletedUser.name,
      user_id: user.id
    });

    await user.delete();
  }
};
