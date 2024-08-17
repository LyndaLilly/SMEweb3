let popContainer = document.querySelector('.container')

let btn = document.querySelector('.close')


window.addEventListener('load', function(){
    this.setTimeout(function open(){
        popContainer.style.display = "block"
        popContainer.classList.add('pop')
    }, 2000)
})

btn.addEventListener('click', ()=>{
    popContainer.style.display = "none"
})


const countDown = () =>{
    const countDate = new Date('August 20, 2024 13:22:00').getTime()

    const now = new Date().getTime()

    const gap = countDate - now

    const seconds = 1000
    const minute = seconds * 60
    const hour = minute * 60
    const day = hour * 24

    let textDay = Math.floor(gap/day)
    let textHour = Math.floor((gap % day)/hour)
    let textMinute = Math.floor((gap % hour)/minute)
    let textSec = Math.floor((gap % minute)/seconds)

  
    document.querySelector('.day').innerHTML = textDay
    
    document.querySelector('.hour').innerHTML = textHour

    document.querySelector('.minutes').innerHTML = textMinute

    document.querySelector('.secs').innerHTML = textSec

    if(gap < 1000){
        window.location.replace('index.html')
    }
}


setInterval(countDown, 1000)


