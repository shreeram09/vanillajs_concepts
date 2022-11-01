/**
 * undefined type
 * null
 * not defined
 * not a number :NaN
 */
// var keyword defines variable in functional scope
var me="self"
console.log(me)
me=null
console.log(me)
me=undefined
console.log(me)
console.log(b)
var b;

console.log(undefined===null)//false
console.log(typeof undefined)//same
console.log(typeof null)//object
console.log(typeof NaN)//number