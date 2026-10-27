const express = require('express');
const Note = require('./models/note.models');

const app = express();
app.use(express.json());

app.post('/notes', async (req, res) => {
    const note = await Note.create({
        title: req.body.title,
        description: req.body.description
    });

    res.status(201).json(note);
});

app.get('/notes', async (req, res) => {
    const notes = await Note.find();

    res.status(200).json(notes);
});

app.delete('/notes/:id', async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);

    res.status(200).json({
        message: 'Note deleted successfully'
    });
});

app.patch('/notes/:id', async (req, res) => {
    const note = await Note.findByIdAndUpdate(
        req.params.id,
        {
            title: req.body.title,
            description: req.body.description
        },
        { new: true }
    );

    res.status(200).json(note);
});

module.exports = app;