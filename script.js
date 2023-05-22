// Array que tiene todos los objetos, los "book"
const myLibrary = []

// Constructor que hace los obejtos propiamente dichos, los "book"
function Book (title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

// Functions for open and closing the form
// eslint-disable-next-line no-unused-vars
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
    read = 'Read'
  } else {
    read = 'Not Read'
  }

  // create a new book using the previus data
  const book = new Book(title.value, author.value, pages.value, read)
  addBookToLibrary(book)
  addBookToDisplay()
  alert('The book was successfully added')

  title.value = ''
  author.value = ''
  pages.value = ''
  read.values = ''

  addListeners()
  readStatus()
  closeForm()
})

// Funcion para añadir un objeto nuevo al array
function addBookToLibrary (book) {
  return myLibrary.push(book)
}

function addBookToDisplay () {
  myLibrary.forEach(arrayBook => {
    // create the elements of each book
    const cardContainer = document.querySelector('#cardContainer')

    const book = document.createElement('div')
    book.className = 'book'

    const title = document.createElement('h2')
    title.className = 'title'
    const author = document.createElement('h2')
    author.className = 'author'
    const pages = document.createElement('h2')
    pages.className = 'pages'
    const read = document.createElement('h2')
    read.className = 'readStatus'

    const bookBtn = document.createElement('div')
    bookBtn.className = 'bookBtns'

    const removeBookBtn = document.createElement('button')
    removeBookBtn.className = 'removeBookBtn'
    const statusBtn = document.createElement('button')
    statusBtn.className = 'changeReadStatusBtn'

    // get the value of each property of the current book
    let info = Object.values(arrayBook)

    // assign the values to their corresponding element
    title.textContent = info[0]
    author.textContent = info[1]
    pages.textContent = info[2]
    read.textContent = info[3]

    removeBookBtn.textContent = 'Remove Book'

    if (info[3] === 'Read') {
      statusBtn.textContent = 'Read'
      statusBtn.style.backgroundColor = 'green'
    } else {
      statusBtn.textContent = 'Not read'
      statusBtn.style.backgroundColor = 'red'
    }

    // clear the array that stores the current object
    info = []

    // add the created elements to the DOM

    cardContainer.appendChild(book)

    // individual book elements, inside the book div
    book.appendChild(title)
    book.appendChild(author)
    book.appendChild(pages)
    book.appendChild(read)

    book.appendChild(bookBtn)

    bookBtn.appendChild(removeBookBtn)
    bookBtn.appendChild(statusBtn)

    myLibrary.shift()
  })
}

// remove book function

// array to track all the remove buttons
let removeBtns

function addListeners () {
  removeBtns = [...document.getElementsByClassName('removeBookBtn')]
  removeBtns.forEach(btn => {
    btn.addEventListener('click', function removeBook () {
      btn.parentElement.parentElement.remove()
    })
  })
}

// Function to change the read status
let statusBtns

function readStatus () {
  statusBtns = [...document.getElementsByClassName('changeReadStatusBtn')]
  statusBtns.forEach(btn => {
    btn.addEventListener('click', function toggleStatus () {
      if (btn.textContent === 'Read') {
        btn.textContent = 'Not read'
        btn.style.backgroundColor = 'red'
      } else {
        btn.textContent = 'Read'
        btn.style.backgroundColor = 'green'
      }
    })
  })
}

addListeners()
readStatus()
