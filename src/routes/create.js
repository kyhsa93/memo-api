var co = require('co');
var MemoDao = require('../dao/MemoDao');

module.exports = (request, response) => {
    var memoDao = new MemoDao();

    var data = [
        request.body.title,
        request.body.text,
        request.user.idCode,
        request.body.categoryNumber
    ];

    function sendResponse(result) {
        if (result) {
            response.status(201).json({
                success: true,
                message: 'memo created'
            });
        } else {
            response.status(400).json({
                success: false,
                message: 'memo failed'
            });
        }
    };

    co(function* () {
        var result = yield callBack => {
            memoDao.create(data, callBack);
        }
        sendResponse(result);
    }).catch(result => {
        sendResponse(result);
    });
};
