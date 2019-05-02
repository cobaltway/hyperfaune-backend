const User = use('App/Models/User');

class UserSeeder {
  async run() {
    if (await User.findBy('access_level', 2)) return;

    await User.create({
      password: 'admin',
      email: 'admin@hyperfaune.fr',
      access_level: 2,
      name: 'Admin'
    });
  }
}

module.exports = UserSeeder;
