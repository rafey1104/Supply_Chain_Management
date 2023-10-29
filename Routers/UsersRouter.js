
let express = require("express")
const UserController = require("../Controllers/UserController")
let userRouter =  express.Router()

userRouter.post("/newUser", UserController.newUser)

userRouter.post("/authUser", (req, res) => {
    res.json({})
})
userRouter.post("/updateUser", (req, res) => {
    res.json({})
})
userRouter.post("/UserData", (req, res) => {
    res.json({})

})
userRouter.post("/deleteUser", (req, res) => {
    res.json({})

})
module.exports = userRouter