const Lab = require('lab');
const assert = require('assert');
const recorder = require('../recorder')('mocks');
const server = require('../../server');
const evaluator = require('../../lib/models/evaluator');
const lab = exports.lab = Lab.script();

lab.experiment('For getting last evaluations', function (){

  lab.test('it should answer with 401 Unauthorized',  function (done) {
    recorder.record('last-unauth');
    server.inject({url:'/api/projects/56863bade67b5410003157b8/evaluaciones/last'}, function(res) {
      assert.equal(res.statusCode, 401);
      assert.equal(res.result.error, 'Unauthorized');
      recorder.stop(done);
    });
  });

  lab.test('it should answer with 200 Ok', function (done) {
    var options = {
      method: 'GET',
      headers: {
        'Authorization': 'Dp08QozasGdwW52nuR8vyoLEjEyCIkDDnAjggKEiivKrQUPfbwbsQBLzPDxI1n2p'
      },
      url: '/api/projects/56863bade67b5410003157b8/evaluaciones/last'
    };
    recorder.record('last');
    server.inject(options, function(res) {
      assert.equal(res.statusCode, 200);
      recorder.stop(done);
    });
  });

});

lab.experiment('For creating new evaluations', function () {

  lab.test('it should answer with 401 Unauthorized',  function (done) {
    var options = {
      method: 'post',
      url:'/api/projects/56863bade67b5410003157b8/evaluaciones'
    };
    recorder.record('evaluate-unauth');
    server.inject(options, function(res) {
      assert.equal(res.statusCode, 401);
      assert.equal(res.result.error, 'Unauthorized');
      recorder.stop(done);
    });
  });

  lab.test('it should answer with 202 Accepted', function (done) {
    var options = {
      method: 'POST',
      headers: {
        'Authorization': 'Dp08QozasGdwW52nuR8vyoLEjEyCIkDDnAjggKEiivKrQUPfbwbsQBLzPDxI1n2p'
      },
      url: '/api/projects/56863bade67b5410003157b8/evaluaciones'
    };
    recorder.record('evaluate');
    server.inject(options, function(res) {
      assert.equal(res.statusCode, 202);
      recorder.stop(done);
    });
  });

});
