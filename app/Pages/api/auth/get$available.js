const User = use('App/Models/User');

module.exports = {
  query: { email: ['required', 'trim'] },
  async handle({ query }) {
    if (await User.query().where('email', 'ILIKE', query.email).first()) {
      throw Error('EMAIL_ALREADY_IN_USE');
    }
  }
};
