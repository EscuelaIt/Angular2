var seguridad = require('./seguridad.js');
var enrutar = function (app, ruta) {

	// Gestión de sesiones: listado y login
	app.route(ruta)
		.post(function (req, res, next) {
			var sesion = req.body;
			if (seguridad.esUsuarioValido(sesion)) {
				console.log('aceptado:' + sesion.email);
				var nuevoSessionId = seguridad.nuevaSesion(sesion.email);
				res.status(201).json(nuevoSessionId);
			} else {
				console.log('Credencial inválida:' + sesion.email);
				res.status(401).send('Credencial inválida');
			}
		});

}



module.exports = enrutar;
