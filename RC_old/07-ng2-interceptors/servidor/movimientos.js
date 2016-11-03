"use strict";
var movimientos = [];
var enrutar = function (app, ruta) {
	// Tendremos dos mega-rutas por recurso

	// una para ir a la colección
	app.route(ruta)
		.get(function (peticion, respuesta) {
			// filtro para el usuario actual
			var movimientosUsuario = movimientos.filter(function (m) {
				return m.usuario == peticion.usuario;
			});
			if (movimientosUsuario.length > 0)
				respuesta.json(movimientosUsuario);
			else
				respuesta.status(204).send();
		}).post(function (peticion, respuesta) {
			var nuevoMovimiento = peticion.body;
			nuevoMovimiento.id = movimientos.length;
			// firma del movimiento en el servidor
			nuevoMovimiento.usuario = peticion.usuario;
			movimientos.push(nuevoMovimiento)
			console.log(JSON.stringify(movimientos));
			respuesta.status(201).json(nuevoMovimiento);
		});

	// si la ruta es simple, se puede mantener el verbo original
	// y simpre teniendo en cuenta la precedencia
	app.get(ruta + '/totales', function (peticion, respuesta) {
		var totales = {
			ingresos: 0,
			gastos: 0,
			balance: 0
		};
		if (movimientos && movimientos.length > 0) {
			movimientos.forEach(function (movimiento) {
				if (movimiento.usuario == peticion.usuario) {
					if (movimiento.tipo==='Ingreso') {
						totales.ingresos += movimiento.importe;
					} else {
						totales.gastos += movimiento.importe
					}
				}
			});
			totales.balance = totales.ingresos - totales.gastos;
			respuesta.json(totales);
		} else {
			respuesta.status(204).json({
				ingresos: 0,
				gastos: 0,
				balance: 0
			});
		}
	});

	// otra a nivel de elemento
	app.route(ruta + '/:id')
		.get(function (peticion, respuesta) {
			var movimientosUsuario = getMovimientoUsuario(peticion.params.id, peticion.usuario);
			if (movimientosUsuario && movimientosUsuario.length > 0)
				respuesta.json(movimientosUsuario[0]);
			else
				respuesta.status(404).send();
		}).put(function (peticion, respuesta) {
			var index = getMovimientoUsuarioIndex(peticion.params.id, peticion.usuario);
			if (index >= 0) {
				movimientos[index] = peticion.body;
				respuesta.json(1);
			} else {
				respuesta.status(404).send(0);
			}
		}).delete(function (peticion, respuesta) {
			var index = getMovimientoUsuarioIndex(peticion.params.id, peticion.usuario);
			if (index >= 0) {
				movimientos.splice(index, 1)
				respuesta.status(204).send();
			} else {
				respuesta.status(404).send(0);
			}
		})


	function getMovimientoUsuario(id, usuario) {
		var movimientosUsuario = movimientos.filter(function (m) {
			return (m.usuario == usuario && m.id == id)
		})
		return movimientosUsuario;
    }
    
    function getMovimientoUsuarioIndex(id, usuario) {
		var index = movimientos.findIndex(function (m) {
			return (m.usuario == usuario && m.id == id)
		})
		return index;
	}


}

module.exports = enrutar;
