const express = require("express"),
    router = express.Router(),
    path = require("path")

router.get("/", (req, res) => {
    res.send("admin page")
})
router.get("/getAllUsers", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "/DB/informations.json"))
})

module.exports = router