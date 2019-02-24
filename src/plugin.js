'use strict'

/*
// const fp = require('fastify-plugin')
// import * as fp from 'fastify-plugin'
import fp from 'fastify-plugin'
// const litHtml = require('lit-html')
import litHtml from 'lit-html'
// import * as litHtml from 'lit-html'
 */
const assert = require('assert')
const fp = require('fastify-plugin')
const litHtml = require('lit-html')
// TODO: later check if re-enable the es6 syntax ... wip

function fastifyPlugin (fastify, options = {}, next) {
  // assert(typeof path === 'string', 'path must be a string')
  if (options.path) assert(typeof options.path === 'string', 'options.method must be a string')
  // if (typeof path !== 'string') {
  //   throw new TypeError(`Options path must be a string, instead got a '${typeof path}'`)
  // }

  // execute plugin code
  fastify.decorate('litHtml', litHtml)

  next()
}

module.exports = fp(fastifyPlugin, {
  fastify: '^1.1.0',
  name: 'fastify-lit-html'
})
