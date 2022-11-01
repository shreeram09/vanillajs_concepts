/***
 * Map, Set and WeakMap, WeakSet
 * Set: single data,unique elements, iterative
 * Map: key,value pair data,iterative
 * WeakSet: same as set but non-iterative
 * WeakMap: seme as map but non-iteravtive
 */

let obj = new Set([23,4,2,67,83,2])
obj.add(3)
console.log(obj.add(3))
console.log(obj)
obj.delete(3)
console.log(obj)
