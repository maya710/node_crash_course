//-----constructor -----//

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.getSummary =  function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    };
}

// instatiate an object //


const book1 = new Book('BOOK One', 'John Doe', '2014');
const book2 = new Book('Book Two', 'John Doe', '2017');

// console.log(book1.title);
//console.log(book1);
// console.log(book1.getSummary());

console.log(book1);