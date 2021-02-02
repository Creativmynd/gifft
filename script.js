// Book Constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI constructor
function UI() {}

UI.prototype.addBookToList = function(book) {
    const list = document.getElementById('#idName');

    //create element
    const row = document.createElement('tr');
    // insert cols
    row.innerHTML = `
        <td> ${book.title} </td>
        <td> ${book.author} </td>
        <td> ${book.isbn} </td>
        <td><a href = '#' class = 'delete'> X </a> </td>
    `;
    list.appendChild('row')
}

// clear fields
UI.prototype.clearFields = function() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}
// Event listener
document.getElementById('#book-form').addEventListener('submit', function(e) {
    const title = document.getElementsByClassName('.cName').value,
          author = document.getElementsByClassName('.cName').value,
          isbn = document.getElementById('#idName').value;
          
    //instantiate Book
    const book = new Book(title, author, isbn);

    //instantiate ui
    const ui = new UI;

    ui.addBookToList(book);

    e.preventDefault;
})