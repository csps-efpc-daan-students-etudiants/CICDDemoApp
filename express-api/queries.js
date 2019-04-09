const Pool = require("pg").Pool;

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST || "localhost",
  database: process.env.DB_NAME || "postgres",
  password: process.env.DB_PASSWORD,
  port: 5432
});

const getTasks = (request, response) => {
  pool.query("SELECT * FROM task ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const addTask = (request, response) => {
  const { name, completed } = request.body;
  pool.query(
    "INSERT into task (name, completed) VALUES ($1, $2)",
    [name, completed],
    (error,results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`Item added with ID: ${results.insertId}`);
    }
  );
};

module.exports = {
  getTasks: getTasks,
  addTask: addTask
}