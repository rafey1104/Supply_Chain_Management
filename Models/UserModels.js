let mongoose = require("mongoose")

let newUserSchema= new mongoose.Schema({
    uid: {type: String, rquired: true},
    username: String,
    password: String,
    dateAdded: Date
})

let newUserModel = mongoose.model("Users", newUserSchema, "Users")

exports.newUserModel = newUserModel