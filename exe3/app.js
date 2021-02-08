const express = require("express"),
    path = require("path"),
    user = require(path.join(__dirname, "routes/user.js"))

app = express()

app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
    res.send("root")
})
// importing routes
app.use("/user", user)

app.get("*", (req, res) => {
    res.send("404 Not Found")
})

app.listen(80, () => {
    console.log(`server started on: http://localhost:80`);
})