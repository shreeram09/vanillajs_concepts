/*
    memoization is an optimization technique that can be used to reduce
    time consuming calculations by saving previous input to something called cached
    and returning the result from it

    concepts used: closure,rest operator
*/
let sum = 0;
const calc = (n)=>{
    for(let i = 0;i<=n;i++)
        sum+i;
    return sum;
}
//closure function
const memoize=(fun)=>{//accepts a callback function
    let cache={};
    return function(...args){//append to previous input
        let n = args[0];
        if(n in cache){
            console.log('cache');
            return cache[n];
        }
        console.log('first time');
        cache[n]=fun(n);
        return cache[n];
    }
}

const efficient = memoize(calc);//closure function call and return

console.time();
console.log(efficient(5));
console.timeEnd();

console.time();
console.log(efficient(5));
console.timeEnd();