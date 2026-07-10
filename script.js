const bookContainer = document.getElementById("book-container");

const myLibrary = [];


function Book(title, author, pages, read)
{
    this.id = crypto.randomUUID();

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


// Kitabın okunma durumunu değiştirir
Book.prototype.toggleRead = function()
{
    this.read = !this.read;
}



function addBookToLibrary(title, author, pages, read)
{
    const book = new Book(title, author, pages, read);

    myLibrary.push(book);
}



function displayBooks()
{
    bookContainer.innerHTML = "";


    myLibrary.forEach(book => {


        const card = document.createElement("div");

        card.dataset.id = book.id;


        const title = document.createElement("h2");

        title.textContent = book.title;



        const author = document.createElement("p");

        author.textContent = `Author: ${book.author}`;



        const pages = document.createElement("p");

        pages.textContent = `Pages: ${book.pages}`;



        const status = document.createElement("p");


        if(book.read)
        {
            status.textContent = "Read";
        }
        else
        {
            status.textContent = "Not read yet";
        }



        // Remove butonu

        const removeBtn = document.createElement("button");

        removeBtn.textContent = "Remove";



        removeBtn.addEventListener("click", () => {

            removeBook(book.id);

        });



        // Toggle Read butonu

        const toggleReadBtn = document.createElement("button");

        toggleReadBtn.textContent = "Toggle Read";



        toggleReadBtn.addEventListener("click", () => {

            book.toggleRead();

            displayBooks();

        });



        // Kartın içine ekleme

        card.appendChild(title);

        card.appendChild(author);

        card.appendChild(pages);

        card.appendChild(status);

        card.appendChild(removeBtn);

        card.appendChild(toggleReadBtn);



        bookContainer.appendChild(card);


    });

}





function removeBook(id)
{

    const index = myLibrary.findIndex(book => book.id === id);


    if(index !== -1)
    {
        myLibrary.splice(index,1);
    }


    displayBooks();

}





displayBooks();





const newBookBtn = document.getElementById("new-book-btn");


const dialog = document.getElementById("book-dialog");


const bookForm = document.getElementById("book-form");





newBookBtn.addEventListener("click", () => {


    dialog.showModal();


});






bookForm.addEventListener("submit", (event)=>{


    event.preventDefault();



    const title = document.getElementById("title").value;


    const author = document.getElementById("author").value;


    const pages = document.getElementById("pages").value;


    const read = document.getElementById("read").checked;



    addBookToLibrary(

        title,

        author,

        pages,

        read

    );



    displayBooks();



    dialog.close();


    bookForm.reset();


});