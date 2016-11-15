'use strict'
module.exports = (app, ruta) => {

    // También podemos responder emitiendo JSON
    app.get(ruta, (peticion, respuesta) => {
        respuesta.json({
            categoriasIngresos: ['Nómina', 'Ventas', 'Intereses Depósitos'],
            categoriasGastos: ['Hipotéca', 'Compras', 'Impuestos']
        })
    })
}

