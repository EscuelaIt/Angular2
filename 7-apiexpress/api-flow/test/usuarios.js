'use strict'
const url = '/api/pub/usuarios'

module.exports.test = (req) => {
    describe(url, () => {
        it('GET respond with 404 not found', (done) => req.get(url).expect(404, done))
        it('POST respond with 201 created to a new user',
            (done) => req
                .post(url)
                .send({ email: 'a@b.c', password: '1234' })
                .expect(201, done))
        it('POST respond with 409 conflicted to a repeated user',
            (done) => req
                .post(url)
                .send({ email: 'a@b.c', password: '1234' })
                .expect(409, done))
    })
}