const express = require("express"),
    fs = require("fs"),
    path = require("path"),
    user = require(path.join(__dirname, "routes/user.js")),
    admin = require(path.join(__dirname, "routes/admin.js")),
    bodyParser = require("body-parser")



app = express()

app.use(express.static(path.join(__dirname, "/public")));
app.use(bodyParser.urlencoded({
    extended: true
}))

app.get("/", (req, res) => {
    fs.readFile(path.join(__dirname, "views/index.html"), "utf8", (err, page) => {
        if (err) console.log(err);
        res.send(page)
    })
})
// importing routes
app.use("/user", user)
app.use("/admin", admin)

app.get("*", (req, res) => {
    console.log("request here");
    res.send("404 Not Found")
})

app.listen(80, () => {
    console.log(`server started on: http://localhost:80`);
})