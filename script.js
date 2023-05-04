// Array que tiene todos los objetos, los "book"
const myLibrary = []

// Constructor que hace los obejtos propiamente dichos, los "book"
function Book (title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read

  this.info = function () {
    return title + 'by ' + author + pages + read
  }
}

const B01 = new Book('VillaLaConchaDeTuMadre', 'Yo', '69', 'yes')

// Esta funcion toma input del user
function getBookData () {
  const title = window.prompt('What is the title of the book?')
  const author = window.prompt('What is the title of the book?')
  const pages = window.prompt('Whats is te number of pages?')
  const read = window.prompt('Have you read the book?')

  const book = new Book(title, author, pages, read)
  return addBookToLibrary(book)
}

// Funcion para añadir un objeto nuevo al array
function addBookToLibrary (book) {
  return myLibrary.push(book)
}

addBookToLibrary(B01)
