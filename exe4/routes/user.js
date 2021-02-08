const express = require("express"),
    router = express.Router(),
    fs = require("fs"),
    path = require("path")

router.get("/", (req, res) => {
    res.redirect("/")
})

router.post("/getUser", (req, res) => {
    fs.readFile(path.join(__dirname, "../Db/informations.json"), "utf8", (err, file) => {
        // console.log(file);
        let users = JSON.parse(file).users,
            user = users.find(el => el.userName === req.body.userName)
        typeof user === "undefined" ? res.send("کاربری با این مشخصات وجود ندارد") : res.json(user)
    })

})


module.exports = router