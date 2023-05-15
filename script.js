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

const bookForm = document.getElementById('test')

bookForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const title = document.getElementsByName('title')
  const author = document.getElementsByName('author')
  const pages = document.getElementsByName('pages')
  const read = document.getElementsByName('read')

  if (title.values === '' || author.values === '' || pages.values === '' || read.values === '') {
    alert('Please complete all the fields')
  } else {
    const book = new Book(title, author[0], pages[0], read)

    addBookToLibrary(book)

    alert('The book was successfully added')
  }
  title.values = ''
  author.values = ''
  pages.values = ''
  read.values = ''
})

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
