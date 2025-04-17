const UserController = require("../controllers/User.Controller")
const userRouter = require("express").Router()

userRouter
.get("/", UserController.getAllUsers)
.post("/", UserController.createUser)
.get("/:id", UserController.getOneUserById)
.put("/:id", UserController.updateUser)
.delete("/:id", UserController.deleteUser)

module.exports = userRouter