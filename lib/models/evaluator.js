const request = require('request');
const util = require('../util');
const url = require('url');
const boom = require('boom');


function enqueueEvaluationTask (operations, res, body, callback) {
  //TODO: Implementación de envío de mensajes a RabbitMQ
  callback(null, res, body);
}

function createNewEvaluation (preEvalObject, req, headers, callback) {
  var composedURL = '/api/projects/' + preEvalObject.projectId + '/evaluaciones';
  var urlObject = util.getURI(req, composedURL);

  var options = {
    method: 'POST',
    uri: url.parse(urlObject),
    headers: {
      authorization: headers.authorization || '',
      'Content-Type': headers['Content-Type']
    }
  };

  request.post(options, function requestCallback (err, response, body) {
    if (err) return callback (err);

    body = JSON.parse(body);
    var res = {
      statusCode: 202,
      headers: response.headers
    };
    return enqueueEvaluationTask(preEvalObject.operaciones, res, body, callback);
  });
}

function responseWithEvaluation (preEvalObject, req, headers, callback) {
  if (preEvalObject.evaluation === null || preEvalObject.evaluation === undefined) {
    return createNewEvaluation(preEvalObject, req, headers, callback);
  }

  var lastEvalCreatedDate = new Date(preEvalObject.evaluation.created);
  var lastModificationDate = new Date(preEvalObject.lastModification);

  if (lastModificationDate.getTime() > lastEvalCreatedDate.getTime()) {
    return createNewEvaluation(preEvalObject, req, headers, callback);
  }

  return callback(null, {statusCode: 301}, preEvalObject.evaluation);
}

module.exports = {
  getLastEvaluation: function getLastEvaluation (req, headers, callback) {
    var composedURL = '/api/projects/' + req.params.id + '/evaluaciones/last';

    var urlObject = util.getURI(req, composedURL);

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
  },

  createEvaluation: function createEvaluation (req, headers, callback) {
    this.getLastEvaluation(req, headers, function (err, res, payload) {
      if (err) return callback(err);

      if (res.statusCode >= 400) {
        return callback(null, res, payload);
      }

      var evaluation = payload.result.evaluacion;
      var lastModification = payload.result.lastModification;
      var operaciones = payload.result.operaciones;

      var preEvalObject = {
        projectId: req.params.id,
        evaluation: evaluation,
        lastModification: lastModification,
        operaciones: operaciones,
      };

      return responseWithEvaluation(preEvalObject, req, headers, callback);
    });
  }
}
