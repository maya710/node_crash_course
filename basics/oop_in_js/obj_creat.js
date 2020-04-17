// object of protos 
const bookProtos = {
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    },
    getAge: function() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old `;
    }
};

//create object 
//  const book1 = Object.create(bookProtos);
//  book1.title = 'Book One';
//  book1.author = 'John Doe';
//  book1.year = '2013';

const book1 = Object.create(bookProtos, {
    title: { value: 'Book One'},
    author: { value: 'John Doe'},
    year: { value: '2014'}
});

console.log(book1);