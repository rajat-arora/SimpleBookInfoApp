const fs = require('fs');


//fetch books
//if exists then return as obj else return []
var fetchBooks = () =>{
  try{
    var allBooks = fs.readFileSync('books.json');
    return JSON.parse(allBooks);
  }catch(e){
    return[];
  }
}

var addBook = (title, desc) => {
  let books =fetchBooks();

  let book = {
    title,
    desc
  };

  var duplicateBook = books.filter((book) => (book.title === title));

  if(duplicateBook.length === 0){
    books.push(book);
    fs.writeFileSync('books.json', JSON.stringify(books));
    return book;
  }
};

var removeBook = (title) => {
   let allBooks = fetchBooks();
   let removedBook = allBooks.filter ((book)=> book.title !== title);
   fs.writeFileSync('books.json', JSON.stringify(removedBook));
   return removeBook.length !== allBooks.length;
};

var foundBook = (title) => {
  let books = fetchBooks();
  let foundBook = books.filter((book) => book.title === title);
  return foundBook[0];
}

var getAllBooks = () => {
  return fetchBooks();
};

var logBook = (book) => {
  console.log('---');
  console.log(`Title: ${book.title}`);
  console.log(`Body: ${book.desc}`);
};


module.exports ={
  addBook,
  logBook,
  getAllBooks,
  removeBook,
  foundBook
};
