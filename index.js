let http = require("http")

http.createServer((req,res)=>{
    res.writeHead(200, {"Content-Type":"text/html"})

    document.write("ola mundo")
}).listen(3030, ()=>console.log("servidor rodando"))