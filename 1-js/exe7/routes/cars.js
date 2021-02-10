const express = require("express"),
    router = express.Router(),
    path = require("path")

router.get("/:carId?", (req, res) => {
    let car = req.DB.find(el => el.id === req.params.carId)
    car ? res.render(path.join(__dirname, "../views/car"), {      car: car    }): res.redirect("/404")
})

module.exports = router