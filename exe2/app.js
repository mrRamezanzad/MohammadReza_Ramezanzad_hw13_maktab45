const express = require("express")
app = express()
let path = require("path")

app.use(express.static(path.join(__dirname, "public")));

app.get("*", (req, res) =>{
    console.log("Requested : ", req.url)
    res.sendFile(path.join(__dirname, "/views/index.html"))
})

app.listen(80, ()=>{
    console.log(`server started on: http://localhost:80`);
})