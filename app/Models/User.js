const Resource = use('App/Models/Mixins/Resource');

class User extends Resource() {
  static boot() {
    super.boot();
    this.addHook('beforeCreate', 'User.hashPassword');
  }

  static get hidden() {
    return ['password', 'reset_token'];
  }

  tokens() {
    return this.hasMany('App/Models/Token');
  }

  events() {
    return this.hasMany('App/Models/Event');
  }

  actions() {
    return this.hasMany('App/Models/Action');
  }
}

module.exports = User;
