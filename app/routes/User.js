const express = require('express')

const UserController = require('../controller/User')

const router = express.Router()

router.post('/create', UserController.create)
router.get('/findusers', UserController.findAll)
router.get('/finduser/:id', UserController.findOne)
router.put('/updateuser/:id', UserController.update)
router.delete('/deleteuser/:id', UserController.destroy)


module.exports = router