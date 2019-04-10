const express = require("express");
const bodyParser = require("body-parser");
const db = require("./queries.js");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

app.get("/tasks", db.getTasks);
app.post("/task", db.addTask);
app.post("/toggleTask", db.toggleTask);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
