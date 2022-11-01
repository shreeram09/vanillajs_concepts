/**
 * debouncing
 * achieved through setTimeout() 
 * to stop unnecessary/unwanted function calls
 * only must be called during no user calls
 * at specific timeintervals 
 */


var counter = 0
function show(){
    console.log(counter);
    counter++;
}
function myDebounce(fun,delay){
    let timer;
    return function(...args){
        if(timer) clearTimeout(timer);//clear timer if user has changed input inbetween
        setTimeout(()=>{
            fun();
        },delay);
    }
}
const betterfun = myDebounce(show,5000);
