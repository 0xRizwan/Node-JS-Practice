const http = require ("http");                  // Import the module
const fs = require ("fs");

const server = http.createServer((req,res) => {
    const url = req.url
    if(url === "/") {
        res.write("<html>");
        res.write("<head><title>My first page </title></head>");
        res.write("<body><h1>My first Heading </h1></body>");
        res.write("</html>");
        return res.end();
    }
    if (url === "/file") {
        fs.writeFileSync("NewFile.txt", "Hello India");
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
    }
})
server.listen(3000);



