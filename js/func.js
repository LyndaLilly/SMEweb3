function myFun(){
    console.log("ready go!")
}

myFun()


function add(){
    return 3 + 3
}

console.log(add())

function sub(username, age){
    console.log("My username is" + " " + username + " and my age is " + age)
}

sub("Smith", 40)
sub("Lynda", 55)
sub("Maria", 20)

console.log(Math.PI)

console.log(Math.pow(2,2))

function circleArea(r){
    return Math.round(Math.PI * Math.pow(r,2))
}

console.log(circleArea(4))
console.log(circleArea(2))

/**
 * function declaration
 * function expression
 * anonymous
 * arrow
 * callback
 */

let MyfuExp = function(){
    console.log("Hello world")
}

MyfuExp()

// const myVar = (a) =>{
//     return a + 12
// }

// console.log(myVar(3))

// const myVar = a =>{
//     return a + 20
// }

// console.log(myVar(3))


function callback(){
    console.log('hello') 
}


function anyfun(fun){
    fun()
}


anyfun(callback)

// function ada(r,){
//     console.log('put ' + r)
// }


// ada('get')

// myvar = (x, y) =>{
//     console.log(x + y)
// }

// myvar(2, 6)

myvar = a => {
    console.log(a)
}

myvar(3)