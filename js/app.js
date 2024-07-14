console.log("Hello world")

document.getElementById('demo').innerHTML = "Sunday is a bright day"


/**
 * VARIABLE DECLARATION KEYWORDS
 * automatic declaration
 * var 
 * let
 * const
 */


// a = 56

// var a = 89
// var a = 12

let a = 34
a = 90

const b = 78




console.log(a)

console.log(b)

firstName = "Lynda"
surName = "Ret"

rat = "oke"

console.log(rat)

/**
 * primitive and reference data types
 * 
 * number
 * string
 * boolean
 * undefined
 * 
 * arrays
 * objects
 * math objects
 * 
 */

num1 = 67
let sentence = "On the bright side of life"
let isMarried = true
let cars;
let arr1 = ["red", "blue", "green"]

console.log(typeof arr1)
console.log(Array.isArray(arr1))

let person = {
    firstname : "Ada",
    age: 30,
    hobbies : ["reading", "sleeping"],
    isAdmin : false
}

console.log(typeof person)

//JS OPERATORS

/**
 * assigment = 
 * == === equality
 * addition, substraction, multp, division comparison, modulus, increment/decrement +, -, /, *, ><>=<=, %, ++, --
 */

mt = "90"
xy = 90


console.log(mt === xy)

let ab = 4
let ac = 2

console.log(ab + ac)

console.log(ab * ac)

console.log(ab / ac)

console.log(ab - ac)

console.log(ab % ac)

let num2 = 10
let num3 = 16
// ++num2
// num2++
// --num2
// num2--



console.log(num2 <= num3)

/**
 * LOGICAL OPERATOR
 * and && -> the conditions must be true to get true else false
 * 
 * or || -> when one condition is true everything is true else false
 * 
 * not ! -> this reverse the true to false and false to true
 */

sum1 = 45

sum2 = 34

console.log(sum1 > sum2 && sum1 == sum2)

console.log (!(sum2 == 45 && sum1 < sum2 || sum1 > sum2))