/**
 * Map Redue and Filter functions in Javascript
 * Higher Order Functions
 */

//mostly used with array data structure

const companies = [
  { name: "Google", category: "product", start: 1981, end: 2004 },
  { name: "Amazon", category: "product", start: 1992, end: 2008 },
  { name: "Paytm", category: "product", start: 1999, end: 2007 },
  { name: "coforge", category: "service", start: 1989, end: 2010 },
  { name: "Mindtree", category: "service", start: 1989, end: 2010 },
];

const ages = [23, 45, 63, 2, 45, 76, 43, 21, 43, 8, 87];

//for loop
//initial statement,
//conditional check on each iteration,
//code block execution
//increment/decrement statement at end of each iteration
//hence slow
for (let i = 0; i <= companies.length; i++) {
  console.log(companies[i]);
}

//forEach
//execution of callback on each element
//fast compare to traditional loop
//control of iteration given to language rather than user itself
companies.forEach((company, index) => console.log(company));

//filter
var filteredData = ages.filter((a, i) => a >= 20);
console.log(filteredData);

filteredData = companies.filter((a, i) => a.category === "service");
console.log(filteredData);

//map
//backtik '`' used to make string literal with placeholders ${}
const kval = companies.map((k, i) => `${k.name} ${k.category}`);
console.log(kval);

//sort
const sorted = companies.sort((c1, c2) => (c1.end > c2.end ? 1 : -1));
console.log(sorted);

//reduce
//returns accumulated result like total, sum, average,etc
const total = ages.reduce((t,n)=>t+n,0)
console.log(total)