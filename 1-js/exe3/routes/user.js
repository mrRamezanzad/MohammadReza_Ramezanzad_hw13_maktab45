const express = require("express"),
    router = express.Router()

router.get("/", (req, res) => {
    res.send("users page")
})

router.get("/panel", (req, res) => {
    res.send(req.url)
})
router.get("/admin", (req, res) => {
    res.send(req.url)
})

module.exports = router