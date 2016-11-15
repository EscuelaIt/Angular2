/** Módulos de ayuda */
const mongodb = require('./../mongodb')
const jwt = require('./jwt')
const colName = 'usuarios'

module.exports = {
    usarSeguridad: usarSeguridad,
    existeUsuario: existeUsuario,
    crearUsuario: creandoUsuario,
    esUsuarioValido: esUsuarioValido,
    nuevaSesion: (usuario) => jwt.generaToken(usuario)
}

function usarSeguridad(app, ruta) {
    app.use(ruta, (req, res, next) => {
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


function existeUsuario(usuario) {
    return mongodb.finding(colName, { email: usuario.email })
}

function creandoUsuario(usuario) {
    return mongodb.inserting(colName, usuario)
}

function esUsuarioValido(usuario) {
    return mongodb.finding(colName, { email: usuario.email, password: usuario.password })
}




