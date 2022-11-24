//? En este archivo vamos a tener las rutas y sus respectivos verbos

const router = require('express').Router()

//! const express = require('express')
//! const router = express.Router()

const taskServices = require('./task.services')
router.get('/user', taskServices.getAllUsers)
router.post('/user', taskServices.postUser)
router.get('/user/:id', taskServices.getuserById)
module.exports = router