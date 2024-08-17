// let nobleGases = ["He", "Ne", "Ar", "Kr", "Xn"]
// // let nobleGases = Array("He", "Ne", "Ar", "Kr", "Xn")

// nobleGases[4] = "Rn"
// nobleGases[5] = "Help"

// console.log(nobleGases)

// let element = [
//     ["H", "Li", "Na"], 
//     ['Be', 'Mg'],
//     ['B', "Al"],
//     ['C', 'Si']
// ]

// console.log(element[0][1])

// let firstGroup = ['H', 'Li', 'Na',,'K', 'Rb', 'Cs']

// firstGroup.length = 11

// console.log(firstGroup)

// let dough1 = ['flour', 'water', 'yeast', 'salt']
// let dough2 = ['flour', 'water', 'yeast', 'salt']

// // dough1 = dough2

// // console.log(dough1 == dough2)

// const compareArr = (arr1, arr2)=>{
//     // if(arr1.length !== arr2.length){
//     //     console.log('false')
//     // }else{
//     //     console.log('true')
//     // }

//     for(i = 0; i < arr1.length; i++){
//         if(arr1[i] !== arr2[i]){
//             console.log('false')
//         }else{
//             console.log('true')
//         }
//     }
// }

// compareArr(dough1, dough2)


// let num = [3, 2, 5, 1, 8, 9]

// console.log(Math.max(...num))

let alkali = ['Li', 'Na', 'K']
let alkEarth = ['Be', 'Mg', 'Ca']

metals = [...alkali,...alkEarth]

console.log(metals)

function f1(first, second, third, ...others){
    console.log(first, second, third, ...others)
}

f1('He', 'Ne', 'Ar', 'Kr', 'Xn', 'Rn')


let nobleGases = ["He", "Ne", "Ar", "Kr", "Xn"]

// nobleGases.push("Rice", "Stew")
// nobleGases.unshift("Beans", "Moi-Moi")
// nobleGases.pop()
// nobleGases.shift()
nobleGases.splice(1,3, 'Stew', 'Rice')

console.log(nobleGases)


console.log(alkali.concat(alkEarth))

console.log(alkali.toString())
console.log(alkali.join('-'))

// debugger;
let stds_score = [30, 20, 10]

let res = stds_score.reduce((item, score)=>{
    return item + score
}, 10)


console.log(res)


let nums = []

for(i = 0; i <= 500; i++){
    nums.push(i) 
}

console.log(nums)

evenNum = nums.filter((item)=>{
    return item % 2 == 0
})


console.log(evenNum)

let numOdd = []

nums.forEach((el)=>{
    if(el % 2 !== 0){
        numOdd.push(el)
    }
})

console.log(numOdd)

let stds = ["Dennis", "Ngozi", "Ebere"]

let newStds = stds.map((item, i, arry)=>{
    return  item  + ' is my ' + i +  ' st student  ' + ' and the array is ' + arry;
})

console.log(newStds)

//assignemnt arrays
// let search = prompt('enter ')

//  * write js fuction that will search for a word in string
// * a. if the word exist, return the word 
// * b. finally print the word in reverse
// * 
// * write a js function that will return true or false if a word is a plaindronme -> a word returns same when spelt in reverse
// * 
// * stds score assigment put in js function
// * 
// * write a js function that will print the factorial of a number
// * 
// * array methods : every, slice, split, map, reduce, filter, includes, indexof, find, findLast, sort

let msg = "Today is saturday"

let searchs = prompt('enter a word to search')


function searcWord(word,word2){
    if(word.includes(word2)){
        console.log(searchs.split('').reverse().join(''))
    }else{
        console.log("search not found")
    }
}

searcWord(msg,searchs)

let check_word = prompt("enter a word to search")
checks = check_word.toLowerCase()


function palin(palins){
    palins = checks
    palins = palins.split('').reverse().join('')

    if(palins === checks){
        console.log("is a palindronme")
    }else{
        console.log('not a palin')
    }
}

palin(checks)