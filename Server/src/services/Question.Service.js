const {Question} = require("../db/models")

class QuestionService {
  static async getAll() {
    return await Question.findAll();
  }
  static async getAllByTheme(theme) {
    const questions = await Question.findAll({
      where:{theme},
      order: [['id', 'ASC']],
    });
    return questions
  }
  static async getOne(id) {
    return await Question.findByPk(id);
  }
  static async create(data) {
    return await Question.create(data);
  }
  
}

module.exports = QuestionService;
