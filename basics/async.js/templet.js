// console.log('Some text that I want \non two lines!'); 
  
// // With template literal   -----(without using \n )
// console.log(`Some text that I want 
// on two lines!`); 


//------------other examples((multiline stringd )).------------.//

// let principal = 1000; 
// let noofyears = 1; 
// let rateofinterest = 7; 
  
// let SI = `Simple Interest is ${(principal * 
//             noofyears * rateofinterest)/100}`; 
// alert("Simple Interest is" + SI); 

////-----------tagged literals----//


// function TaggedLiteralEg(strings) { 
//     document.write(strings); 
// } 
  
// TaggedLiteralEg `GeeksforGeeks`;



//----------------------------------------------------/////

// function TaggedLiteralEg(strings, value, value2) { 
//     document.write(strings); 
//     document.write("<br>"+value2+"    "+value); 
      
// } 
  
// let text = 'GeeksforGeeks'; 
// TaggedLiteralEg`test ${text} ${2+3}`;   




////----------------raw string---------------------///

// var s=String.raw`Welcome to GeeksforGeeks Value of expression is ${2+3}`; 
// document.write(s); 


/////////--------nested templet----------------------------//////////////

function maximum(x, y, z) { 
    var c = `value ${ (y>x && y>z) ? 'y is greater' : 
    `${x>z ? 'x is greater' : 'z is greater'}` }`; 
    return (c); 
    } 
    document.write(maximum(5, 11, 15)+"<br>"); 
    document.write(maximum(15, 11, 3)+"<br>"); 
    document.write(maximum(11, 33, 2)+"<br>"); 








