//Book Constructor
function Book(tittle, author, isbn){
    this.tittle = tittle;
    this.author = author;
    this.isbn = isbn;
}


//UI Constructor
function UI(){

    //Add Book to list
    UI.prototype.addBookToList = function(book){
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
}

//Show Alert
UI.prototype.showAlert = function(message, className){
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

//Delete Book
UI.prototype.deleteBook = function(target){
    if(target.className === 'delete'){
        target.parentElement.parentElement.remove();
    }
}

//Clear fields
UI.prototype.clearFields = function(){
    document.getElementById('tittle').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

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