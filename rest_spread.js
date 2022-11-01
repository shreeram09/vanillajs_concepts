//ES6
//Rest and Spread operator

//rest operator example
//operator combines arguments as array 
//mostly used in function declaration as arguments
function add(a,b,c,...other){
    console.log(other[1]);
    return a+b+c;
}

const res = add(2,4,5,2,4,5,6);
console.log(res);

//spread operator 
//distructs the list/array of inputs 
//and assign linearly to function arguments
//mostly used in function calls as input parameters
const names=['nm1','nm2','nm3','nm4'];

function getNames(nm1,nm2,nm3){
    console.log(nm1,nm2,nm3);
}

getNames(names[0],names[1],names[3]);
getNames(...names);//with list
getNames(names);


//array distructuring 
//extracts respective values from object/arrya
//and assign to separate matching variables
const student = {
    name:'ajay',
    age:28,
    subject:['p','c','m','b']
}

const {age,subject} = student;//with destructaring
console.log(age,subject);

const {...rest} = student;//with rest operator
console.log(rest);

//with spread operator
const newStudent = {
    ...student,
    age:29
}
console.log(newStudent);