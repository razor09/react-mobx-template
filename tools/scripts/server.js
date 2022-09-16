const { createServer } = require('http-server');
const { resolve } = require('path');

const server = createServer({
  root: resolve(__dirname, '../../dist'),
});

server.listen(4200, 'localhost');
