'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Answers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Question}) {
      // define association here
    this.belongsTo(Question, {
      foreignKey: 'question_id',
      as: 'question'
    })
    }
  }
  Answers.init({
    question_id: DataTypes.INTEGER,
    answer: DataTypes.STRING,
    istrue: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Answer',
  });
  return Answers;
};