
const form = document.getElementById('form')
const success_message = document.getElementById('success-message')
const firstName = document.getElementById('fname')
const lastName = document.getElementById('lname')
const email = document.getElementById('email')
const message = document.getElementById('textarea')
const radioBox = document.getElementById('query-type-box')
const generalRadio = document.getElementById('generalRadio')
const supportRadio = document.getElementById('supportRadio')
const checkbox = document.getElementById('checkbox-input')
const checkbox_box = document.getElementById('checkbox-box')

form.addEventListener('submit', (e) =>{

    inputCheck();

    let errors = inputCheck();

    if(errors > 0){
        e.preventDefault()
    }else{
        success_message.classList.remove('hidden')  
    }

})



function inputCheck(){
    const  firstNameValue = firstName.value
    const  lastNameValue = lastName.value
    const  emailValue = email.value
    const  messageValue = message.value
    const emailCheck = /^\S+@\S+\.\S+$/g

    let isError = 0;

    if(firstNameValue === '' || firstNameValue === null){
        setError(firstName, 'This field is required');
        isError = 1
    }else{
        success(firstName)
    }

    if(lastNameValue === ''|| lastNameValue === null){
        setError(lastName, 'This field is required')
        isError = 1
    }else{
        success(lastName)
    }

    if(emailValue === ''|| emailValue === null){
        setError(email, 'This field is required')
        isError = 1
    }else if(!emailCheck.test(emailValue)){
        setEmailError(email, 'Please enter a valid email address')
        isError = 1
    }else{
        success(email)
    }

    if(!generalRadio.checked && !supportRadio.checked){
        setErrorForQuery();
        isError = 1
    }else if(generalRadio.checked || supportRadio.checked){
        successForQuery();
    }

    if(messageValue === '' || messageValue === null){
        setErrorForMessage(message, 'This field is required')
        isError = 1
    }else{
        successForMessage(message)
    }

    if(!checkbox.checked){
        checkboxError('To submit this form, please consent to being contacted')
        isError = 1
    }else{
        checkboxSuccess()
    }

    return isError
}



function setError(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    small.innerText = message

    formControl.className = 'form-control user-info__personal-data error'
}

function success(input){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    formControl.className = 'form-control user-info__personal-data'

    small.innerText = ''
}

function setEmailError(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    formControl.className = 'form-control error'

    small.innerText = message
}

function setErrorForQuery(){
    const radioBox = document.getElementById('query-type-box')
    const small = radioBox.querySelector('small')
    small.innerText = 'Please select a query type'
}

function successForQuery(){
    const radioBox = document.getElementById('query-type-box')
    const small = radioBox.querySelector('small')
    small.innerText = ''
}

function setErrorForMessage(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    small.innerText = message
    formControl.className = 'form-control error'
}

function successForMessage(input){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    small.innerText = ''
    formControl.className = 'form-control'
}

function checkboxError(message){
    const small = checkbox_box.querySelector('small')
    small.innerText = message
    checkbox_box.className = 'form-control error'
}

function checkboxSuccess(){
    const small = checkbox_box.querySelector('small')
    small.innerText = ''
}