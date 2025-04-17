const { User } = require('../db/models');

class UserService {
  static async getAll() {
    return await User.findAll();
  }
  static async getOne(id) {
    return await User.findByPk(id);
  }
  static async create(data) {
    return await User.create(data);
  }
  static async update(id, data) {
    const userToUpdate = await this.getOne(id);
    if (userToUpdate) {
      userToUpdate.login = data.login;
      userToUpdate.email = data.email;
      userToUpdate.password = data.password;
      await userToUpdate.save();
    }
    return userToUpdate;
  }
  static async delete(id) {
    const userToDelete = await this.getOne(id);
    if (userToDelete) {
      await userToDelete.destroy();
    }
    return userToDelete;
  }
}

module.exports = UserService;
