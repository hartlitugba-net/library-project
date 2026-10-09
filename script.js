const bookContainer = document.getElementById("book-container");//verilerin ekranda gösterileceği alan

const myLibrary = [];


class Book
{
    constructor(title, author, pages, read)
    {
         this.id = crypto.randomUUID();

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
// Kitabın okunma durumunu değiştirir
toggleRead()
{
    this.read = !this.read;
}
    }
   
function addBookToLibrary(title, author, pages, read)
{
    const book = new Book(title, author, pages, read);

    myLibrary.push(book); // kitap dizisine eklenir
}

//kitap listesini html e yerleştirme
function displayBooks() // kitap listesini ekranda gösterir
{
    bookContainer.innerHTML = "";// önceki kitapları temizler


    myLibrary.forEach(book => {


        const card = document.createElement("div");//yeni bir div oluştur ve bunu card isimli değişkende sakla diyoruz

        card.dataset.id = book.id; //"Bu div'in HTML data-id bilgisini, mevcut kitabın id'si yap."


        const title = document.createElement("h2");

        title.textContent = book.title; ////kitap başlığını h2 elementinin içine yazdırır



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

        card.appendChild(title);// "Bu h2 elementini div'in içine koy."

        card.appendChild(author);

        card.appendChild(pages);

        card.appendChild(status);

        card.appendChild(removeBtn);

        card.appendChild(toggleReadBtn);



        bookContainer.appendChild(card); //"Bu oluşturduğum kartı HTML içindeki book-container'ın içine koy."


    });

}
//kullanıcı etkileşimi
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


newBookBtn.addEventListener("click", () => { //addEventListener ile butonu dinlemeye başla yani butona tıklanıldığı zaman
//click yerine JavaScript'in tanıdığı olay (event) isimler de yazılabilir.

    dialog.showModal();


});


bookForm.addEventListener("submit", (event)=>{


    event.preventDefault();
const title = document.getElementById("title");
    const author = document.getElementById("author");
    const pages = document.getElementById("pages");

    const titleError = document.getElementById("title-error");
    const authorError = document.getElementById("author-error");
    const pagesError = document.getElementById("pages-error");

    // Önce eski hata mesajlarını temizle
    titleError.textContent = "";
    authorError.textContent = "";
    pagesError.textContent = "";

    let isValid = true;

    // Title kontrolü
    if (title.value.trim() === "") {
        titleError.textContent = "Kitap adı doldurulmalıdır!";
        isValid = false;
    }

    // Author kontrolü
    if (author.value.trim() === "") {
        authorError.textContent = "Yazar adı doldurulmalıdır!";
        isValid = false;
    }

    // Pages kontrolü
    if (pages.value.trim() === "") {
        pagesError.textContent = "Sayfa sayısı doldurulmalıdır!";
        isValid = false;
    }

    // Herhangi bir alan hatalıysa kitap ekleme
    if (!isValid) {
        return;
    }

    const read = document.getElementById("read").checked;

    addBookToLibrary(
        title.value,
        author.value,
        pages.value,
        read
    );

    displayBooks();

    dialog.close();

    bookForm.reset();


});