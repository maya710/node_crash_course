
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

    function createPost(post) { 
        return new Promise((resolve, reject) => {
            
        setTimeout(() => {
            posts.push(post);

            const error = true;
            if(!error) {
                resolve();
            } else {
                reject('Error: Something went wrong');
            }
        }, 2000);

        });

    }

     // // createPost({ title: 'Post Three', body:'This is post three'})
     // // .then(getPosts)
     // // .catch(err => console.log(err));


     //  Async /Await 

     // async function init() {
     //    await createPost({ title: 'Post Three', body:'This is post three'});
     //    getPosts();

     // }

     // init();

     //  Async /Await  Fetch

     async function fetchUsers() {
         const res = await fetch
         ('https://jsonplaceholder.typicode.com/users');
         const data = await res.json();
         console.log(data);

        }

  fetchUsers();

// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) =>
// setTimeout(resolve, 200, 'Goodbye'));
// const promise4 = fetch
// ('https://jsonplaceholder.typicode.com/users').then(res => 
//  res.json()
// );

// Promise.all([promise1,promise2,promise3,promise4]).then(values => console.log(values));
//-----------------      promises accepted --------------    ////

// var promise = new Promise(function(resolve, reject) { 
//     const x = "geeksforgeeks"; 
//     const y = "geeksforgeeks"
//     if(x === y) { 
//       resolve(); 
//     } else { 
//       reject(); 
//     } 
//   }); 
    
//   promise. 
//       then(function () { 
//           console.log('Success, You are a GEEK'); 
//       }). 
//       catch(function () { 
//           console.log('Some error has occured'); 
//       }); 



//----------------///promises rejected----------


// var promise = new Promise(function(resolve, reject) { 
//     reject('Promise Rejected') 
// }) 
  
// promise 
//     .then(function(successMessage) { 
//         console.log(successMessage); 
//     }, function(errorMessage) { 
//        //error handler function is invoked 
//         console.log(errorMessage); 
//     }) 