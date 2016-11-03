var seguridad = require('./seguridad.js');
var enrutar = function (app, ruta) {

	// Gestión de sesiones: listado y login
	app.route(ruta)
		.post(function (req, res, next) {
			var usuario = req.body;
			if (seguridad.existeUsuario(usuario)) {
				console.log('email ya registrado:' + usuario.email);
				res.status(409).send('email ' + usuario.email + ' ya registrado');
			} else {
				console.log('registrado:' + usuario.email);
				seguridad.crearUsuario(usuario)
				var nuevoSessionId = seguridad.nuevaSesion(usuario.email);
				res.status(201).json(nuevoSessionId);
			}
		});

}



module.exports = enrutar;
