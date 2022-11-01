/**
 * object prototyping
 */

//everything is drived based on object prototype

const obj = {
    name:"hi",
    getName:function(){return this.name;}
}
console.log(obj)

const o2 ={
    roll:1,
    name:"me",
    getRoll:function(){return this.roll;},
    __proto__:obj //inheritance
}
console.log(o2)
console.log(o2.getName())

const array = new Array()
console.log(array)

Array.prototype.show=function(){
    return this
}

const citites=["nashik"];
console.log(citites.show())

function MyProto(name){
    this.name=name
}
MyProto.prototype=o2
const mp = new MyProto("damn")
console.log(mp.getName())
console.log(mp.getRoll())

