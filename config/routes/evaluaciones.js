const handlers = require('../../lib/handlers');

module.exports = [
  {
    method:  'POST',
    path:    '/api/projects/{id}/evaluaciones',
    config:  {
      handler: handlers.postHandler
    }
  },
  {
    method:  'GET',
    path:    '/api/projects/{id}/evaluaciones/last',
    config:  {
      handler: handlers.getHandler
    }
  }
];
