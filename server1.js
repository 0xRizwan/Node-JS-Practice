const Http = require ("http");                  // Import the module

const server = Http.createServer((req,res) => {
    console.log("URL:", req.url, "Method:", req.method, "Header:", req.headers)
})
server.listen(3000);



