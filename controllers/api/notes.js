const Note = require('../../models/note');

module.exports = {
    getAllNotes,
    createNote
}

async function getAllNotes(req, res) {
    const notes = await Note.find({user: req.user._id}).sort('-updatedAt');
    
    res.json(notes)
}

async function createNote(req, res){
    const note = await Note.create({text:req.body.text, user: req.user._id})
    res.json(note)
}