var db = require('../config/db-connection');
var pool = db.connectionPool;

var CATEGORY_LIST_SQL = `SELECT
    *
FROM
    memo.category;`

var CREATE_SQL = `INSERT INTO
    memo.category
SET
    category = ?`;

var CHECK_CATEGORY = `SELECT
    *
FROM
    memo.category
WHERE
    category = ?`;

module.exports = class CetegoryDao {
    constructor(){};

    /**
     * @type {function}
     * @param {string} name 
     * @param {function} callBack 
     */
    create(name, callBack) {
        pool.query(CHECK_CATEGORY, name, (error, result) => {
            if (result.length) {
                callBack(error);
                return;
            }
            pool.query(CREATE_SQL, name, (error, result) => {
                callBack(result);
            });
        });
    }

    /**
     * @type {function}
     * @param {fucntion} callBack 
     */
    list(callBack) {
        pool.query(CATEGORY_LIST_SQL, (error, result) => {
            callBack(result);
        });
    }
};
