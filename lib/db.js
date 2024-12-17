import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "brainfund",
  waitForConnections: true,
  connectionLimit: 10, // число одновременных соединений
  queueLimit: 0, // без ограничений очереди
});

export default pool;
