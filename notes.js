//console.log('Starting notes.js ');
const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString); //By this, adding a new note will NOT replace the already existing note
       } catch (err) {
        return [];
       }
}
var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));

}


var addNote = (title, body) => {
   // console.log('Adding Note ', title, body);
   var notes = fetchNotes(); //Array  or []
   var note = {    //Main job is to add the note object to the notes array
       title: title,
       body: body
   }


   var duplicateNotes = notes.filter ((note) => {  //For unique notes 
       return note.title === title;
   })
   if (duplicateNotes.length == 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
 
   }

   
}

var getAll = () => {
   // console.log('Getting all notes');

   return fetchNotes();

}

var getNote = (title) => {
    console.log('Getting Note ', title);

    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title === title )

    return filteredNotes[0];




}
var removeNote = (title) => {
  //  console.log('Removing Note', title);
  //Fetch notes
  var notes = fetchNotes();
  //filer notes = removing the one with title of the argument
  var filteredNotes = notes.filter((note) => note.title !== title)   //notes.filter always returns an array

  //save new notes array
  saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length  //if the new notes and the filtered notes' length are not equal, something has 
  //been removed -- if not equal, returns true


}


var logNote = (note) => {
    console.log('--');
    console.log('Title: ' + note.title);
    console.log('Body: ' + note.body);
}


module.exports = { 
    addNote: addNote,
    getAll: getAll,
    getNote: getNote,
    removeNote: removeNote
}