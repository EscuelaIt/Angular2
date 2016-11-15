/**
 * Módulo de lógica intermedia.
 * @module middleware
 */

/**
 * @param {object} app - al aplicación de express
 * @param {object} express - el propio framework express
 * @return configura la aplicación
 */
module.exports.useMiddleware = (app, express) => {
    const bodyParser = require('body-parser')
    const seguridad = require('./seguridad/seguridad.js')

    // Permite recuperar como objetos JavaScript el contenido emitido por el cliente
    // tanto en parámetros
    app.use(bodyParser.urlencoded({
        extended: true
    }))
    // como en el body
    app.use(bodyParser.json())

    // este middleware se encargará de vigilar la entrada    
    seguridad.usarSeguridad(app, '/api/priv/')    
}


