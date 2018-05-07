
//Method 1
// // var obj = {
// //     name: 'Adarsh'
// // }
// // var stringObj = JSON.stringify(obj);
// // console.log(typeof stringObj);
// // console.log(stringObj);


//Method 2
// var personString = '{"name" : "Adarsh", "age" : 19}';
// var person = JSON.parse(personString);  //To parse JSON Data
// console.log(typeof person);
// console.log(person);

//Method 3

const fs = require('fs');

var originalNote = {  //Object defined which will be stored inside the file, read back and parsed 
    title : 'Some Title',
    body: 'Some Body'
}

//originalNoteString 

//To write to a note
var originalNoteString = JSON.stringify(originalNote); 

fs.writeFileSync('notes.json', originalNoteString);

//To read a note 
var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);


