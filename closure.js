var sum  = function(a){
    let c = 4;
    return function(b){
        return a+b+c;//a & c are in lexical scope ie values are retained on frequent calls
    }
}
var store= sum(2);
console.log(store(5));
console.log(store(5));

var sum2  = function(a,b,c){
    return {
       getSumTwo:function(){
        return a+b;
       },
       getSumThree:function(){
        return a+b+c;
       }
    }
}
store= sum2(2,5,7);
console.log(store.getSumTwo());
console.log(store.getSumThree());