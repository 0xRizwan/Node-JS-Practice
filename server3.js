const http = require ("http");                  // Import the module

const server = http.createServer((req,res) => {
    const url = req.url
    if(url === "/") {
    res.setHeader("content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>My first page </title></head>");
    res.write("<body><h1>My first Heading </h1></body>");
    res.write("</html>");
    return res.end();
    }
    res.setHeader("content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>My second page </title></head>");
    res.write("<body><h1>My second Heading </h1></body>");
    res.write("</html>");
    res.end();
})
server.listen(3000);



