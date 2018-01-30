var db = require('../config/db-connection');
var pool = db.connectionPool;

var CREATE_SQL = `INSERT
INTO
    memo.memo
SET
    title = ?,
    text = ?,
    signUpNumber = ?,
    categoryNumber = ?`;

module.exports = class MemoDao {
    constructor(){};

    /**
     * @type {function}
     * @param {array} data 
     * @param {function} callBack 
     */
    create(data, callBack) {
        pool.query(CREATE_SQL, data, (error, result) => {
            callBack(result);
        });
    }
};
