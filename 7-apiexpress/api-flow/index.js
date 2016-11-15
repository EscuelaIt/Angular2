'use strict'
const express = require('express')
const app = express()

const middleware = require('./middleware')
middleware.useMiddleware(app, express)

require('./rutas')(app)
app.listen(3030)
console.log('listening on port 3030')

