/** Carga de módulos de librerías estándar */
// express
const express = require('express');
// aplicación express
const app = express();

/** Carga de módulos propios */
const middleware = require('./middleware');
middleware.useMiddleware(app);
// Configuración de rutas
require('./api/index')(app);

/** Arranque del servidor */
app.listen(3030);
console.log('listening on port 3030');

