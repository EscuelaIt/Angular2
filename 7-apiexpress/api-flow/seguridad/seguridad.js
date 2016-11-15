/** Módulos de ayuda */
const mongodb = require('./../mongodb')
const jwt = require('./jwt')
const colName = 'usuarios'
/**
 * Módulo con funciones útiles para la seguridad de la aplicación
 */
module.exports = {
    /** determina si una ruta debe usar seguirdad o no */
    usarSeguridad: usarSeguridad,
    /** comprueba si exite un usuario */
    existeUsuario: existeUsuario,
    /** crea un nuevo usuario */
    crearUsuario: creandoUsuario,
    /** determina si unas credenciales son válidas */
    esUsuarioValido: esUsuarioValido,
    /** crea un nuevo token de sesión */
    nuevaSesion: (usuario) => jwt.generaToken(usuario)
}

function usarSeguridad(app, ruta) {
    app.use(ruta, (req, res, next) => {
        // la validación de la sesión es en memoria
        // jwt descifra y valida un token
        let sessionId = req.get('sessionId')
        let sesion = jwt.verify(sessionId)
        if (sesion) {
            req.usuario = sesion.email
            next()
        } else {
            res.status(401).send('Credencial inválida')
        }
    })
}

/**
 * los registros de usuario se crean físicamente en base de datos
 */

function existeUsuario(usuario) {
    return mongodb.finding(colName, { email: usuario.email })
}

function creandoUsuario(usuario) {
    return mongodb.inserting(colName, usuario)
}

function esUsuarioValido(usuario) {
    return mongodb.finding(colName, { email: usuario.email, password: usuario.password })
}




