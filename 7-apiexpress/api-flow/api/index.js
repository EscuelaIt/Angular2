/** carga de módulos propios que gestionan cada ruta del api */
const usuarios = require('./api/usuarios.js')
const sesiones = require('./api/sesiones.js')
const maestros = require('./api/maestros.js')
const movimientos = require('./api/movimientos.js')

/** Función que configura las rutas de una aplicación */
module.exports = (app) => {
    usuarios(app, '/api/pub/usuarios')
    sesiones(app, '/api/pub/sesiones')
    maestros(app, '/api/pub/maestros')
    movimientos(app, '/api/priv/movimientos','/api/priv/saldos')
}