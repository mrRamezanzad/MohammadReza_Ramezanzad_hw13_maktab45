const express = require("express"),
    router = express.Router(),
    fs = require("fs"),
    path = require("path")

router.get("/", (req, res) => {
    res.send("admin page")
})
router.get("/getAllUsers", (req, res) => {
    fs.readFile(path.join(__dirname, "..", "/DB/informations.json"), "utf8", (err, file) => {
        if (err) console.log(err);
        res.send(file)
    })
})

module.exports = router