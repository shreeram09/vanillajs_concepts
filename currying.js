/**
 * currying function
 */

function add(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}

const res= add(2)(4)(1)
console.log(res)


usrObj={
    name:'anay',
    age:24
}

function userInfo(obj){
    return function(userinf){
        return usrObj[userinf]
    }
}

const inf=userInfo(usrObj)
console.log(inf('name'))
console.log(inf('age'))

/**
 * infinite currying
 */

function sample(a){
    return function(b){
        return function(){
            return a+b
        }
    }
}

console.log(sample(10)(23)(34))

function newadd(a){
    return function(b){
        if(b) return newadd(a+b)
        else return a
    }
}

console.log(newadd(4)(5)(7)(9)())