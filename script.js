const cardHolder = document.querySelector(".cards");
const button = document.querySelector("#button");
const addButton = document.querySelector("#addBook");
const dialog = document.querySelector("#dialog");
const closeButton = document.querySelector("#close");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");

let myLibrary = [];

function Book(){
    this.title;
    this.author;
    this.id;
    this.pages;
    this.status;
}
function addBook(title, author, pages){
    const book = new Book();
    book.title = title;
    book.author = author;
    book.id = createID();
    book.pages = pages;
    book.status = "Yet to be read";

    myLibrary.push(book);
}

function createDiv(){
    const card = document.createElement("div");
    return card;
}
function createH3(){
    const heading = document.createElement("h3");
    return heading;
}
function createID(){
    const num = crypto.randomUUID();
    return num;
}
function createParagraph(){
    const paragraph = document.createElement("p");
    return paragraph;
}
function createButton(){
    const btn = document.createElement("button");
    return btn;
}
function addCards(){
    for (const book of myLibrary){
        const div = createDiv();
        const head = createH3();
        const author = createParagraph();
        const bookID = createParagraph();
        const pages = createParagraph();
        const status = createParagraph();
        const btn = createButton();
        const statusBtn = createButton();

        head.textContent = book.title;
        author.textContent = `Written by ${book.author}`;
        bookID.textContent = `Book id: ${book.id}`;
        pages.textContent = `Complete with ${book.pages} pages`;
        status.textContent = `Status: ${book.status}`;
        btn.textContent = "delete";
        statusBtn.textContent = "Update Status";

        div.appendChild(head);
        div.appendChild(author);
        div.appendChild(bookID);
        div.appendChild(pages);
        div.appendChild(status);
        div.appendChild(statusBtn);
        div.appendChild(btn);

        btn.addEventListener("click", ()=> cardHolder.removeChild(div));
        statusBtn.addEventListener("click", function(){
            if (book.status === "Yet to be read"){
                status.textContent = `Status: Already Read`;
                book.status = "read";
            }else {
                status.textContent = `Status: Yet To Be Read`;
                book.status = "Yet to be read";
            }
        })

        cardHolder.appendChild(div);
    }
}
button.addEventListener("click", addCards);

addButton.addEventListener("click", (e)=> dialog.showModal());

closeButton.addEventListener("click", (e)=> {
    const titleText = title.value;
    const authorText = author.value;
    const pagesText = pages.value;

    title.value = "";
    author.value = "";
    pages.value = "";

    addBook(titleText, authorText, pagesText);
    dialog.close()
});