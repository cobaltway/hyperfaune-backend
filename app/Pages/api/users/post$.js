const User = use('App/Models/User');
const Action = use('App/Models/Action');

module.exports = {
  middlewares: ['online'],
  query: {
    name: ['required'],
    email: ['email', 'trim'],
    group: ['string'],
    access_level: ['integer|min:0|max:2', 'to_int']
  },
  async handle({ auth: { user }, query }) {
    const createdUser = await User.create(query);

    await Action.create({
      type: 'CREATE_USER',
      label: createdUser.name,
      user_id: user.id,
      target_user_id: createdUser.id
    });

    return createdUser.id;
  }
};
