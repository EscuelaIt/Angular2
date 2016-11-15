/** Módulo para leer y escribir movimientos en mongodb */
const mongodb = require('./../mongodb')
const colName = 'movimientos'

module.exports = (app, rutaMovimientos) => {
       
    // Tendremos dos mega-rutas por recurso
    // una para ir a la colección
    // api/priv/movimientos
    app.route(rutaMovimientos)
        .get((req, res) => {
            // lectura de todos los movimientos
            mongodb.finding(colName, { usuario: req.usuario })
                .then(result => result.length > 0 ? res.json(result) : res.status(204).send())
                .catch(err => resError(err, res))
        }).post((req, res) => {
            // inserción de un movimiento
            let nuevoMovimiento = req.body
            nuevoMovimiento.usuario = req.usuario
            mongodb.inserting(colName, nuevoMovimiento)
                .then(result => res.status(201).json(result.ops[0]))
                .catch(err => resError(err, res))
        })



    // esto otra ruta va a nivel de un elemento concreto
    // // api/priv/movimientos/159
    app.route(`${rutaMovimientos}/:id`)
        .get((req, res) => {
            // lectura de un movimiento por id
            mongodb.finding(colName, { usuario: req.usuario}, req.params.id)
                .then(result => result.length > 0 ? res.json(result) : res.status(404).send())
                .catch(err => resError(err, res))
        }).put((req, res) => {
            // actualización de un movimiento por id
            mongodb.updating(colName, { usuario: req.usuario }, req.params.id, req.body)
                .then(result => result.result.n > 0 ? res.status(200).json(result) : res.status(404).send())
                .catch(err => resError(err, res))

        }).delete((req, res) => {
            // borrado de un movimiento por id
            mongodb.deleting(colName, { usuario: req.usuario }, req.params.id)
                .then(result => res.status(204).json(result))
                .catch(err => resError(err, res))
        })

    /** Respuesta común a errores */    
    var resError = (err, res) => {
        console.error(err)
        res.status(500).send(err)
    }    
}
