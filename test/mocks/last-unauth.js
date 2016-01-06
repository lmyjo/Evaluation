[{
  "scope": "http://127.0.0.1:3000",
  "method": "GET",
  "path": "/api/projects/56863bade67b5410003157b8/evaluaciones/last",
  "body": "",
  "status": 401,
  "response": {
    "error": {
      "name": "Error",
      "status": 401,
      "message": "Authorization Required",
      "statusCode": 401,
      "code": "AUTHORIZATION_REQUIRED",
      "stack": "Error: Authorization Required\n    at /opt/lmyjo/app/node_modules/loopback/lib/application.js:376:21\n    at /opt/lmyjo/app/node_modules/loopback/lib/model.js:313:7\n    at /opt/lmyjo/app/node_modules/loopback/common/models/acl.js:465:23\n    at /opt/lmyjo/app/node_modules/loopback/node_modules/async/lib/async.js:251:17\n    at done (/opt/lmyjo/app/node_modules/loopback/node_modules/async/lib/async.js:132:19)\n    at /opt/lmyjo/app/node_modules/loopback/node_modules/async/lib/async.js:32:16\n    at /opt/lmyjo/app/node_modules/loopback/node_modules/async/lib/async.js:248:21\n    at /opt/lmyjo/app/node_modules/loopback/node_modules/async/lib/async.js:572:34\n    at /opt/lmyjo/app/node_modules/loopback/common/models/acl.js:447:17\n    at /opt/lmyjo/app/node_modules/loopback/common/models/role.js:186:9"
    }
  },
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin, Accept-Encoding",
    "access-control-allow-credentials": "true",
    "content-type": "application/json; charset=utf-8",
    "content-length": "943",
    "etag": "W/\"3af-Gy3MjiulijOLYddaj004uw\"",
    "date": "Wed, 06 Jan 2016 06:45:51 GMT",
    "connection": "close"
  }
}]