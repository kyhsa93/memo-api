var co = require('co');
var CategoryDao = require('../dao/CategoryDao');

module.exports = (request, response) => {
    if (request.user.idCode == 'unknown') {
        sendResponse(false);
        return;
    }
    var categoryDao = new CategoryDao();

    function sendResponse(result) {
        if (result) {
            response.status(200).send(result);
        } else {
            response.status(400).json({
                success: false,
                message: 'fail to load category'
            });
        }
    }

    co(function* (){
        var result = yield callBack => categoryDao.list(callBack);
        sendResponse(result);
    }).catch(result => {
        sendResponse(result);
    });
};
