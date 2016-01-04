const url = require('url');
const config = require('../config/config');

module.exports = {
  getURI: function getURI (request, composed) {
    var urlObject = {
      protocol: config.get('utilityProtocol'),
      host: config.get('utilityHost') + ':' + config.get('utilityPort') + composed,
      query: request.query
    }
    return url.format(urlObject);
  }
}
