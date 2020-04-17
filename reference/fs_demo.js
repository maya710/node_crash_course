const fs = require('fs');
const path = require('path');

// ///create folder
// // fs.mkdir(path.join(__dirname, '/test'), {}, err => {
// //     if (err) throw err;
// //     console.log('Folder Created.....');

// // });

//---------create and write to file
// fs.writeFile(
//     path.join(__dirname, '/test', 'hello.txt'),
//     'Hello World ',
//      err => {
//     if (err) throw err;
//     console.log('File written to .....');
    
//     // -------File append 
//     fs.appendFile(
//         path.join(__dirname, '/test', 'hello.txt'),
//         'I love nodejs',
//          err => {
//         if (err) throw err;
//         console.log('File written to .....');
//          }
//     );     

// }
// );

// ----Read File --

// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data)  => {
//         if (err) throw err;
//         console.log(data);
    
//     });
    

//---file ranmae---

fs.rename(
    path.join(__dirname, '/test', 'hello.txt'),
    path.join(__dirname, '/test', 'helloworls.txt'),
     err => {
    if (err) throw err;
    console.log('File ranamed');

}
);





