//libraries

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

//yargs settings.
const argv = yargs.argv;
var command = argv._[0]


if (command == 'add'){
  console.log('Adding a book');
}else if (command == 'list'){
  console.log('Listing a book');
}else if (command == 'remove'){
  console.log('Removing a book');
}else if (command == 'description'){
  console.log('Listing book description');
}
