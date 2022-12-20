const Http = require ("http");                  // Import the module

const server = Http.createServer((req,res) => {
    res.setHeader("content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>My first page </title></head>");
    res.write("<body><h1>My first Heading </h1></body>");
    res.write("</html>");
    res.end();
})
server.listen(3000);



