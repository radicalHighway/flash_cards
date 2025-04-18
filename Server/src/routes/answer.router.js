const AnswerController = require("../controllers/Answer.Conroller")
const answerRouter = require("express").Router()

answerRouter
  .get("/", AnswerController.getAllAnswers)
  .get("/question/:id", AnswerController.getAllByQuestionId)
  .get("answer/:id", AnswerController.getOneAnswerById)


module.exports = answerRouter