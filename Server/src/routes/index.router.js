const indexRouter = require("express").Router();

const userRouter = require("./user.router");
const answerRouter = require("./answer.router");
const questionRouter = require("./question.router");
const formatResponse = require("../utils/formatResponse")


indexRouter.use("/users", userRouter);
indexRouter.use("/answers", answerRouter);
indexRouter.use("questions", questionRouter)

indexRouter.use((req, res)=>{
  res.status(404).json(formatResponse(404, "Not found"))
})
module.exports = indexRouter