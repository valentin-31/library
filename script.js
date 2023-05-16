// Array que tiene todos los objetos, los "book"
const myLibrary = []

// Constructor que hace los obejtos propiamente dichos, los "book"
function Book (title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read

  // this.info = function () {
  //   return title + ' by ' + author + ' has ' + pages + ' pages. ' + 'It has been readed? ' + read
  // }
}

const B01 = new Book('VillaLaConchaDeTuMadre', 'Yo', '69', 'yes')

// Functions for open and closing the form
function openForm () {
  document.getElementById('bookFormContainer').style.display = 'block'
}

function closeForm () {
  document.getElementById('bookFormContainer').style.display = 'none'
}

// The form itself
const bookForm = document.getElementById('bookFormContainer')

// Check when the form is submitted
bookForm.addEventListener('submit', (e) => {
  e.preventDefault()

  // get the data from the submitted form
  const title = document.getElementById('title')
  const author = document.getElementById('author')
  const pages = document.getElementById('pages')
  const yesOption = document.getElementById('yesOption')
  let read

  // check if the book was read
  if (yesOption.checked === true) {
    read = 'Yes'
  } else {
    read = 'No'
  }

  // create a new book using the previus data
  const book = new Book(title.value, author.value, pages.value, read)
  addBookToLibrary(book)
  alert('The book was successfully added')

  title.value = ''
  author.value = ''
  pages.value = ''
  read.values = ''

  closeForm()
})

// Funcion para añadir un objeto nuevo al array
function addBookToLibrary (book) {
  return myLibrary.push(book)
}

addBookToLibrary(B01)

// Function that loop through the array and displays each book
const bookInfo = []

function getBookInfo () {
  myLibrary.forEach(book => {
    bookInfo.push(book.title)
    bookInfo.push(book.author)
    bookInfo.push(book.pages)
    bookInfo.push(book.read)

    return bookInfo
  })
}

function getObjValue() {
  myLibrary.forEach(aaaa => {
    let cardContainer = document.querySelector('#cardContainer')

    let book = document.createElement('div')

    let title = document.createElement('h2')
    let author = document.createElement('h2')
    let pages = document.createElement('h2')
    let read = document.createElement('h2')

    let bookBtn = document.createElement('div')

    let removeBtn = document.createElement('button')
    let statusBtn = document.createElement('button')

    let info = Object.values(aaaa)

    title.textContent = info[0]
    author.textContent = info[1]
    pages.textContent = info[2]
    read.textContent = info[3]

    removeBtn.textContent = 'Remove Book'
    statusBtn.textContent = 'Read'

    info = []

    // adit tho the DOM
    cardContainer.appendChild(book)

    book.appendChild(title)
    book.appendChild(author)
    book.appendChild(pages)
    book.appendChild(read)

    cardContainer.appendChild(bookBtn)

    bookBtn.appendChild(removeBtn)
    bookBtn.appendChild(statusBtn)
  })
}
// I need a function that:
// Loops thought the array => getBookInfo()
// Gest´s each objects properties => getBookInfo() | Object.values() 
// Each obj has 4 properties, so if i add 3 obj the bookInfo length will be 12
// and if i do 12/3 = 3 obj
