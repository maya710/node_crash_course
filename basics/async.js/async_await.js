// const getData = async() => { 
//     var data = "Hello World"; 
//     return data; 
// } 
  
// getData().then(data => console.log(data)); 

////////////////////--------------another way -----------------///////////

const getdata = async() => { 
    var y = await "Hello World"; 
    console.log(y); 
} 
  
console.log(1); 
getdata(); 
console.log(2); 