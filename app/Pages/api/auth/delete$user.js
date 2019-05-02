module.exports = {
  middlewares: ['auth'],
  async handle({ auth: { user } }) {
    await user.delete();
  }
};
