const http = require('http');
const app = require('./app');

const port = process.env.PORT || 3000

app.set('port', port);
const server = http.createServer(app);

server.listen(port, () => {
    console.log(`server is running at 127.0.0.1:${port}`);
});