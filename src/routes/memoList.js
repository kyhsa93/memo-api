var co = require('co');
var MemoDao = require('../dao/MemoDao');

module.exports = (request, response) => {
    var memoDao = new MemoDao();

    function sendResponse(result) {
        if (result) {
            response.status(200).send(result);
        } else {
            response.sendStatus(400);
        }
    }

    co(function* () {
        var result = yield callBack => {
            memoDao.list(callBack);
        }
        sendResponse(result)
    }).catch(result => {
        sendResponse(result);
    });
};
