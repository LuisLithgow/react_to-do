DROP TABLE IF EXISTS tasks;

CREATE TABLE tasks(
  task_id SERIAL unique Primary Key,
  task_name VARCHAR(50),
  task_desc TEXT,
  completed boolean NOT NULL DEFAULT FALSE,
  task_time_start TIMESTAMP ,
  task_time_end TIMESTAMP,
  task_created TIMESTAMP NOT NUll DEFAULT now()
);


CREATE INDEX on tasks (completed) ;
CREATE INDEX on tasks (task_time_start) ;
CREATE INDEX on tasks (task_created) ;

