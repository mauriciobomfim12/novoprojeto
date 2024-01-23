let http = require("http");

http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Olá mundo");
    res.end();
}).listen(80, "0.0.0.0", () => console.log("Servidor rodando na porta 80"));
