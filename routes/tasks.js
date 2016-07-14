'use strict'
const express = require('express');
const tasks = require('express').Router();
const taskModel = require('../models/task')

// let taskArray = [];\
// const sendJSONresp = (req,res)=>res.json()


tasks.route('/:taskID')
    .get((req,res)=>res.send(`showed task ${req.params.id}`))
    .put((req,res)=>res.send(`edited task ${req.params.id}`))
    // used PUT to post a specific id
    .delete((req,res)=>res.send(`deleted task ${req.params.id} `))

tasks.route('/' )
    .get((req,res)=>res.send('show tasks'))
    .post((req,res)=>res.send('posted new task'))


module.exports = tasks ;






// tasks.get('/:id', (req,res)=>{
//   res.send(`showed task ${req.params.id}`)
// })

// tasks.get('/', (req,res)=>{
//   res.send('show tasks')
// })
// tasks.post('/', (req,res)=>{
//   res.send('posted new task')
// })

// tasks.get('/:id', (req,res)=>{
//   res.send(`showed task ${req.params.id}`)
// })
// tasks.put('/:id', (req,res)=>{
//   res.send(`edited task ${req.params.id}`)
// })
// tasks.put('/:id', (req,res)=>{
//   res.send(`edited task ${req.params.id}`)
// })
// tasks.delete('/:id', (req,res)=>{
//   res.send(`edited task ${req.params.id}`)
// })

