# FS

A basic note managing application using JavaScript. Run this app on terminal.

All notes created will be added to 'notes-data.json' file in JSON Format.

Open Terminal, browse to the project folder and 
  
  
     1. node app.js --help to get help
     2. note app.js (command name) --help to get help about this specific command 
  
  
  To add to the note :
  
     node app.js add --title="Hello World" --body="This is a body"
  
  To remove a note:
  
     node app.js remove --title="Hello World"
  
  To list all notes:
  
     node app.js list
  
  To read a particular note:
  
    node app.js read --title="Hello World"
  
  
  
  Note: Instead of --title and --body, one can use -t and -b for easibility.
