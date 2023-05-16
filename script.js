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
  addBookToDisplay()
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

function addBookToDisplay() {
  myLibrary.forEach(arrayBook => {
    // create the elements of each book
    const cardContainer = document.querySelector('#cardContainer')

    const book = document.createElement('div')

    const title = document.createElement('h2')
    const author = document.createElement('h2')
    const pages = document.createElement('h2')
    const read = document.createElement('h2')

    const bookBtn = document.createElement('div')

    const removeBtn = document.createElement('button')
    const statusBtn = document.createElement('button')

    // get the value of each property of the current book
    let info = Object.values(arrayBook)

    // assign the values to their corresponding element
    title.textContent = info[0]
    author.textContent = info[1]
    pages.textContent = info[2]
    read.textContent = info[3]

    removeBtn.textContent = 'Remove Book'
    statusBtn.textContent = 'Read'

    // clear the array that stores the current object
    info = []

    // add the created elements to the DOM

    cardContainer.appendChild(book)

    // individual book elements, inside the book div
    book.appendChild(title)
    book.appendChild(author)
    book.appendChild(pages)
    book.appendChild(read)

    cardContainer.appendChild(bookBtn)

    bookBtn.appendChild(removeBtn)
    bookBtn.appendChild(statusBtn)

    myLibrary.shift()
  })
}
