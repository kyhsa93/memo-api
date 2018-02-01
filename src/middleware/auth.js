var jwt = require('jsonwebtoken');
var secret = require('../config/jwt').secret;

module.exports = (request, response, next) => {
    return (request, response, next) => {
        var token = request.headers['x-access-token']
        if (!token) {
            request.user = {
                idCode: 'unknown',
                name: 'unknown',
                email: 'unknown'
            };
        }
        jwt.verify(token, secret, (error, decode) => {
            if (error) {
                request.user = {
                    idCode: 'unknown',
                    name: 'unknown',
                    email: 'unknown'
                };
            } else {
                request.user = {
                    idCode: decode.idCode,
                    name: decode.name,
                    email: decode.email
                };
            }
        });

        next();
    };
};
