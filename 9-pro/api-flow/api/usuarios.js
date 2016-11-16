/**
 * Permite que un usuario se registre
 * Es una inserción de un objeto en el recuros de usuarios
 */
// Usa la librería de seguridad
const seguridad = require('./../seguridad/seguridad.js')
module.exports = (app, ruta) => {
    // Gestión de usuarios:  registro
    app.route(ruta)
        .post((req, res) => {
            // inserción de un registro de usuario
            let usuario = req.body
            seguridad.existeUsuario(usuario)
                .then(result => {
                    if (result.length > 0) {
                        console.log(`email ya registrado: ${usuario.email}`)
                        res.status(409).send(`email ${usuario.email} ya registrado`)
                    }
                    else {
                        console.log(`ok registrando: ${usuario.email}`)
                        seguridad.crearUsuario(usuario)
                            .then(() => {
                                let nuevoSessionId = seguridad.nuevaSesion(usuario)
                                res.status(201).json(nuevoSessionId)
                            })
                    }
                })
        })
}
