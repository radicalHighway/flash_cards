const { Answer } = require('../db/models');

class AnswerService {
  static async getAll() {
    return await Answer.findAll();
  }
  static async getOne(id) {
    return await Answer.findByPk(id);
  }
  static async getAllById(question_id) {
    const answers =await Answer.findAll({
      where: {question_id},
      order: [['id', 'ASC']],
    });
    return answers
  }

  
}

module.exports = AnswerService;