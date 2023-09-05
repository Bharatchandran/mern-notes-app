const express = require('express');
const router = express.Router();
const noteController = require('../../controllers/api/notes')

router.get('/', noteController.getAllNotes)
router.post('/create', noteController.createNote)

module.exports = router