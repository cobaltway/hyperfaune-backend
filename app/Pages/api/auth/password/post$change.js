const Hash = use('Hash');
const User = use('App/Models/User');

module.exports = {
  query: {
    email: ['required|email', 'normalize_email|trim'],
    password: ['required'],
    reset_token: ['required', 'trim']
  },
  async handle({ query }) {
    const user = await User.findByOrFail('email', query.email);
    if (!user.reset_token || user.reset_token !== query.reset_token) throw new Error('INVALID_TOKEN');

    user.reset_token = '';
    user.password = await Hash.make(query.password);
    await user.save();
  }
};
