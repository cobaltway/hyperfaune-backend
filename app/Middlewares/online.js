module.exports = {
  async handle({ auth }, next) {
    if (auth.user) {
      auth.user.last_online = new Date();
      auth.user.save();
    }

    await next();
  }
};
