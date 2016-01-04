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
			data.operations = [];
			
			for (var idOp in operaciones) {
				if (operaciones.hasOwnProperty(idOp)) {
					var operacion = {};
					operacion.tipo_operacion = operaciones[idOp].tipo_operacion;
					operacion.unidad_tiempo = operaciones[idOp].unidad_tiempo;
					operacion.tipo_factor = operaciones[idOp].tipo_factor;
					operacion.cantidad_monetaria = operaciones[idOp].cantidad_monetaria;
					operacion.tasa_interes = operaciones[idOp].tasa_interes;
					operacion.periodo_inicial = operaciones[idOp].periodo_inicial;
					operacion.periodicidad = operaciones[idOp].periodicidad;
					operacion.duracion = operaciones[idOp].duracion;
					operacion.incremento = operaciones[idOp].incremento;

					data.operations.push(operacion);
				}
			}		

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
