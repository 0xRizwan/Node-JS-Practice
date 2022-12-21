const http = require ("http");                  // Import the module
const fs = require ("fs");

const server = http.createServer((req,res) => {
    const url = req.url
    const method = req.method

    if(url === "/") {
        res.write("<html>");
        res.write("<head><title>My first page </title></head>");
        res.write('<body><form action ="/file" method = "POST", name = "msg"><input type = "text" name = "msg"/><button type = "submit">Submit</button></body>');
        res.write("</html>");
        return res.end();
    }
    if (url === "/file" && method === "POST") {
        const body = []
        req.on("data", (chunk) => {
            body.push(chunk);
            console.log(chunk)
        })
        req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFileSync("NewFile.txt", message);             //Blocking code.......it is synchronous js.
        
           res.statusCode = 302;
           res.setHeader("Location", "/");
           return res.end();
        })
    }
})
server.listen(3000);



