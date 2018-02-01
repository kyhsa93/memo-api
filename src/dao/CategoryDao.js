var db = require('../config/db-connection');
var pool = db.connectionPool;

var CATEGORY_LIST_SQL = `SELECT
    *
FROM
    memo.category;`

module.exports = class CetegoryDao {
    constructor(){};

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
