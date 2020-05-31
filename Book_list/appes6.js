class Book{
    constructor(tittle, author, isbn){
        this.tittle = tittle;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI{
    addBookToList(book){
        const list = document.getElementById('book-list');
        //Create tr element
        const row = document.createElement('tr');
        //Insret cols
        row.innerHTML = `
        <td>${book.tittle}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
        `;

        list.appendChild(row);
    }

    showAlert(message, className){
    //Create div
    const div = document.createElement('div');

    //Add Class
    div.className = `alert ${className}`;
    //Add text
    div.appendChild(document.createTextNode(message)); 
    //Get parent
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    //Insert alert
    container.insertBefore(div, form);

    //Time out after 3 sec
    setTimeout(function(){
            document.querySelector('.alert').remove();
    },3000);
    }

    deleteBook(target){
        if(target.className === 'delete'){
            target.parentElement.parentElement.remove();
        }
    }

    clearFields(){
        document.getElementById('tittle').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
}

// Local Storage Class
class Store{
    static getBooks(){
        let books;
        if(localStorage.getItem('books')=== null){
            books = [];
        }else{
            books = JSON.parse(localStorage.getItem('books'));
        }

        return books;
    }

    static displayBooks(){
        const books = Store.getBooks();

        books.forEach(function(book){
            const ui = new UI;

            //Add book to UI
            ui.addBookToList(book);
        });
    }

    static addBook(){
        const books = Store.getBooks();

        books.push(book);

        localStorage.setItem('books',JSON.stringify(books));
    }
    static removeBook(){

    }
}

//DOM Load Event
document.addEventListener('DOMContentLoaded', Store.displayBooks);

//Event Listeners
document.getElementById('book-form').addEventListener('submit', function(e){
    //Get form valus
    const tittle = document.getElementById('tittle').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value;

    //Instantiate book
    const book = new Book(tittle, author, isbn);

    //Instantiate UI
    const ui = new UI();

    //Validate
    if(tittle ===''||author === '' || isbn === ""){
        //Error alert
        ui.showAlert('Please fill in all fields', 'error' );

    }else{
    //Add book to list
    ui.addBookToList(book);

    //Add to LS
    Store.addBook(book);

    //Show success
    ui.showAlert('Book Added!','success');
    //CLEAR fields
    ui.clearFields();
    }



    e.preventDefault();
});

//Event Listener for delete
document.getElementById('book-list').addEventListener('click',function(e){

    const ui = new UI();

    ui.deleteBook(e.target);

    ui.showAlert('Book Removed!', 'success');

    e.preventDefault();
})