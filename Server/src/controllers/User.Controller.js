const UserService = require("../services/User.Service")
const isValidId = require("../utils/isValidId")
const UserValidator = require("../utils/UserValidator")
const formatResponse = require("../utils/formatResponse")

class UserController{
static async getAllUsers(req,res){
   try {
 const users = await UserService.getAll()
 if(users.length === 0){
  return res
  .status(200).json(formatResponse(200,"No users found", []))
 }   
 res.status(200).json(formatResponse(200, "Success", users))
  } catch ({ message }) {
    console.error(message);
    res
      .status(500)
      .json(formatResponse(500, 'Internal server error', null, message));
  }
}

static async getOneUserById(req,res){
  const {id}=req.params;
  if(!isValidId(id)){
    return res
      .status(400)
      .json(formatResponse(400, `Invalid user ID`))
  }
  try {
const user = await UserService.getOne(+id)
if(!user){
  return res
  .status(404)
  .json(formatResponse(404, `User with id: ${id} not found`))
}   
res.status(200).json(formatResponse(200, "Success", user))
 } catch ({ message }) {
   console.error(message);
   res
     .status(500)
     .json(formatResponse(500, 'Internal server error', null, message));
 }
}

static async createUser(req,res){
  const {login, email, password}= req.body
  const {isValid, error}= UserValidator.validateUser({login, email, password})
  if(!isValid){
    return res
      .status(400)
      .json(formatResponse(400, `${error}`, null, error))
  }
  try {
const newUser = await UserService.create({login, email, password})
if(!newUser){
  return res
  .status(404)
  .json(formatResponse(404, `Failed to create new user`))
}   
res.status(200).json(formatResponse(200, "Success", newUser))
 } catch ({ message }) {
   console.error(message);
   res
     .status(500)
     .json(formatResponse(500, 'Internal server error', null, message));
 }
}

static async updateUser(req,res){
  const {id} = req.params;
  const {login, email, password}= req.body
  const {isValid, error}= UserValidator.validateUser({login, email, password})
  if(!isValidId(id)){
    return res.status(400).json(formatResponse(400, 'Invalid user ID'));
  }
  if(!isValid){
    return res
      .status(400)
      .json(formatResponse(400, `${error}`, null, error))
  }
  try {
const updatedUser = await UserService.update(+id,{login, email, password})
if(!updatedUser){
  return res
  .status(404)
  .json(formatResponse(404, `User not found`))
}   
res.status(200).json(formatResponse(200, "Success", updatedUser))
 } catch ({ message }) {
   console.error(message);
   res
     .status(500)
     .json(formatResponse(500, 'Internal server error', null, message));
 }
}

static async deleteUser(req,res){
  const {id} = req.params;
 
  if(!isValidId(id)){
    return res.status(400).json(formatResponse(400, 'Invalid user ID'));
  }
  
  try {
const deletedUser = await UserService.delete(+id)
if(!deletedUser){
  return res
  .status(404)
  .json(formatResponse(404, `User not found`))
}   
res.status(200).json(formatResponse(200, "Successful delete", deletedUser))
 } catch ({ message }) {
   console.error(message);
   res
     .status(500)
     .json(formatResponse(500, 'Internal server error', null, message));
 }
}
}

module.exports = UserController