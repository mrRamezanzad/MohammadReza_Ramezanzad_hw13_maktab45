app = require("express")()

app.get("*", (req, res) =>{
    console.log("Requested : ", req.url)
    res.send("Hello World")
})

app.listen(80, ()=>{
    console.log(`server started on: http://localhost:80`);
})