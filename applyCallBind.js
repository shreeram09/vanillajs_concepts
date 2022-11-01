let user={
    name:'ajay',
    age:28,
    designation:'se',
    printDetails:function(){
        console.log(this.name,this.age,this.designation)
    }
}

user.printDetails();

let user2={
    name:'ayan',
    age:28,
    designation:'se'
}
//function borrowing = 'call' makes existing object's behaviour to point or make available to another object

// way 1
user.printDetails.call(user2);

let user3={
    name:'shiv',
    age:28,
    designation:'se'   
}

let printDetails=function(state,country){
    console.log(this.name,this.age,this.designation,state,country)
}

// way 2
//accepts multiple individual parameters
printDetails.call(user3,'delhi','india');

//accepts multiple arguments as arraylist
printDetails.apply(user3,['delhi','india']);
console.log(user3);

printDetails.call(user3,...['delhi','india']);

//bind, store copy of a function call for later use
let newFun = printDetails.bind(user3,'delhi','india');
newFun();