import { createServer } from 'http-server';
import { resolve } from 'path';

const server = createServer({
  root: resolve(__dirname, '../../dist'),
});

server.listen(4200, 'localhost');
