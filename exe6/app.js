const express = require("express"),
    path = require("path"),
    pages = require(path.join(__dirname, "routes/pages")),
    bodyParser = require("body-parser")

app = express()

app.use(express.static(path.join(__dirname, "/public")));
app.use(bodyParser.urlencoded({
    extended: true
}))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views/index.html"))
})
// importing routes
app.use("/pages", pages)

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "views/404.html"))
})

app.listen(80, () => {
    console.log(`server started on: http://localhost:80`);
})