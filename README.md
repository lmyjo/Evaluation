# Evaluation

Microservice for the handling of requests of Evaluations into the `lmyjo/InvestmentsAPI`.

The behavior of this service is asynchronous, it creates an evaluation object into the `lmyjo/InvestmentsUtility`, however, the evaluation, indeed, is done by other Microservice.

This Microservice uses the publish/subscribe pattern in order to create new evaluations. The role of the `lmyjo/Evaluation` Microservice is the publisher role.

Version 1.0.0
=============

Installation (npm)
------------------
For installation, at the root of the project:

```
$ npm install
```
Running (npm)
-------------
For running the `lmyjo/Evaluation` Microservice, it's imperative to have `node.js >= 4.x.x` with `npm >= 2.x.x` installed. Ensure the existence of a `RabbitMQ` server. Run it with:

```
$ npm start
```

By default, there is a `.env` file in the root of the project. This file contains all the environment variables needed by the application for the expected behavior. However, the variables could be set by passing them before the start command:

```
$ SERVICE_PORT=8080 npm start
```

Testing
-------

This project has unit tests, they can be executed by:

```
$ npm test
```

Usage
-----

The Microservice handle the following routes:

#### Get the last evaluation of a project

```
GET /api/projects/:project_id/evaluaciones/last
```
The Microservice will answer with an object.

### Create a new evaluation

```
POST /api/projects/:project_id/evaluaciones
```
The Microservice will answer with the object of the created evaluation, however, if there were no modifications to the project, it will answer with the last evaluation created.

## License

Please refer to the GPL V3 license included [here](LICENSE).
