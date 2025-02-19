"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = void 0;
var pg_1 = require("pg");
var pool = new pg_1.Pool({
    user: 'postgres',
    password: '1234',
    host: 'localhost',
    port: 5432,
    database: 'proyecto'
});
/*const connectionString = 'postgresql://proyecto_final_24_25_lud5_user:UK3qFXkSC6TLblEIvGbLjeWUH2H509va@dpg-cum654ggph6c73dbu49g-a/proyecto_final_24_25_lud5'


const pool = new Pool({
 connectionString
})
 */
function query(text) {
    return pool.query(text);
}
exports.query = query;
;
