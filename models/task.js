'use strict'
const pg = require('pg-promise')({
// Initialization Options
});
const config = {
  host:      process.env.DB_HOST,
  port:      process.env.DB_PORT,
  database:  process.env.DB_NAME,
  user:      process.env.DB_USER,
  password:  process.env.DB_PASS,
};

const _db = pg(config);

module.exports = {
  getTasks(req, res, next) {
    _db.any("SELECT * FROM tasks ;")
      .then( tasks=>{
        res.rows = tasks;
        next()
      })
    .catch( error => {
      console.log('Error: ', error)
    })
  },

// POST /tasks
// Creates a new task, returns the newly created record
  addTask(req, res, next) {
    console.log('===', req.body)
    _db.any(
      `INSERT INTO
      tasks(task_name, task_desc)
      VALUES ($/name/, $/desc/)
      returning *;`, req.body
    )
      .then( task=>{
        console.log('Added tasks successfully');
        res.rows = task;
        next()
      })
    .catch( error => {
      console.log('Error in Adding Task: ', error);
    })
  },

  // PUT /tasks/:id
  updateTask(req, res, next){
    // tID is invented here
    req.body.tID = Number.parseInt(req.params.taskID);
    req.body.completed = !!req.body.completed;

    _db.any(
      `UPDATE tasks SET
      task_name=$/name/,
      task_desc=$/desc/,
      completed=$/completed/
      WHERE task_id = $/tID/
      returning  * ; `,
      req.body)
    .then( task=>{
        console.log('Added Updated successfully');
        res.rows = task;
        next()
      })
    .catch( error => {
      console.log('Error in Updating Task: ', error);
    })
  },

  // DELETE /tasks/:id
  deleteTask(req,res,next) {
    const tID = Number.parseInt(req.params.taskID);
    _db.none(`
      DELETE FROM tasks
      WHERE task_id = ($1)
      `, [tID])
      .then( task=>{
        console.log('Deleted Succesfully');
        res.rows = task;
        next()
      })
    .catch( error => {
      console.log('Error in Deleting Task: ', error);
    })
  },

}









