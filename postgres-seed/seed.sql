CREATE TABLE purchase (
  ID SERIAL PRIMARY KEY,
  item text,
  value numeric(10,2),
  quantity numeric(10)
);
INSERT INTO purchase (item, value, quantity) VALUES ('Gold', 100.0, 1)