"use strict";
var enrutar = function (app, ruta) {

	// También podemos responder emitiendo JSON
	app.get(ruta, function (peticion, respuesta) {
		respuesta.json({
			categoriasIngresos: ['Nómina', 'Ventas', 'Intereses Depósitos'],
			categoriasGastos: ['Hipotéca', 'Compras', 'Impuestos']
		});
	});
}


module.exports = enrutar;
