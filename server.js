'use strict';

const Hapi = require('hapi');
const config  = require('./config/config');
const routes  = require('./config/routes');

const server = Hapi.server({
  host: config.get('serviceHost'),
  port: config.get('servicePort')
});

server.route(routes);

const init = async () => {
  await server.start();
  console.log('Server running at: ', server.info.uri);
}

if (!module.parent) {
  init();
}

module.exports = server;
