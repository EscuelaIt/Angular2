'use strict'
const usuarios = require('./usuarios.js')
const sesiones = require('./sesiones.js')
const maestros = require('./maestros.js')
const movimientos = require('./movimientos.js')

module.exports = (app) => {
    usuarios(app, '/api/pub/usuarios')
    sesiones(app, '/api/pub/sesiones')
    maestros(app, '/api/pub/maestros')
    movimientos(app, '/api/priv/movimientos','/api/priv/saldos')
}