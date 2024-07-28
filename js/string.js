// let str = "today is saturday"

// console.log(str)

// console.log(str[0])

// console.log(str.length)

// let str2 = `When candles are all out, all cats are grey`

// console.log(str2)

// let str3 = "Bore"

// str3[0] = "R"

// console.log(str3)

let str2 = 'When candles are all out, \n all cats are grey'
let str3 = `When candles are all out,
all cats are grey`


console.log(str3)


let a = "Bach"
let b = "copper"

console.log(a > b)

let quoteOne = "All generalization are the same even this one!"
let quoteTwo = "All generalization are the same even this one"

console.log(quoteOne == quoteTwo)

let dog1 = 'Bach'
let dog2 = "Bingo"

console.log("My two dogs are" + " " + dog1 + " " + "and" +  " " + dog2)

console.log(`My two dogs are ${dog1} and ${dog2}`)

//string methods

// let sentence = "Hello world"

// console.log(sentence.charAt(4))

// console.log(a.concat(' ', b))

let sentence = "Always look on the bright side of life"

console.log(sentence.includes("look on", 8))

console.log(sentence.indexOf("l", 2))

console.log(sentence.startsWith("al"))
console.log(sentence.endsWith("fe"))

console.log(sentence.slice(0,6))

console.log(sentence.split(':'))

console.log(sentence.toLowerCase())

// js string

let string = "It is well"

myfun = function(str){
    return str.split(" ")
}

console.log(myfun(string))

function capitaLize(str){
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    })
}

console.log(capitaLize("python is a programming language"))

strs = "Hello world "

console.log(strs.repeat(3))