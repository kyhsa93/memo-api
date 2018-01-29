var jwt = require('jsonwebtoken');
var secret = require('../config/jwt').secret

module.exports  = (request, response, next) => {
    var token = request.headers['x-access-token'];

    if (!token) {
        return response.status(403).json({
            success: false,
            message: 'not logged in'
        });
    }

    jwt.verify(token, secret, (error, decodeed) => {
        if (error){}
    })
};
