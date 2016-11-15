'use strict'
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
    const seguridad = require('./seguridad.js')
    const options = {
        extensions: ['htm', 'html'],
        maxAge: '1d',
        setHeaders: res => res.set('x-timestamp', Date.now())
    }

    // Un uso muy frecuente es reservar una serie de rutas para derivarlas al disco
    // Tendremos así un directorio para contenido estático
    app.use(express.static(__dirname + '/estatico', options))

    // Otro uso común es la monitorización de la aplicación
    // Interceptor de llamadas
    app.use((peticion, respuesta, siguiente) =>{
        console.log(`recibida petición: ${peticion.url}`)
        // Es muy importante continuar el flujo hacia la sigueinte función
        siguiente()
        // En caso de no hacerlo, se colgaría la llamada
    })

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


