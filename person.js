
// const person = {
//     name: 'Maya Mishra',
//     age: 30
// };

// module.exports = person;

//-------Module Wrapper Function-----//
// (function (exports, require, module, _filename, _dirname) {

//})

//console.log(__dirname, __filename);


class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    greeting() {
        console.log(`My name is ${this.name} and i m ${this.age}`);
        
    }
}

module.exports = Person;