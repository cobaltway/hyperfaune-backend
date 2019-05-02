const Env = use('Env');
const crypto = use('crypto');
const User = use('App/Models/User');
const Mail = use('Mail');

module.exports = {
  query: {
    email: ['required', 'normalize_email|trim']
  },
  async handle({ query }) {
    const user = await User.findByOrFail('email', query.email);
    const token = crypto.randomBytes(64).toString('hex').substr(0, 6);
    user.reset_token = token;
    await user.save();

    await Mail.send(
      'emails.forgotPassword',
      Object.assign(user.toJSON(), { link: `${Env.get('CLIENT_URL')}/changePassword?email=${user.email}&reset_token=${token}`, token }),
      m => m.to(user.email).from('pixagility@easybroadcast.fr').subject('Demande de réinitialisation de mot de passe')
    );
  }
};
