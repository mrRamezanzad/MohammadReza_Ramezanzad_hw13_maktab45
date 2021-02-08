const express = require("express"),
    router = express.Router(),
    path = require("path")


router.get("/", (req, res) => {
    res.redirect("/home")
})

router.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/home.html"))
})

router.get("/about", (req, res) => {
    res.send("about")
})

router.get("/contact", (req, res) => {
    res.send("contanct")
})

module.exports = router