// Array que tiene todos los objetos, los "book"
const myLibrary = []

// Constructor que hace los obejtos propiamente dichos, los "book"
function Book (title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read

  this.info = function () {
    return title + ' by ' + author + ' has ' + pages + ' pages. ' + 'It has been readed? ' + read
  }
}

const B01 = new Book('VillaLaConchaDeTuMadre', 'Yo', '69', 'yes')

// This function opens a form to add a book
function openForm () {
  document.getElementById('bookForm').style.display = 'block'
}

function closeForm () {
  document.getElementById('bookForm').style.display = 'none'
}

// Esta funcion toma input del user
function getBookData () {
  const title = window.prompt('What is the title of the book?')
  const author = window.prompt('Who is the author of the book?')
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

// Function that loop through the array and displays each book

function displayBook () {
  myLibrary.forEach(book => {
    return alert(book.info())
  })
}
