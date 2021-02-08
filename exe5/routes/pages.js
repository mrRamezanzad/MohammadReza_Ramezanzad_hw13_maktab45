const express = require("express"),
    router = express.Router(),
    path = require("path")

router.get("/", (req, res) => {
    res.redirect("/")
})

router.get("/page1", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/index1.html"))
})
router.get("/page2", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/index2.html"))
})
router.get("/page3", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/index3.html"))
})
router.get("/page4", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/index4.html"))
})
router.get("/page5", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/index5.html"))
})

module.exports = router