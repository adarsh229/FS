//console.log('Starting app.js ');

const fs = require('fs');
const _ = require('lodash'); // _ common name for lodash
const yargs = require('yargs');

const notes = require('./notes.js')  //To require files other than modules
//Notes will take care of all the exports, in this case, age.

const titleOptions = {
   
        describe: 'Title of note', demand: true,
        alias: 't' //instead of --title="blah blah", we can use -t="blah blah"
    
}


const argv = yargs
.command('add', 'Add a new note', { 
   title: titleOptions,
    body: {
        describe: 'Body of note',
        demand: true,
        alias: 'b'
    }
})
.command('list', 'List all notes')
.command('read', 'Read a note ', { 
    title: titleOptions
})
.help()
.argv 

var command = process.argv[2];  // or argv._[0]
//console.log('Command: ', command);
//console.log('Process',process.argv);
//console.log('Yargs', argv);


if (command == 'add') {
   // console.log('adding new node');
   var note = notes.addNote(argv.title, argv.body);
   if (note) {
        console.log('Note Created');
        console.log('--');
        console.log('Title: ' + note.title);
        console.log('Body: ' + note.body);
   } else {
       console.log('Note title already taken');

   }
}
else if (command == 'list') {
   // console.log ('Listing all notes');
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} notes(s). `)
  allNotes.forEach((note) => {
    console.log('--');
    console.log('Title: ' + note.title);
    console.log('Body: ' + note.body);
  });
  }



else if (command == 'read') {
    //console.log('Reading note ');
   var note =  notes.getNote(argv.title);

   if (note) {

    console.log('Note Found ');
    console.log('--');
    console.log('Title: ' + note.title);
    console.log('Body: ' + note.body);


   } else {
       console.log('Note not found');
   }



}
else if (command == 'remove') {
   // console.log('Removing note');
   var noteRemoved = notes.removeNote (argv.title);  //true or false 
   var message = noteRemoved ? 'Note Was Removed' : 'Note was not found';
   console.log(message);



}



else {
    console.log('Command not recognised');
}

// console.log(process.argv);