const Lab = require('lab');
const assert = require('assert');
const sinon = require('sinon');
const server = require('../server');
const evaluator = require('../lib/models/evaluator');
const lab = exports.lab = Lab.script();

lab.experiment('For evaluations without access token', function (){

  lab.before(function (done) {
    sinon.stub(evaluator, 'getLastEvaluation', function (req, headers, callback) {
      const getLastUnauth = require('./mocks/getLastUnauth');
      callback(null,getLastUnauth.response,getLastUnauth.payload);
    });
    done();
  });

  lab.after(function (done) {
    evaluator.getLastEvaluation.restore();
    done();
  });

  lab.test('it should answer with 401 Unauthorized',  function (done) {

    server.inject({url:'/api/projects/5663e14fd43f6d873267332b/evaluaciones/last'}, function(res) {
      assert.equal(res.statusCode, 401);
      assert.equal(res.result.error, 'Unauthorized');
      done();
    });
  });
});

lab.experiment('For evaluations with access token', function (){


  lab.before(function (done) {
    sinon.stub(evaluator, 'getLastEvaluation', function (req, headers, callback) {
      const getLasteval = require('./mocks/getLastEval');
      callback(null,getLasteval.response,getLasteval.payload);
    });
    done();
  });

  lab.after(function (done) {
    evaluator.getLastEvaluation.restore();
    done();
  });

  lab.test('it should answer with 200 Ok', function (done) {

    var options = {
      method: 'GET',
      headers: {
        'Authorization': 'QmlKgjBmb8w9bmLcSHYC5MZp0yJOpfCo6F0lkU8zC2Og2QmWAXiOw24iLlJmGmjj'
      },
      url: '/api/projects/5663e14fd43f6d873267332b/evaluaciones/last'
    };

    server.inject(options, function(res) {
      assert.equal(res.statusCode, 200);
      done();
    });
  });
});

lab.experiment('For creating evaluations without access token', function () {
  lab.before(function (done) {
    sinon.stub(evaluator, 'createEvaluation', function (req, headers, callback) {
      const getLastUnauth = require('./mocks/getLastUnauth');
      callback(null,getLastUnauth.response,getLastUnauth.payload);
    });
    done();
  });

  lab.after(function (done) {
    evaluator.createEvaluation.restore();
    done();
  });

  lab.test('it should answer with 401 Unauthorized',  function (done) {
    var options = {
      method: 'post',
      url:'/api/projects/5663e14fd43f6d873267332b/evaluaciones'
    };
    server.inject(options, function(res) {
      assert.equal(res.statusCode, 401);
      assert.equal(res.result.error, 'Unauthorized');
      done();
    });
  });
});

lab.experiment('For evaluations with access token', function (){
  lab.before(function (done) {
    sinon.stub(evaluator, 'createEvaluation', function (req, headers, callback) {
      const postEval = require('./mocks/postEval');
      callback(null,postEval.response,postEval.payload);
    });
    done();
  });

  lab.after(function (done) {
    evaluator.createEvaluation.restore();
    done();
  });

  lab.test('it should answer with 202 Accepted', function (done) {

    var options = {
      method: 'POST',
      headers: {
        'Authorization': 'v33XBdfM8HaVmFogyc3I2gEoEmiSUkHbPn6G1IVWiHZoxCaMCdTDeLQUgZF9IHJO'
      },
      url: '/api/projects/56863bade67b5410003157b8/evaluaciones'
    };

    server.inject(options, function(res) {
      assert.equal(res.statusCode, 202);
      done();
    });
  });
});
