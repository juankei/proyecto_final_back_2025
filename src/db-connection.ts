import { Pool } from 'pg';
/*const pool = new Pool({
  user: 'postgres',
  password: '1234',
  host: 'localhost',
  port: 5432, // default Postgres port
  database: 'proyecto'
});
*/
const connectionString = 'postgresql://proyecto_final_24_25_lud5_user:UK3qFXkSC6TLblEIvGbLjeWUH2H509va@dpg-cum654ggph6c73dbu49g-a/proyecto_final_24_25_lud5'


const pool = new Pool({
  connectionString
})

export function query(text: any): any {
    return pool.query(text);
};