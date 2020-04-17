//-----constructor -----//

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    
}


// -- get summary----

Book.prototype.getSummary =  function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;

};

//   get Age   ///

Book.prototype.getAge = function() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
};

// revise / change year //
Book.prototype.rewise = function(newYear) {
    this.year = newYear;
    this.revised = true;
};


// instatiate an object //


const book1 = new Book('BOOK One', 'John Doe', '2014');
const book2 = new Book('Book Two', 'John Doe', '2017');

// console.log(book1.title);
//console.log(book1);
// console.log(book1.getSummary());

// console.log(book1);
// console.log(book1.getAge());

console.log(book1);
book1.rewise('2018');
console.log(book1);