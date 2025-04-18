const AnswerService = require("../services/Answer.Service")
const formatResponse = require("../utils/formatResponse")
const isValidId = require("../utils/isValidId")

class AnswerController{
static async getAllAnswers(req,res){
   try {
 const answers = await AnswerService.getAll()
 if(answers.length === 0){
  return res
  .status(200).json(formatResponse(200,"No questions found", []))
 }   
 res.status(200).json(formatResponse(200, "Success", answers))
  } catch ({ message }) {
    console.error(message);
    res
      .status(500)
      .json(formatResponse(500, 'Internal server error', null, message));
  }
}

static async getAllByQuestionId(req,res){
  const {question_id}=req.params;
  if(!isValidId(id)){
    return res
      .status(400)
      .json(formatResponse(400, `Invalid question ID`))
  }
  try {
const answers = await AnswerService.getAllById(+question_id)
if(answers.length){
  return res
  .status(404)
  .json(formatResponse(404, `Question with id: ${id} not found`))
}   
res.status(200).json(formatResponse(200, "Success", answers))
 } catch ({ message }) {
   console.error(message);
   res
     .status(500)
     .json(formatResponse(500, 'Internal server error', null, message));
 }
}

static async getOneAnswerById(req,res){
  const {id}=req.params;
  if(!isValidId(id)){
    return res
      .status(400)
      .json(formatResponse(400, `Invalid question ID`))
  }
  try {
const answers = await AnswerService.getOne(+id)
if(answers.length){
  return res
  .status(404)
  .json(formatResponse(404, `Question with id: ${id} not found`))
}   
res.status(200).json(formatResponse(200, "Success", answers))
 } catch ({ message }) {
   console.error(message);
   res
     .status(500)
     .json(formatResponse(500, 'Internal server error', null, message));
 }
}

}

module.exports = AnswerController