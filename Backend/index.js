const http = require('http');

const server = http.createServer((req, res) => {
    const method = req.method;
    if (method == "POST") {
        handlePost(req, res);
    } else {
        handlePut(req, res);
    }
});

const handlePost = (req, res) => {}

const handlePut = (req, res) => {}

server.listen(5000);