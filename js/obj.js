// let person = {
//     firstName : "Ada",
//     age : 50,
//     hobbies : ["reading", "dancing", "singing"],
//     greet : function(){
//         return "hello world"
//     }

// }
// person.isAdmin = true
// person.age = 30

// delete person.isAdmin

// console.log(person)

// let item = "username"

// let person = {
//     "first Name" : "Ada",
//     age : 50,
//     hobbies : ["reading", "dancing", "singing"],
//     [item] : "obinna",
//     greet : function(){
//         return "hello world"
//     }
// }

let person = {
    firstName : "Ada",
    age : 50,
    hobbies : ["reading", "dancing", "singing"],
    greet : function(){
        return `My name is ${this.firstName} and I am ${this.age} years old and my hobbies are ${this.hobbies}`
    }

}

console.log(person.greet())

// console.log(person["first Name"])

console.log(person)

const person2 = {...person}
console.log(person2.age)

const{firstName,age,hobbies} = person

console.log(firstName)

console.log(this)

function Staff(username,age,email,country){
    this.username = username,
    this.age = age
    this.email = email
    this.country = country


    this.fullName = function(){
        return (`My username is ${this.username}`)
    }

    this.getAge = function(){
        return  2024 - this.age 
    }

    this.fullDetails = function(){
        return `This is my full details username : ${this.username}, age: ${this.getAge()}, email : ${this.email} and finally country: ${this.country}`
    }

}

let res = new Staff("Smith", 67, "smith@gmail.com", "Germany")

let Dickson = new Staff("Dickson", 1996, "dickson@gmail.com", "Sambisa")

let Dennis = new Staff("Dennis", 2003, "dennis@gmail.com", "Nigeria")

console.log(Dickson.fullDetails())
console.log(Dennis.fullDetails())

console.log(Math.PI)
console.log(Math.pow(4,2))
console.log(Math.floor(Math.random() * 20 + 1))

console.log(Math.ceil(5.3))
console.log(Math.floor(1.6))

function genToken(len){
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789'

    let token = '';

    for(i = 0; i < len; i++){
        const ranToken = Math.floor(Math.random() * chars.length)
        token += chars[ranToken]
    }

    return token

}
console.log(genToken(5))


function msg(){
    console.log( "Hello world")
}

// setTimeout(msg,2000)

// setInterval(msg, 1000)



function dates(){
    let dt = new Date()
    document.getElementById('demo').innerHTML = 
    `${dt.getHours()} : ${dt.getMinutes()} : ${dt.getSeconds()}`
   
   
}


console.log(setInterval(dates,1000))

