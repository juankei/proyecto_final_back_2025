import { Pool } from 'pg';

/*const pool = new Pool({
  user: 'postgres',
  password: '1234',
  host: 'localhost',
  port: 5432, // default Postgres port
  database: 'proyecto'
});*/

const connectionString = 'postgresql://proyecto_final_24_25_lud5_user:UK3qFXkSC6TLblEIvGbLjeWUH2H509va@dpg-cum654ggph6c73dbu49g-a.frankfurt-postgres.render.com/proyecto_final_24_25_lud5?sslmode=require';



const pool = new Pool({
  connectionString: process.env.DATABASE_URL || connectionString,
  ssl: {
    rejectUnauthorized: false
  }
});


export function query(text: any): any {
    return pool.query(text);
};