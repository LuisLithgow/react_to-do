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



app.listen(PORT, ()=>{
  console.log('Listening to server on port ' + PORT)
})


