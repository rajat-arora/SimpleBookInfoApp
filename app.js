//libraries

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const book = require('./addBook.js');

//yargs settings.
const argv = yargs.argv;
var command = argv._[0]


if (command == 'add'){
  let bookAdded  = book.addBook(argv.title,argv.desc);
  if(bookAdded){
    console.log('Book Added');
    book.logBook(bookAdded);
  }else{
    console.log('Duplicate Book title');
  }
}else if (command == 'list'){
  let allBooks = book.getAllBooks();
  console.log(`Printing ${allBooks.length} books(s)`)
  allBooks.forEach((books) => book.logBook(books));
}else if (command == 'remove'){
  console.log('Removing a book');
  let removedBook = book.removeBook(argv.title);
  removedBook ? console.log('Book Removed') : console.log('Book Not Removed');
}else if (command == 'description'){
  console.log('Listing book description');
  let bookFound = book.foundBook(argv.title);
  if(bookFound){
    console.log('Found the book');
    book.logBook(bookFound);
  }else{
    console.log('No book found')
  }
}else{
  console.log('Command not recognized');
}
