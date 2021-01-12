const express = require('express');
const fs = require('fs');
const path = require('path');
const {v4: uuidv4 } = require('uuid');

const router = express.Router();
let db = require("../db/db.json")
// GET ROUTE
router.get('/', function (req, res) {

res.json(db)
})


// POST Route
router.post('/', function (req, res) {

 
const newNote = {
    title: req.body.title,
    text: req.body.text,
    id: uuidv4(),

}
   db.push(newNote)

   fs.writeFile("./db/db.json", JSON.stringify(db), function(){
       res.json(db)
   })

})

 


// DELETE Route


// app.delete('/user', function (req, res) {
//     res.send('Got a DELETE request at /user')
//   })

router.delete('/:id', function (req, res) {

 
    db = db.filter(note => note.id !== req.params.id);
    
    fs.writeFile('./db/db.json', JSON.stringify(db), (err) => {
        if (err) {
            throw err
        } else {
            res.json(db)
        }
    })


})

module.exports = router