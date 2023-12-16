document.addEventListener("DOMContentLoaded", function () {
    const plusBtn = document.querySelector(".plusBtn");
    const formDiv = document.querySelector(".form");

    plusBtn.addEventListener("click", function () {
        formDiv.classList.toggle('hidden');
        // addBookToLibrary()
    });
});




function Book(title, author, status) {
    this.title = title;
    this.author = author;
    this.status = status;

    // this.info = function () {
    //     console.log(`${this.title} by ${this.author} has ${this.pages} book status${this.status}`)
    // }
};
const BookArr = []






function addBookToLibrary() {

    const title = document.getElementById('bTitle').value;
    const author = document.getElementById('bAuthor').value;
    const status = document.getElementById('bStatus').value;

    const newBook = new Book(title, author, status)
    BookArr.push(newBook);

    displayLibrary()
}


function displayLibrary() {
    // For demonstration purposes, log the library to the console
    console.log(BookArr);
    const bookDisplay = document.querySelector(".books");

    // Clear previous content
    bookDisplay.innerHTML = "";

    // Loop through the BookArr and create HTML elements for each book
    BookArr.forEach((book, index) => {
        const bookElement = document.createElement('div');
        bookElement.classList.add('book');
        bookElement.innerHTML = `
            <h3>Title: ${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Status: ${book.status}</p>
        `;

        // You can add additional styling or functionality to each book element here

        // Append the book element to the container
        bookDisplay.appendChild(bookElement);
    });
}


// const bookDisplay = document.querySelector(".books")

// const displayButton = document.querySelector(".displayBooks")
// displayButton.addEventListener("click", function () {
//     console.log("clicked")
//     BookArr.forEach(element, index, array => {
//         console.log(element.x); // 100, 200, 300
//         console.log(index); // 0, 1, 2
//         console.log(array);
//     })


// })