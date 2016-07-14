'use strict'
const express = require('express');
const logger = require('morgan');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3009;

// const homeRoute = require('');
const tasksRoute = require('./routes/tasks');

// app.use(express.static(path.join(__dirname, 'dist')));

app.use(logger('dev'));

app.get('/', (req, res)=>{
  res.send("HOME PAGE");
})

app.use('/tasks', tasksRoute );


// app.use('/tasks/:id', tasksRoute )

// tasksRoute.route('/tasks/:id' )
//     .get((req,res)=>res.send(`showed task ${req.params.id}`))
//     .put((req,res)=>res.send(`edited task ${req.params.id}`))
//     // used PUT to post a specific id
//     .delete((req,res)=>res.send(`deleted task ${req.params.id} `))

// tasksRoute.route('/tasks' )
//     .get((req,res)=>res.send('show tasks'))
//     .post((req,res)=>res.send('posted new task'))



app.listen(PORT, ()=>{
  console.log('Listening to server on port ' + PORT)
})


