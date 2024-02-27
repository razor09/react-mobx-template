import { createServer } from 'http-server'
import { resolve } from 'path'
import * as settings from './settings'

const server = createServer({
  root: resolve('dist'),
  proxy: settings.origin,
})

server.listen(settings.port, settings.host)
