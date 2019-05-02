const Resource = use('App/Models/Mixins/Resource');

class Config extends Resource() {
  static get updatedAtColumn() {
    return null;
  }
  static get createdAtColumn() {
    return null;
  }
}

module.exports = Config;
