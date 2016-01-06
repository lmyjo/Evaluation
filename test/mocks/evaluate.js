[{
  "scope": "http://127.0.0.1:3000",
  "method": "GET",
  "path": "/api/projects/56863bade67b5410003157b8/evaluaciones/last",
  "body": "",
  "status": 200,
  "response": {
    "result": {
      "evaluacion": null,
      "lastModification": "2016-01-04T01:27:17.693Z",
      "operaciones": [{
        "nombre": "Operacion super super",
        "tipo_operacion": "ingreso",
        "unidad_tiempo": "mes",
        "tipo_factor": "gradiente",
        "cantidad_monetaria": 300,
        "tasa_interes": 4,
        "periodo_inicial": 5,
        "periodicidad": 2,
        "duracion": 14,
        "incremento": 100,
        "fecha_creacion": "2016-01-01T08:43:02.686Z",
        "id": "56863c16e67b5410003157b9",
        "project_id": "56863bade67b5410003157b8",
        "fecha_modificacion": "2016-01-01T08:43:02.686Z",
        "links": [{
          "rel": "operaciones",
          "uri": "/api/projects/56863bade67b5410003157b8/operaciones/56863c16e67b5410003157b9"
        }]
      }, {
        "nombre": "Operacion super super",
        "tipo_operacion": "ingreso",
        "unidad_tiempo": "mes",
        "tipo_factor": "gradiente",
        "cantidad_monetaria": 300,
        "tasa_interes": 4,
        "periodo_inicial": 5,
        "periodicidad": 2,
        "duracion": 14,
        "incremento": 100,
        "fecha_creacion": "2016-01-03T02:41:50.688Z",
        "id": "56888a6e78544811002fb9ec",
        "project_id": "56863bade67b5410003157b8",
        "fecha_modificacion": "2016-01-03T02:41:50.688Z",
        "links": [{
          "rel": "operaciones",
          "uri": "/api/projects/56863bade67b5410003157b8/operaciones/56888a6e78544811002fb9ec"
        }]
      }, {
        "nombre": "Operacion super super 3",
        "tipo_operacion": "ingreso",
        "unidad_tiempo": "mes",
        "tipo_factor": "gradiente",
        "cantidad_monetaria": 300,
        "tasa_interes": 4,
        "periodo_inicial": 5,
        "periodicidad": 2,
        "duracion": 14,
        "incremento": 100,
        "fecha_creacion": "2016-01-03T02:46:33.598Z",
        "id": "56888b8978544811002fb9ee",
        "project_id": "56863bade67b5410003157b8",
        "fecha_modificacion": "2016-01-03T02:46:33.598Z",
        "links": [{
          "rel": "operaciones",
          "uri": "/api/projects/56863bade67b5410003157b8/operaciones/56888b8978544811002fb9ee"
        }]
      }, {
        "nombre": "Operacion super super 3",
        "tipo_operacion": "ingreso",
        "unidad_tiempo": "mes",
        "tipo_factor": "gradiente",
        "cantidad_monetaria": 300,
        "tasa_interes": 4,
        "periodo_inicial": 5,
        "periodicidad": 2,
        "duracion": 14,
        "incremento": 100,
        "fecha_creacion": "2016-01-04T01:27:17.690Z",
        "id": "5689ca754719941000bb47b9",
        "project_id": "56863bade67b5410003157b8",
        "fecha_modificacion": "2016-01-04T01:27:17.691Z",
        "links": [{
          "rel": "operaciones",
          "uri": "/api/projects/56863bade67b5410003157b8/operaciones/5689ca754719941000bb47b9"
        }]
      }]
    }
  },
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin, Accept-Encoding",
    "access-control-allow-credentials": "true",
    "content-type": "application/json; charset=utf-8",
    "content-length": "2096",
    "etag": "W/\"830-5ax5rjY4722NlkPBPN+o/Q\"",
    "date": "Wed, 06 Jan 2016 06:45:51 GMT",
    "connection": "close"
  }
}, {
  "scope": "http://127.0.0.1:3000",
  "method": "POST",
  "path": "/api/projects/56863bade67b5410003157b8/evaluaciones",
  "body": "",
  "status": 200,
  "response": {
    "created": "2016-01-06T06:45:51.565Z",
    "eval": {
      "vpn": 0,
      "tir": 0,
      "bc": 0
    },
    "status": {
      "code": 0,
      "message": "evaluation_pending"
    },
    "id": "568cb81f3079c311004bf8de",
    "project_id": "56863bade67b5410003157b8",
    "links": [{
      "rel": "evaluaciones",
      "uri": "/api/projects/56863bade67b5410003157b8/evaluaciones/568cb81f3079c311004bf8de"
    }]
  },
  "headers": {
    "x-powered-by": "Express",
    "vary": "Origin, Accept-Encoding",
    "access-control-allow-credentials": "true",
    "content-type": "application/json; charset=utf-8",
    "content-length": "311",
    "etag": "W/\"137-Gyt69gYEzLHwrbsrDvPsFA\"",
    "date": "Wed, 06 Jan 2016 06:45:51 GMT",
    "connection": "close"
  }
}]