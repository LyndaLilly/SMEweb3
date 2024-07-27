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

// let a = 34
// a = 90

// const b = 78




// console.log(a)

// console.log(b)

// firstName = "Lynda"
// surName = "Ret"

// rat = "oke"

// console.log(rat)

// /**
//  * primitive and reference data types
//  * 
//  * number
//  * string
//  * boolean
//  * undefined
//  * 
//  * arrays
//  * objects
//  * math objects
//  * 
//  */

// num1 = 67
// let sentence = "On the bright side of life"
// let isMarried = true
// let cars;
// let arr1 = ["red", "blue", "green"]

// console.log(typeof arr1)
// console.log(Array.isArray(arr1))

// let person = {
//     firstname : "Ada",
//     age: 30,
//     hobbies : ["reading", "sleeping"],
//     isAdmin : false
// }

// console.log(typeof person)

// //JS OPERATORS

// /**
//  * assigment = 
//  * == === equality
//  * addition, substraction, multp, division comparison, modulus, increment/decrement +, -, /, *, ><>=<=, %, ++, --
//  */

// mt = "90"
// xy = 90


// console.log(mt === xy)

// let ab = 4
// let ac = 2

// console.log(ab + ac)

// console.log(ab * ac)

// console.log(ab / ac)

// console.log(ab - ac)

// console.log(ab % ac)

// let num2 = 10
// let num3 = 16
// // ++num2
// // num2++
// // --num2
// // num2--



// console.log(num2 <= num3)

// /**
//  * LOGICAL OPERATOR
//  * and && -> the conditions must be true to get true else false
//  * 
//  * or || -> when one condition is true everything is true else false
//  * 
//  * not ! -> this reverse the true to false and false to true
//  */

// sum1 = 45

// sum2 = 34

// console.log(sum1 > sum2 && sum1 == sum2)

// console.log (!(sum2 == 45 && sum1 < sum2 || sum1 > sum2))


/**
 * conditional statement
 * 
 * if -> the condition must be true to get a result
 * 
 * else if -> the condition must be true to get a result
 * 
 * else -> this only prints when the if and else if condition is false
 */

let a = 23
let b = 12

if(a > b){
    console.log("be like say na him oo")
}else if(a == b){
    console.log("dey check am")
}else if(a > b){
    console.log("na you sabi")
}else{
    console.log("you don jam na!")
}

/**
 * staff that i prompted to add their individual salary and i want to add 10,000 to their salaries also print a message according their salary amount
 */


// let salary = Number(prompt("enter your salary here"))

// if(salary < 30000){
//     console.log("low pay")
// }else if(salary < 40000){
//     console.log('manageable pay')
// }else if(salary < 50000){
//     console.log("you don try pay")
// }else{
//     console.log("na you biko!")
// }

// console.log(salary + 10000)




// let xy = parseInt("2")
// let yx = 3

// console.log(xy + yx)


/**
 * assignment
 * 
 * prompt a student to enter his/her scores in 6 courses 
 * 
 * a. calculate the total score
 * b. calculate the average score
 * c. calculate the grade
 * 
 * <= 39 = F
 * <= 44 = E
 * <= 49 = D
 * <= 59 = C
 * <= 69 = B
 * 
 * else A
 * 
 * console.log("Your score is " + totalScore + " and your average is " + avgScore + " finally your grade is " + grade)
 */

// let eng = parseInt(prompt("enter your eng score"))
// let maths = parseInt(prompt("enter your maths score"))


// total = eng + maths
// aver = total/2


// // console.log(total, aver)

// grade = ""

// if(aver <= 39){
//     grade = "F"
// }else if(aver <= 59){
//     grade = "C"
// }else{
//     grade = "A"
// }

// console.log("Your score is " + total + " and your average is " + aver + " finally your grade is " + grade)


/**loop
 * for 
 * for/in
 * for/of
 * while
 * do/while
 */

// debugger;

// for(let i = 0; i <= 20; i++){
//     console.log(i)
// }


// let str = "Today is saturday"

// for(x = 0; x <str.length; x++){
//     console.log(str[x])
// }


// let person = {
//     firstname : "Ada",
//     age: 30
// }

// for(let x in person){
//     console.log(person[x])
// }


// let hobbies =  ["reading", "sleeping"]

// for(i in hobbies){
//     console.log(hobbies[i])
// }

// while(i <= 5){
//     console.log(i)
//     i++
// }

// debugger;

// i = 0

// do{
//     console.log(i)
//     i++
// }while(i <= 10)


// let today = prompt("enter a day to search")

// switch(today){
//     case "Tuesday":
//     case "Saturday":
//     case "Apple":
    
//     console.log("dey search am")
//     break;

//     case "Monday":
//     case "Banana":
    
//     console.log("i don arrive here")

//     break;


//     default:
//         console.log("finally done!")
// }

// let age = 18

// result = age < 18 ? "you are qualified" : "you are not qualified"

// console.log(result)


// for(i = 0; i <= 10; i++){
//     if(i <= 5){
//         break;
//     }
//     console.log(i)

// }

// for(i = 0; i <= 10; i++){
//     if(i == 6){
//         continue;
//     }

//     console.log(i)

// }

let myset = new Set(["Red", "Blue", "Black"])

for(x of myset){
    console.log(x)
}

console.log(myset)

myset.forEach(item => {
    console.log(item)
});






let items = new Set()

items.add("Mango")
items.add("Baanana")
items.add("Oranges")

console.log(items)

res = items.has("mango")

console.log(res)

res2 = items.values()
res2 = items.entries()

console.log(res2)
// const days_of_week = new Map([
//     ["Sunday", 0],
//     ["Monday", 1],
//     ["Tuesday", 2],
//     ["Wednesday", 3]
// ])

// console.log(days_of_week)






