let express = require("express")
let app = express()
let path = require("path")
let router = express.Router();

app.use(express.static(__dirname+"/public/"))

router.get("/", function(req, res){
    res.sendFile(path.join(__dirname+"/index.html"));
})

app.use("/", router);
app.listen(3000);