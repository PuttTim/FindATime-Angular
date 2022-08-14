const express = require('express')
const roomController = require('../controllers/room-controller')

const router = express.Router()

router.get('/allrooms', roomController.getAllRoomId)
router.get('/:id', roomController.getRoomById)
router.post('/create', roomController.createRoom)

module.exports = router