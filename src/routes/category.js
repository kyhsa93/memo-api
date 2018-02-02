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
            response.status(200).json({
                success: true,
                message: 'category created'
            });
        } else {
            response.status(400).json({
                success: false,
                message: 'category failed'
            });
        }
    }

    co(function* () {
        var result = yield callBack => {
            categoryDao.create(request.body.category, callBack);
        }
        sendResponse(result);
    }).catch(result => {
        sendResponse(result);
    });
};
