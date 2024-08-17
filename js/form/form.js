
let regForm = document.querySelector('.regform')

let userInput = document.querySelector('.username')

let userError = document.querySelector('.user_error')

let emailInput = document.querySelector('.email')

let emailError = document.querySelector('.email_error')

let passInput = document.querySelector('.password')

let passError = document.querySelector('.pass_error')

let confInput = document.querySelector('.confirm')

let confError = document.querySelector('.conf_error')

let checkTerm = document.querySelector('.checked')

let checkError = document.querySelector('.check_error')

let showPass = document.querySelector('.show')

showPass.addEventListener('click', ()=>{
    const ip = passInput.getAttribute('type') === 'password' ? 'text' : 'password'

    passInput.setAttribute('type', ip)
})


regForm.addEventListener('submit', (e)=>{

    let isError = false

    if(isEmpty(userInput)){
        isError = true
        msgError(userInput, userError, "username field is empty")
    }


    if(isEmpty(emailInput)){
        isError = true
        msgError(emailInput, emailError, "email field is empty")
    }

    const password = document.querySelector('.password').value

    const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/

    if(!regExp.test(password)){
        isError = true
        msgError(passInput, passError, "password does not match")
    }

    // if(isEmpty(passInput)){
    //     isError = true
    //     msgError(passInput, passError, "password field is empty")
    // }

    if(isEmpty(confInput)){
        isError = true
        msgError(confInput, confError, "confirm field is empty")
    }

    if(!checkTerm.checked){
        isError = true
        msgError(checkTerm, checkError, "you must agree to terms and condition")
    }

    if(!isError){
        return false
    }

    e.preventDefault()
})


console.log(regForm)

function isEmpty(el){
    if(el.value.length === 0){
        return true
    } return false
}

function msgError(el, elerror, msg ){
    elerror.classList.add('danger')
    el.classList.add('danger')
    elerror.innerHTML = msg

}


let forms = document.querySelector('.formdiv')

let menuBar = document.querySelector('.fa-bars')

menuBar.addEventListener('click', ()=>{
    forms.classList.toggle('hide')
    menuBar.classList.toggle('fa-times')
})