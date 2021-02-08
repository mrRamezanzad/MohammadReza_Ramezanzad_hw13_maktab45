const express = require("express")
, router = express.Router()

router.get("/", (req, res) =>{
    res.send("cars page")
})


module.exports = router