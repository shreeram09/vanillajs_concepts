/**
 * throttling
 * unwanted request/actions where only single action is mandatory
 * like on single button click data is saved to database
 * but due to delay with saving data to database user
 * clicks save button multiple times thinking that action is not reached
 * causing redundant data in database
 */

//mythrottle will accept callback and delay
//anonymous function is called inside
//which disables the button
//settimeout will hold the callback function and calls it once delay reached
//this callback will enable the button and prints log
const mythrottle=(fn,delay)=>{
    return function(...args){
        document.getElementById('btn').disabled=true
        setTimeout(()=>fn(),delay)
    }
};

//a newFun() will be called on button click
//which intern calls mythrottle function with callback and delay
const newFun = mythrottle(()=>{
    document.getElementById('btn').disabled=false
    console.log('user clicked!..')
},5000);