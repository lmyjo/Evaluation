#!/bin/bash

sudo docker run -p 3001:3000 -d --name evaluation.investments --link utility.investments:utility.investments --env-file=docker/env  lmyjo/evaluation
