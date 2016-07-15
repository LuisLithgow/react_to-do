'use strict'
const env = process.env.NODE_ENV || development
const DEV = env==='development'
const dotenv = (DEV) ? require('dotenv').config() : undefined


const express = require('express')
const app = express()
const path = require('path')
const morgan = require('logger')
const bodyParser = require('body-parser')
const PORT = process.argv[2] || process.env.PORT || 3000

const taskRoute =  require('./routes/routesstask')

// app.use(express.static(path.join(__dirname, 'dist')))
app.use(bodyParser.JSON())
app.use(logger('dev'))

app.get('/', (req, res)=>{
  res.send("HOME PAGE");
})

app.use('/tasks', tasksRoute );



app.listen(PORT, ()=>{
  console.log('Listening to server on port ' + PORT)
})
