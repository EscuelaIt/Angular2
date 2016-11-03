"use strict";
var movimientos = [];
var enrutar = function (app, ruta) {
	// Tendremos una ruta por recurso
	app.get(ruta, function (peticion, respuesta) {
		console.log('GET:' +JSON.stringify(movimientos));
		if (movimientos && movimientos.length > 0)
			respuesta.json(movimientos);
		else
			respuesta.status(204).send();
	});

	// La ruta puede ser especifica
	app.get(ruta + '/totales', function (peticion, respuesta) {
		var totales = {
			ingresos: 0,
			gastos: 0,
			balance: 0
		};
		if (movimientos && movimientos.length > 0) {
			movimientos.forEach(function (movimiento) {
				if (movimiento.tipo==='Ingreso') {
					totales.ingresos += movimiento.importe;
				} else {
					totales.gastos += movimiento.importe
				}
			});
			totales.balance = totales.ingresos - totales.gastos;
			respuesta.json(totales);
		} else {
			respuesta.status(200).json({
				ingresos: 0,
				gastos: 0,
				balance: 0
			});
		}
	});

	// Por supuesto se pueden usar parámetros
	app.get(ruta + '/:id', function (peticion, respuesta) {
		var movimiento = movimientos[peticion.params.id];
		if (movimiento) {
			console.log('GET ' + peticion.params.id + ":" +JSON.stringify(movimientos));
			respuesta.json(movimientos[peticion.params.id]);
		}
		else
			respuesta.status(404).send();
	});

	// OJO afecta el orden de declaración

	// Las inserciones se realizan respondiendo al verbo POST
	app.post(ruta, function (peticion, respuesta) {
		var nuevoMovimiento = peticion.body;
		console.log('POST:' +JSON.stringify(nuevoMovimiento));
		nuevoMovimiento._id = movimientos.length;
		movimientos.push(nuevoMovimiento)
		respuesta.status(201).json(nuevoMovimiento);
	});

	// Las actualizaciones se realizan respondiendo al verbo PUT
	app.put(ruta + '/:id', function (peticion, respuesta) {
	console.log('PUT:' +JSON.stringify(peticion.params.id));
		var movimiento = movimientos[peticion.params.id];
		if (movimiento) {
			console.log('PUT:' +JSON.stringify(peticion.body));
			movimientos[peticion.params.id] = peticion.body;
			respuesta.json(1);
		} else {
			respuesta.status(404).send(0);
		}
	});

	// Las eliminaciones se realizan respondiendo al verbo DELETE
	app.delete(ruta + '/:id', function (peticion, respuesta) {
		var movimiento = movimientos[peticion.params.id];
		if (movimiento) {
			movimientos.splice(peticion.params.id, 1)
			respuesta.status(204).send(1);
		} else {
			respuesta.status(404).send(0);
		}
	});




}

module.exports = enrutar;
