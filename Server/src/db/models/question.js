'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Questions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Answer}) {
      // define association here
      this.hasMany(Answer, {
        foreignKey: 'question_id',
        as: 'answer'
      })
    }
  }
  Questions.init({
    theme: DataTypes.STRING,
    question: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Questions;
};