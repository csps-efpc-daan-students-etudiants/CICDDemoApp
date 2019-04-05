const Pool = require("pg").Pool;

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST || "localhost",
  database: process.env.DB_NAME || "postgres",
  password: process.env.DB_PASSWORD,
  port: 5432
});

const getPurchases = (request, response) => {
  pool.query("SELECT * FROM purchase ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const addPurchase = (request, response) => {
  const { item, value, quantity } = request.body;
  pool.query(
    "INSERT into purchase (item, value, quantity) VALUES ($1, $2, $3)",
    [item, value, quantity],
    (error, response) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`Item added with ID: ${result.insertId}`);
    }
  );
};

module.exports = {
  getPurchases,
  addPurchase
}