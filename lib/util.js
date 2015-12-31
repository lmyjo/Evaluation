const request = require('request');
const config = require('../config/config');
const url = require('url');

function getURI (request, composed) {
  var urlObject = {
    protocol: config.get('utilityProtocol'),
    host: config.get('utilityHost') + ':' + config.get('utilityPort') + composed,
    query: request.query
  }
  return url.format(urlObject);
}


module.exports = {
  getLastEvaluation: function getLastEvaluation (req, headers, callback) {
    var composedURL = '/api/projects/' + req.params.id + '/evaluaciones/last';

    var urlObject = getURI(req, composedURL);

    var options = {
      method: 'GET',
      uri: url.parse(urlObject),
      headers: {
        authorization: headers.authorization || ''
      }
    };

    request.get(options, function requestCallback (err, response, body) {
      if (err) {
        return callback(err);
      }
      body = JSON.parse(body);
      var res = {
        statusCode: response.statusCode,
        headers: response.headers
      };
      return callback(null, res, body);
    });
  }
}
