var db = require('../config/db-connection');
var pool = db.connectionPool;

var CREATE_SQL = `INSERT
INTO
    memo.memo
SET
    title = ?,
    memo = ?,
    signUpNumber = ?,
    categoryNumber = ?`;

var LIST_SQL = `SELECT
    *
FROM
    memo.memo`;

module.exports = class MemoDao {
    constructor(){};

    list(callBack) {
        pool.query(LIST_SQL, (error, result) => {
            callBack(result);
        })
    }

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
