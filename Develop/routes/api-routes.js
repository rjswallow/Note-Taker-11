const express = require('express');
const fs = require('fs');
const path = require('path');
const {v4: uuidv4 } = require('uuid');

const router = express.Router();

// GET ROUTE
router.get('/', function (req, res) {

const data = getNotes();

res.send(data)
})


// POST Route
app.post('/', function (req, res) {

const data = getNotes();
const newNote = {
    title: req.body.title,
    text: req.body.text,
    id: uuidv4(),

}

})

// PUSH Route
data.push(newNote);
fs.writeFile(path.join(__dirname, '', 'db.json'), JSON.stringify(data), function (err) {
    if (err) {
        throw err
    } else {
        console.log('Update successful')
    }
})


// DELETE Route


// app.delete('/user', function (req, res) {
//     res.send('Got a DELETE request at /user')
//   })

app.delete('/:id', function (req, res) {

    const data = getNotes();
    const updatedNotes = notes.filter(note => note.id !== req.params.id);
    
    fs.writeFile(__dirname, '../db/db.json'), JSON.stringify(updatedNotes), (err) => {
        if (err) {
            throw err
        } else {

        }
    }


})

