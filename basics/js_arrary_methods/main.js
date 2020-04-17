const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
  

//   for(let i = 0; i < companies.length; i++) {
//       console.log(companies[i]);
//   }


  //forEach
  //filter
  //map
  //sort
  //reduce


  //-----forEach-----///

//   companies.forEach(function(company) {
//       console.log(company);
// });

  // it will print same result as for loop

  //-------filter----//

//   let canDrink = [];
//   for(let i = 0; i < ages.length; i++) {
//       if(ages[i] >= 21) {
//           canDrink.push(ages[i]);

//       }
//   }

// console.log(canDrink);

//---another way

// const canDrink = ages.filter(function(age) {

//       if(ages >= 21) {
//           return true;

//       }
//   });

//---- another way 

//   const canDrink = ages.filter(age => age >=21);
//   console.log(canDrink);

//---Filter retail companies

// const retailCompanies = companies.filter(function(company) {
//     if(company.category === 'Retail') {
//         return true;
//     }
// });
//console.log(retailCompanies);


//---another way--

// const retailCompanies = companies.filter(company => company.category === 'Retail');
// console.log(retailCompanies);

//---get 80s company

// const eightiesCompanies =  companies.filter(company => (company.start >= 1980 && company.start < 1990));
// console.log(eightiesCompanies);

//--getcompanies that lasted 10 years or more

// const lastedTenYears = companies.filter(company => (company.end - company.start > 10));
// console.log(lastedTenYears);


//-------map-----------------///


//craete array of company names 

// const companyNames = companies.map(function(company) {
//     return company.name;
// });
// console.log(companyNames);


// const testMap = companies.map(function(company) {
//     return `${company.name} [${company.start} - ${company.end}]`;
// });

// console.log(testMap);

// const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);

// const ageSquare = ages.map(age => Math.sqrt(age));
// console.log(ageSquare);


// const ageSquare = ages.map(age => Math.sqrt(age));
// const ageTimesTwo = ages.map(age => age * 2);
// console.log(ageTimesTwo);


// const ageMap = ages 
// .map(age => Math.sqrt(age))
// .map(age => age * 2);
// console.log(ageMap);


///----sort...////

// const sortedCompanies =  companies.sort(function(c1,c2) {
//     if(c1.start > c2.start) {
//         return 1;

//     } else {
//         return -1;
//     }
// });

// console.log(sortedCompanies);

// const sortedCompanies = companies.sort((a,b) => (a.start > b.start ? 1 : -1));

// // sort ages

// const sortAges = ages.sort((a,b) => b-a);
// console.log(sortAges);


///------reduce-----//


// let ageSum = 0;
// for(let i = 0; i < ages.length; i++) {
//     ageSum += ages[i];
// }
//  console.log(ageSum);


//--- other way  -----



// const ageSum = ages.reduce(function(total, age) {
//     return total + age ;
// }, 0);

// console.log(ageSum);

// const ageSum = ages.reduce((total, age) => total + age, 0);

// console.log(ageSum);

//--grt total years for all companies ---//

// const totalYears = companies.reduce(function(total, company) {
//     return total + (company.end - company.start);
// }, 0);
// console.log(totalYears);


// const totalYears = companies.reduce((total, company) =>   total + (company.end - company.start), 0);
// console.log(totalYears);


///---------combined -----///


const combined = ages 
.map(age => age * 2)
.filter(age => age >= 40)
.sort((a,b) => a-b)
.reduce((a,b) => a+b, 0);

console.log(combined);







