'use strict'
const env         = process.env.NODE_ENV || 'development';
const DEV         = env==='development';
const dotenv      = (DEV) ? require('dotenv').config() : undefined;

// regular stuff
const express = require('express');
const logger = require('morgan');
const path = require('path');
const app = express();
const bodyParser = require('body-parser')
const PORT = process.argv[2] || process.env.PORT || 3000;

const tasksRoute = require('./routes/tasks');

// const homeRoute = require('');

app.use(bodyParser.json())
app.use(logger(DEV ? 'dev' : 'common'));

// app.get('/', (req, res)=>{
//   res.send("HOME PAGE");
// })

app.use('/tasks', tasksRoute );

app.use(express.static(path.join(__dirname, 'dist')));



app.listen(PORT, ()=>{
  console.log('Listening to server on port ' + PORT)
})


