// Array que tiene todos los objetos, los "book"
let myLibrary = []

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

// Function to generate a random color
function getRandomNumber () {
  return Math.floor(Math.random() * 20) + 1
}

// Function to create a color for the book
function getRandomColor () {
  const number = getRandomNumber()
  let color

  if (number >= 1 && number <= 5) {
    color = 'linear-gradient(120deg, #BC1616 50%, #E52020 50%)'
  } else if (number >= 6 && number <= 10) {
    color = 'linear-gradient(120deg, #758D11 50%, #5E730D 50%)'
  } else if (number >= 11 && number <= 15) {
    color = 'linear-gradient(120deg, #315a8e 50%, #284e7a 50%)'
  } else {
    color = 'linear-gradient(120deg, #A99B06 50%, #887E07 50%)'
  }

  return color
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

  // create a new book using the previous data, NEEDS A NAMING VALUE
  const book = new Book(title.value, author.value, pages.value, read)
  addBookToLibrary(book)
  addBookToDisplay()
  alert('The book was successfully added')

  // Clear the form inputs
  document.getElementById('title').value = ''
  document.getElementById('author').value = ''
  document.getElementById('pages').value = ''
  document.getElementById('yesOption').checked = false

  closeForm()
})

// Function for adding the book obj to the myLibrary array
function addBookToLibrary (book) {
  return myLibrary.push(book)
}

// Function for displaying the previously added elements
function addBookToDisplay () {
  // create the elements of each book
  const cardContainer = document.querySelector('#cardContainer')

  const bookElements = myLibrary.map(arrayBook => {
    const existingBook = document.getElementById(arrayBook.title)
    if (existingBook) {
      return existingBook
    }

    const book = document.createElement('div')
    book.className = 'book'
    book.id = arrayBook.title

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

    // The slider button
    const switchBtn = document.createElement('label')
    switchBtn.className = 'switch'
    const statusBtn = document.createElement('input')
    statusBtn.type = 'checkbox'
    const slider = document.createElement('span')
    slider.className = 'slider round'

    // Change the status of the book

    statusBtn.addEventListener('click', function () {
      const index = myLibrary.indexOf(arrayBook)
      const book = myLibrary[index]

      // Toggle the read status
      if (book.read === 'Read') {
        book.read = 'Not Read'
        statusBtn.style.backgroundColor = 'red'
        statusBtn.checked = false
        read.textContent = 'Not read'
      } else {
        book.read = 'Read'
        statusBtn.style.backgroundColor = 'green'
        statusBtn.checked = true
        read.textContent = 'Read'
      }

      // Update the display
      addBookToDisplay()
    })

    // get the value of each property of the current book
    let info = Object.values(arrayBook)

    // assign the values to their corresponding element
    title.textContent = info[0]
    author.textContent = info[1]
    pages.textContent = info[2]
    read.textContent = info[3]

    removeBookBtn.textContent = 'Remove Book'

    statusBtn.textContent = 'Read'
    if (info[3] === 'Read') {
      statusBtn.checked = true
      statusBtn.style.backgroundColor = 'green'
    } else {
      statusBtn.textContent = 'Not read'
      statusBtn.checked = false
      statusBtn.style.backgroundColor = 'red'
    }

    const color = getRandomColor()
    book.style.background = color

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
    bookBtn.appendChild(switchBtn)
    switchBtn.appendChild(statusBtn)
    switchBtn.appendChild(slider)

    return book
  })

  bookElements.forEach(book => {
    cardContainer.appendChild(book)
  })

  addRemoveListeners()
}

// Function for removing a book
let removeBtns

function addRemoveListeners () {
  removeBtns = [...document.getElementsByClassName('removeBookBtn')]
  removeBtns.forEach(btn => {
    btn.addEventListener('click', function removeBook () {
      // get the id of the book
      const bookId = btn.parentElement.parentElement.id
      // remove that element from the library
      myLibrary = myLibrary.filter(book => book.title !== bookId)
      // remove the book from the dom
      btn.parentElement.parentElement.remove()
    })
  })
}

// Test books to display in the page
const testBook1 = new Book('Test1', 'Me', '65', 'Read')
const testBook2 = new Book('Test2', 'also Me', '61', 'Not read')
const testBook3 = new Book('Test3', 'Not me', '126', 'Not read')

addBookToLibrary(testBook1)
addBookToLibrary(testBook2)
addBookToLibrary(testBook3)

addBookToDisplay(testBook1)
addBookToDisplay(testBook2)
addBookToDisplay(testBook3)
