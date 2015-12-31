const util = require('./util');
const boom = require('boom');

module.exports = {
  getHandler: function getLastEvaluation(request, response) {
    var id = request.params.id;
    var headers = request.headers;
    util.getLastEvaluation(request, headers, function callback(err, res, payload) {
      if (err) {
        var error = boom.create(err.status||502, err.message||'Bad Gateway');
        console.log(error);
        return response(error);
      } else if (res.statusCode >= 400) {
        var error = boom.create(res.statusCode, payload.error.message);
        console.log(error);
        return response(error);
      } else {
        response.statusCode = res.statusCode;
        response.headers = res.headers;
        if (payload.result.operaciones) {
          delete payload.result['operaciones'];
        }
        return response(payload);
      }
    });
  },
  postHandler: function evaluate (request, response) {
    var id = request.params.id;
    response.statusCode = 202;
    response({message:'Test message '+id});
  }
}
