const posts = [
    { title:'Post One',body:'This is post one'},
    { title:'Post Two',body:'This is post two'}
];
 
    function getPosts() {
        setTimeout(()=> {
            let output ='';
            posts.forEach((post,index) => {
                output += `<li>${post.title}</li>`;

            });
            document.body.innerHTML = output;

        }, 1000);
    }

    function createPost(post, callback) { 
        setTimeout(() => {
            posts.push(post);
            callback();
        }, 2000);
    }

   

    createPost({ title:'Post Three',body: 'This is post three'}, getPosts);

// function add(a, b , callback){ 
//     document.write(`The sum of ${a} and ${b} is ${a+b}.` +"<br>"); 
//     callback(); 
//     } 
      
//     // disp() function is called just 
//     // after the ending of add() function  
//     // function disp(){ 
//     // document.write('This must be printed after addition'); 
//     // } 
      
//     // // Calling add() function 
//     // add(5,6,disp);     

// ///-----------------another method ----------------////

// // add() function is called with arguments a, b 
//    // and callback, callback will be executed just  
//    // after ending of add() function 
//    function add(a, b , callback){ 
//     document.write(`The sum of ${a} and ${b} is ${a+b}.` +"<br>"); 
//     callback(); 
//     } 
    
//     // add() function is called with arguments given below 
//     add(5,6,function disp(){ 
//     document.write('This must be printed after addition.'); 
//     }); 
      

    