const express = require('express')
const router = express.Router()
const {Register,Login,currentUser }= require('../Controller/UserController')
const tokenhandler = require('../middelware/TokenHandler')
router.post('/register',Register)
router.post('/login',Login)
router.get('/currentuser',tokenhandler,currentUser)

module.exports = router