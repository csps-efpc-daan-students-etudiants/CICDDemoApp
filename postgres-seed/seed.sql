CREATE TABLE task (
  ID SERIAL PRIMARY KEY,
  name text,
  completed boolean
);

INSERT INTO task(name, completed) VALUES ('Wake Up', true);
INSERT INTO task(name, completed) VALUES ('Make a List', true);
INSERT INTO task(name, completed) VALUES ('Go for a walk', false);
