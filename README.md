# SimpleBookInfoApp
A simple json based book info app, using node.js


## Commands
### Start:
node app.js "commands" "options"

### Commands:
  add     Add a new book
  
  list    List all books
  
  read    Read a book's description
  
  remove  Remove a book

### Help:
  --help  Show help
  
## Options

### Add
-Adds new book

node app.js add --title="" --description=""

### List
-Lists all books

node app.js list

### Read
-Read a book's description

node app.js read --title=""

### Remove
-Remove a book

node app.js remove --title=""

## Shortcuts
--title="" -> --t=""

--description="" -> --desc=""
