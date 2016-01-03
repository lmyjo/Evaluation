const evaluator = require('../models/evaluator');
const boom = require('boom');

module.exports = {
  getHandler: function getLastEvaluation(request, response) {
    var headers = request.headers;
    evaluator.getLastEvaluation(request, headers, function callback(err, res, payload) {
      if (err) {
        var error = boom.create(err.status||502, err.message||'Bad Gateway');
        console.log(error);
        return response(error);
      } else if (res.statusCode >= 400) {
        var error = boom.create(res.statusCode, payload.error.message);
        console.log(error);
        return response(error);
      } else {
        response.headers = res.headers;
        if (payload.result.operaciones) {
          delete payload.result['operaciones'];
        }
        if (payload.result.lastModification) {
          delete payload.result['lastModification'];
        }
        return response(payload).code(res.statusCode);
      }
    });
  },
  postHandler: function evaluate (request, response) {
    var id = request.params.id;
    var headers = request.headers;
    evaluator.createEvaluation(request, headers, function (err, res, payload) {
      if (err) {
        var error = boom.create(err.status||502, err.message||'Bad Gateway');
        console.log(error);
        return response(error);
      } else if (res.statusCode >= 400) {
        var error = boom.create(res.statusCode, payload.error.message);
        console.log(error);
        return response(error);
      } else {
        response.headers = res.headers;
        return response(payload).code(res.statusCode);
      }
    });
  }
}
