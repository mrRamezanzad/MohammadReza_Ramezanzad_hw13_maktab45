const express = require("express"),
    router = express.Router(),
    path = require("path")

router.get("/:carId?", (req, res) => {
    res.render(path.join(__dirname, "../views/car"), {carId: req.params.carId})
    console.log(req.params.carId);
})


module.exports = router