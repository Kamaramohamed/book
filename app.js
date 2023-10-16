// UI /UX
const Books = document.querySelector(".showBooks");

const myLibrary = [];

function Book(title, auteur, paginas, gelezen) {
  this.title = title;
  this.auteur = auteur;
  this.paginas = paginas;
  this.gelezen = gelezen;
}

/* const addBookToLibrary = () => {
    
} */

const Book1 = new Book("Harry Potter", "mohamed", 300, "heb ik gelezen");
const Book2 = new Book("Fire", "Kamara", 500, "heb ik niet gelezen");
const Book3 = new Book("Water", "Mowdian", 1400, "heb ik niet gelezen");

myLibrary.push(Book1, Book2, Book3);

const showBooks = (array) => {
    for (let i = 0; i < array.length; i++){
        let div = `<div>
        <h2>${array[i].title}</h2>
        <p> AUTEUR: ${ array[i].auteur}</p>
        <p> AANTAL PAGINAS: ${array[i].paginas}</p>
        <p> GELEZEN? : ${array[i].gelezen}</p>
        </div>`

        Books.innerHTML += div;
      
    }
};

showBooks(myLibrary);
