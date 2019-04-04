const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "db",
  database: "postgres",
  password: "docker",
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