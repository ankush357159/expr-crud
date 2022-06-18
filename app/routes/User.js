const express = require('express')

const UserController = require('../controller/User')

const router = express.Router()

router.post('/create', UserController.create)


module.exports = router