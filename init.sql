CREATE TABLE todos (
  ID SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  iscomplete boolean default False,
  issue_key VARCHAR(40)
);