const express = require("express"),
    router = express.Router(),
    path = require("path")

router.get("/", (req, res) => {
    res.redirect("/")
})

router.get("/:pageNumber", (req, res) => {
    switch (req.params.pageNumber) {
        case "page1":
            res.sendFile(path.join(__dirname, "../views/index1.html"))
            break

        case "page2":
            res.sendFile(path.join(__dirname, "../views/index2.html"))
            break

        case "page3":
            res.sendFile(path.join(__dirname, "../views/index3.html"))
            break

        case "page4":
            res.sendFile(path.join(__dirname, "../views/index4.html"))
            break

        case "page5":
            res.sendFile(path.join(__dirname, "../views/index5.html"))
            break

        default:
            res.redirect("/404")
    }


})

module.exports = router