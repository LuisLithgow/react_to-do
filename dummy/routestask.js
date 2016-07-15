'use strict '

const express = require('express')
const tasksRouter = require('express').Router()
const DB = require ('../models/modelstask')

const sendJSONresp = (req,res)=>res.json(res.rows)

