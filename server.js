const http = require('http');

const requestHandler = (req, res) => {
    res.setHeader("Content-Type", "text/json");
    res.writeHead(200);
    res.end('¡El servidor está funcionando!')
};

const PORT = 5000;
const server = http.createServer(requestHandler);

server.listen(PORT, () => {
    console.log(`Server starter in http://localhost:${PORT}`);
});