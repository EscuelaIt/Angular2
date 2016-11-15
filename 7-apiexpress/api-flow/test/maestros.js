'use strict'
module.exports.test = (req) => {
    describe('/api/pub/maestros', () => {
        it('GET respond with 200 ok to maestros ',
            (done) => req.get('/api/pub/maestros').expect(200, done))
        it('GET respond with 404 not fount to maestros2 ',
            (done) => req.get('/api/pub/maestros2').expect(404, done))
        it('GET respond with json to maestros ',
            (done) => req.get('/api/pub/maestros').expect({
                categoriasIngresos: ['Nómina', 'Ventas', 'Intereses Depósitos'],
                categoriasGastos: ['Hipotéca', 'Compras', 'Impuestos']
            }, done))
    })
}