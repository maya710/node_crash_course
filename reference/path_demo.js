const path = require('path');

//Base file name
// console.log(__filename);
console.log(path.basename(__filename));

//Directory name
console.log(path.dirname(__filename));

// File Extension
console.log(path.extname(__filename));

// Create path object 
// console.log(path.parse(__filename));
console.log(path.parse(__filename).base);

//concatenate path'
console.log(path.join(__dirname, 'test', 'hello.html'));

