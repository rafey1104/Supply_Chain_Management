let userModel = require("../Models/UserModels")
exports.newUser = async (req, res) => {
    let data = req.body
    let newUserDoc = new userModel.newUserModel({
        username: data["username"],
        password: data["password"],
        dateAdded: new Date().toISOString()
    })
    let result = await newUserDoc.save()
    res.json({
        ...result
    })
}