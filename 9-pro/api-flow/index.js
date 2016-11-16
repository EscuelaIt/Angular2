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
// Un uso muy frecuente es reservar una serie de rutas para derivarlas al disco
// Tendremos así un directorio para contenido estático
const options = {
        extensions: ['htm', 'html'],
        maxAge: '1d',
        setHeaders: res => res.set('x-timestamp', Date.now())
    }
app.use(express.static(__dirname + '/cliente', options))


/** Arranque del servidor */
app.listen(3030);
console.log('listening on port 3030');

