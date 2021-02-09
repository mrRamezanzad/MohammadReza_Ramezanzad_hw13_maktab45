const express = require("express"),
    router = express.Router(),
    path = require("path"),
    fs = require("fs")
// console.log(DB);

router.get("/", (req, res) => {
    res.redirect("/home")
})

router.get("/home", (req, res) => {
    res.render(path.join(__dirname, "../views/home"), {
        cars: req.DB
    })
})

router.get("/about", (req, res) => {
    res.render(path.join(__dirname, "../views/about"))
})

router.get("/contact", (req, res) => {
    res.render(path.join(__dirname, "../views/contact"))
})

module.exports = router