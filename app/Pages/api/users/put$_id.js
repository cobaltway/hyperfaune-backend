const User = use('App/Models/User');
const Action = use('App/Models/Action');

module.exports = {
  middlewares: ['online'],
  params: {
    id: ['required|integer', 'to_int']
  },
  query: {
    name: ['required'],
    email: ['email', 'trim'],
    group: ['string'],
    access_level: ['integer|min:0|max:2', 'to_int']
  },
  async handle({ auth: { user }, params: { id }, query }) {
    const modifiedUser = await User.query()
      .where('id', id)
      .firstOrFail();

    modifiedUser.merge(query);
    await modifiedUser.save();

    await Action.create({
      type: 'MODIFY_USER',
      label: modifiedUser.name,
      user_id: user.id,
      target_user_id: modifiedUser.id
    });
  }
};
