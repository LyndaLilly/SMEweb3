let header = document.getElementById("demo")

header.innerHTML = "You are late today to class"

function clickMe(){
    document.getElementById("img").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqETSpEsDSZ7g1Bc_RrtdGVC5j069NoFHO8ZIt5B43VsHlIHH7fyRst8fNcNYD-YPnsPo&usqp=CAU"
}

function bulb(){
       document.getElementById("img").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUFbRppWUrfx2-wy_Wq6LMgoBXNBYxraiKATVNkFm7QcUK0nKPf5xfnvt8vg20Z6rC_t0&usqp=CAU"
}


/**
 * js dom selection
 * by tagname
 * by classname
 * by id
 * by querrySelector
 * by querrySelectorAll
 */


let header2 = document.getElementsByTagName('h1')

// for(i = 0; i < header2.length; i++){

// header2[i].style.backgroundColor = "red"

// header2[i].style.padding = "2rem"

// header2[i].style.color = "white"
// }

header2 = Array.from(header2)

header2.forEach((el)=>{
    el.style.border = "2px solid black"

    el.style.borderRadius = "20px"

    el.style.padding = "3rem"
})



console.log(header2)

let pTag = document.getElementsByClassName('text')

console.log(pTag)


let header3 = document.getElementById('tat')

header3.style = "background-color : teal"
header3.style.color = "white"

console.log(header3)

let el = document.querySelector('.text')

console.log(el)

let all = document.querySelectorAll('.text')

all.forEach((item)=>{
    item.style.color = "orchid"
    item.style.backgroundColor = "black"
})

console.log(all)

let list = document.querySelector('ul li:nth-child(1)')

list.style. backgroundColor = 'aqua';

list.style.marginTop = "20px"

console.log(list)

/**dom tree */

let item = document.body //body

item = item.parentElement //html

// item = item.firstElementChild //head

// item = item.firstElementChild //head first child charset

// item = item.nextElementSibling

// item = item.lastElementChild

// item = item.nextElementSibling

// item = item.lastElementChild

item = item.children
console.log(item)

let bdy = document.querySelector('body')

let myh1 = document.createElement("h1")

myh1.innerHTML = "It is well"

bdy.insertAdjacentElement("afterbegin", myh1)

console.log(myh1)

let ul = document.querySelector('ul')

let myli = document.createElement("li")

myli.innerHTML = "Sweet Jesus"

myli.setAttribute('class', 'myli')
myli.setAttribute('class', "pet")
myli.setAttribute('title', "hello")

myli.classList.add('myli')
myli.classList.remove('myli')

ul.insertAdjacentElement('afterbegin', myli)

console.log(myli)

myh1.innerText = "Hello world"


let div = document.getElementById('div1')

let txt = document.createTextNode("Today is good")

div.append(txt)

bdy.insertAdjacentElement('beforebegin', div)


console.log(div)

console.log(window)

let box = document.getElementById('box')

box.addEventListener('click', ()=>{
    // box.style.background = "red"
    box.classList.toggle('box')
})


box.addEventListener('mousedown', (e)=>{
    box.style.width = "50%"
    console.log(e.type)
})


box.addEventListener('mouseup', (e)=>{
    console.log(e.type)

    box.style.width = "30%"
})

box.addEventListener('mouseenter', (e)=>{
    console.log(e.type)

    box.innerHTML = "THIS IS A TEXT"
})

box.addEventListener('mouseleave', (e)=>{
    box.innerHTML = ""
})
let addBtn = document.querySelector('.add')

let resBtn = document.querySelector('.res')

let subBtn = document.querySelector('.sub')

let count = 0

addBtn.addEventListener('click', ()=>{
    if(addBtn.classList.contains('add')){
        count = count + 1
        resBtn.innerHTML = count
    }
})

subBtn.addEventListener('click', ()=>{
    if(subBtn.classList.contains('sub')){
        count = count - 1
        resBtn.innerHTML = count
    }
})


/**
 * todolist
 * countdown
 * calculator
 * pop up
 */






