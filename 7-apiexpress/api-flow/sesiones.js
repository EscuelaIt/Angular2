'use strict'
const seguridad = require('./seguridad.js')
module.exports = (app, ruta) => {
    // Gestión de sesiones:  login
    app.route(ruta)
        .post((req, res) => {
            let sesion = req.body
            seguridad.esUsuarioValido(sesion)
                .then(result => {
                    if (result.length > 0) {
                        console.log(`aceptado: ${sesion.email}`)
                        let nuevoSessionId = seguridad.nuevaSesion(sesion)
                        res.status(201).json(nuevoSessionId)
                    } else {
                        console.log(`Credencial inválida: ${sesion.email}`)
                        res.status(401).send('Credencial inválida')
                        res.send()
                    }
                })

        })

}
