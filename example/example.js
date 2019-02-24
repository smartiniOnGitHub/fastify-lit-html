'use strict'

const hostname = require('os').hostname()
const assert = require('assert')
const fastify = require('fastify')()

// const pluginName = require('../package.json').name // get plugin name
// const pluginVersion = require('../package.json').version // get plugin version
const k = {
  protocol: 'http',
  address: '127.0.0.1',
  port: 3000
}
// k.serverUrl = `${k.protocol}://${k.address}:${k.port}/`
// k.pluginInfo = `${pluginName}-${pluginVersion}`
k.message = `Hello World, from a Fastify web application just started at '${hostname}'!`
assert(k.message !== null)

// register plugin with all its options (as a sample)
fastify.register(require('../src/plugin'), {
})

// example to handle a sample home request to serve a static page, optional here
fastify.get('/', function (req, reply) {
  const path = require('path')
  const scriptRelativeFolder = path.join(__dirname, path.sep)
  const fs = require('fs')
  const stream = fs.createReadStream(path.join(scriptRelativeFolder, 'home.html'))
  reply.type('text/html; charset=utf-8').send(stream)
})

fastify.listen(k.port, k.address, (err, address) => {
  if (err) {
    throw err
  }
  console.log(`Server listening on ${address}`)
})

fastify.ready((err) => {
  if (err) {
    throw err
  }
  const routes = fastify.printRoutes()
  console.log(`Available Routes:\n${routes}`)
})
