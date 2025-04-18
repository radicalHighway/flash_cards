const QuestionController = require("../controllers/Question.Controller")
const questionRouter = require("express").Router()

questionRouter
  .get("/", QuestionController.getAllQuestions)
  .get("/themes/:theme", QuestionController.getAllQuestionsByTheme)
  .get("/id/:id", QuestionController.getOneQuestionById)


module.exports = questionRouter