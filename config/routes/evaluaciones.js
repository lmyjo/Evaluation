const handlers = require('../../lib/controllers/handlers');

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
