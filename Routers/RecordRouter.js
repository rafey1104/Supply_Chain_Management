let express = require("express")
let router = express.Router()

router.post("/newRecord", (req, res) => {
    res.json({})
})
router.post("/updateRecord", (req, res) => {
    res.json({})
})
router.post("/recordData", (req, res) => {
    res.json({})

})
router.post("/deleteRecord", (req, res) => {
    res.json({})

})
exports.RecordRouter = router