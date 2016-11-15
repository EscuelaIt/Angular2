/** librería de encriptado */
const jwt = require('jsonwebtoken')

const secreto = 'EscuelaIT'

/** cifra el usuario durante un margen de tiempo */
exports.generaToken = (usuario) => jwt.sign(usuario, secreto, { expiresIn: 60 })

/** verifica al usuario a partir del token  */
exports.verify = (token) => {
    try {
        return jwt.verify(token, secreto)
    }
    catch(err){
        return false
    }
}

