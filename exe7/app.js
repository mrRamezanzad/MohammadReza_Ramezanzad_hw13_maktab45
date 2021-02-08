const express = require("express"),
    path = require("path"),
    pages = require(path.join(__dirname, "routes/pages")),
    cars = require(path.join(__dirname, "routes/cars")),
    bodyParser = require("body-parser")

app = express()

app.use(express.static(path.join(__dirname, "/public")));
app.use(bodyParser.urlencoded({
    extended: true
}))

// importing routes
app.use("/", pages)
app.use("/cars", cars)

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/404.html"))
})

app.listen(80, () => {
    console.log(`server started on: http://localhost:80`);
})