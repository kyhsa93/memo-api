Memo api
===
Start
---
    node index.js
Configuration
---
    Port: 5100
    DataBase: Mysql
    Authentication: https://github.com/kyhsa93/authentication-api
    application: https://github.com/kyhsa93/memo-app

Http POST Request Header
---
    x-access-token: JWT

EndPoints
---
    /memo
    /category
| End Point | Method |              Request               |                      Response                      |
|-----------|:------:|:----------------------------------:|----------------------------------------------------|
|   /memo   |  POST  | title,<br>memo,<br>categoryNumber  |       success: Boolean, <br>message: String        |
|   /memo   |  GET   |                                    |                  Array\<Object\>                   |
| /category |  POST  |              category              |       success: Boolean, <br>message: String        |
| /category |  GET   |                                    |                  Array\<Object\>                   |

DataBase
---
    memo.memo
|      Name      |   Type    |length|Null|                default                |
|----------------|:---------:|:----:|:--:|---------------------------------------|
|   memoNumber   |    int    |  10  |not |            Auto_increment             |
|     title      |  varchar  |  100 |not |                  no                   |
|      memo      |   text    |  -   |not |                  no                   |
|  signUpNumber  |    int    |  10  |not |                  no                   |
| categoryNumber |    int    |  10  |not |                  no                   |
|   timeStamp    | timestamp |  -   |not | Current timestamp on update timestamp |

    memo.category
|      Name      |   Type    |length|Null|                default                |
|----------------|:---------:|:----:|:--:|---------------------------------------|
| categoryNumber |    int    |  10  |not |            Auto_increment             |
|    category    |  varchar  |  50  |not |                  no                   |
