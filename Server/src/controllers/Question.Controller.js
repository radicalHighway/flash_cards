const QuestionService = require("../services/Question.Service")
const formatResponse = require("../utils/formatResponse")
const isValidId = require("../utils/isValidId")

class QuestionController{
static async getAllQuestions(req,res){
   try {
 const questions = await QuestionService.getAll()
 if(questions.length === 0){
  return res
  .status(200).json(formatResponse(200,"No questions found", []))
 }   
 res.status(200).json(formatResponse(200, "Success", questions))
  } catch ({ message }) {
    console.error(message);
    res
      .status(500)
      .json(formatResponse(500, 'Internal server error', null, message));
  }
}

static async getAllQuestionsByTheme(req,res){
  const {theme}=req.params;
 
  try {
const questions = await QuestionService.getAllByTheme(theme)
if(questions.length === 0){
  return res
  .status(404)
  .json(formatResponse(404, `Question with id: ${theme} not found`))
}   
res.status(200).json(formatResponse(200, "Success", questions))
 } catch ({ message }) {
   console.error(message);
   res
     .status(500)
     .json(formatResponse(500, 'Internal server error', null, message));
 }
}

static async getOneQuestionById(req,res){
  const {id}=req.params;
  if(!isValidId(id)){
    return res
      .status(400)
      .json(formatResponse(400, `Invalid question ID`))
  }
  try {
const question = await QuestionService.getOne(+id)

res.status(200).json(formatResponse(200, "Success", question))
 } catch ({ message }) {
   console.error(message);
   res
     .status(500)
     .json(formatResponse(500, 'Internal server error', null, message));
 }
}

}

module.exports = QuestionController