'use strict'
const url = '/api/pub/sesiones'

module.exports.test = (req) => {
    describe(url, () => {
        it('GET respond with 404 not found', (done) => req.get(url).expect(404, done))
        it('POST respond with 201 created to a new session',
            (done) => req
                .post(url)
                .send({ email: 'a@b.c', password: '1234' })
                .expect(201, done))
        it('POST respond with 401 unauthorized to an incorrect password',
            (done) => req
                .post(url)
                .send({ email: 'a@b.c', password: '12345' })
                .expect(401, done))
        it('POST respond with 401 unauthorized to an incorrect email',
            (done) => req
                .post(url)
                .send({ email: 'a@b.d', password: '1234' })
                .expect(401, done))
    })
}