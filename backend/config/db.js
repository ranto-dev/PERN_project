const { Pool } = require("pg");
const dotenv = require("dotenv").config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

pool.connect((err, client, release) => {
  if (err) {
    return console.error("Erreur de connection", err);
  }
  console.log("PostgreSQL connection created");
  client.release();
});

module.exports = pool;
