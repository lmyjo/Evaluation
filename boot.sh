#!/bin/bash
docker run -d -p 5672:5672 --hostname rabbitmq --name investmentsqueue rabbitmq

docker run -p 3001:3000 -d --name evaluation.investments --link utility.investments:utility.investments --link investmentsqueue:rabbitmq --env-file=docker/env lmyjo/evaluation
