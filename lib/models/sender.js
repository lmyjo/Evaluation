#!/usr/bin/env node
const amqp = require('amqplib/callback_api');
const config = require('../../config/config');
var util = require('util');

module.exports = {
	sendOperations: function (id, operaciones, callback) {
		amqp.connect(config.get('queueProtocol') + '://' + config.get('queueHost'), function(err, conn) {
			if (err) return callback(err);
			
			var data = {};
			data.evaluation_id = id;
			data.operations = operaciones;
			
			conn.createChannel(function(err, ch) {
				if (err) return callback(err);

				var q = config.get('queueName');
				ch.assertQueue(q, {durable: true});
				ch.sendToQueue(q, new Buffer(JSON.stringify(data)), {persistent: true});
				
				return callback(null);
			});
		});
	}
};
