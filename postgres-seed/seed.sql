CREATE TABLE task (
  ID SERIAL PRIMARY KEY,
  uniqueid uuid,
  name text,
  completed boolean
);

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

INSERT INTO task(name, uniqueid, completed) VALUES ('Wake Up', uuid_generate_v4(),true);
INSERT INTO task(name, uniqueid,  completed) VALUES ('Make a List', uuid_generate_v4(),true);
INSERT INTO task(name, uniqueid, completed) VALUES ('Go for a walk', uuid_generate_v4(),false);
