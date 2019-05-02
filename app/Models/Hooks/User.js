const Hash = use('Hash');

const User = (exports = module.exports = {});

User.hashPassword = async (user) => {
  if (user.password) user.password = await Hash.make(user.password);
};
