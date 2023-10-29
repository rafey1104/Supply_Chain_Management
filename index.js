let bodyParser = require("body-parser");
let mongoose = require("mongoose")
let express = require("express");
let server = express()
server.use(bodyParser())
mongoose.connect("mongodb+srv://rafey1104:hellotestapp@cluster0.ddpfvqx.mongodb.net/?retryWrites=true&w=majority")
let userRouter = require("./Routers/UsersRouter")

server.use(userRouter)

server.get("/", (req, res) => {
    res.json({
        STATUS: "OK",
        app: "Supplychain Management"
    })
})

server.listen(3000, () => {
    console.log("Server is listening on port 3000");
})