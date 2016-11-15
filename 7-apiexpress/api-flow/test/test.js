'use strict'
var request = require('supertest')

request = request('http://localhost:3030')

// llamadas públicas
require('./maestros').test(request)


// llamadas de autenticación
require('./usuarios').test(request)
//require('./sesiones').test(request)


// llamadas privadas
require('./movimientos').test(request)
require('./saldos').test(request)
