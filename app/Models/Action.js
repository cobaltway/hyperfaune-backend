const Resource = use('App/Models/Mixins/Resource');

class Action extends Resource('Action') {
  static get updatedAtColumn() {
    return null;
  }
  static get primaryKey() {
    return 'created_at';
  }
  static get incrementing() {
    return false;
  }

  user() {
    return this.belongsTo('App/Models/User');
  }
  event() {
    return this.belongsTo('App/Models/Event');
  }
  target_user() {
    return this.belongsTo('App/Models/User', 'target_user_id');
  }
}

module.exports = Action;
