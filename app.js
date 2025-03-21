document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
})


const fname = document.getElementById('fname');
const Lname = document.getElementById('Lname');
const email = document.getElementById('email');
const pass = document.getElementById('pass');

const inputimg = document.querySelectorAll('.inputimg');
const errorMessage = document.querySelectorAll('.error-message');

const btn = document.querySelector('.btn')


//! add error state
function addErrorStates() {
    inputimg.forEach(img => img.classList.add('show'))
    errorMessage.forEach(txt => txt.classList.add('show'))

    fname.classList.add('error-state')
    Lname.classList.add('error-state')
    email.classList.add('error-state')
    pass.classList.add('error-state')
}

//! remove error state
function removeErrorStates() {
    // inputimg.forEach(img => img.classList.remove('show'))
    inputimg.forEach((img) => (
        img.classList.remove('show')
    ))

    errorMessage.forEach(txt => txt.classList.remove('show'))

    fname.classList.remove('error-state')
    Lname.classList.remove('error-state')
    email.classList.remove('error-state')
    pass.classList.remove('error-state')

    fname.value = ''
    Lname.value = ''
    email.value = ''
    pass.value = ''
}


//! check if all the inputs are empty
function areEmpty() {
    return (
        fname.value == '' &&
        Lname.value == '' &&
        email.value == '' &&
        pass.value == ''
    )
}

//! check if all the inputs has value
function areValid() {
    return (
        fname.value !== '' &&
        Lname.value !== '' &&
        email.value !== '' &&
        pass.value !== ''
    )
}

//! when the btn button is clicked
btn.addEventListener('click', () => {
    if (areEmpty()) {
        addErrorStates();
        return;
    }
    else if (areValid()) {
        removeErrorStates();
    }
})


const allInputs = document.querySelectorAll('.all-inputs')
const input_group = document.querySelectorAll('.input-group')

allInputs.forEach(input => {
    const div = input.nextElementSibling
    const span = div.nextElementSibling


    input.addEventListener('keyup', () => {
        div.classList.remove('show')
        span.classList.remove('show')
        input.classList.remove('error-state')
    })
})

//! email reges validation

email.addEventListener('keyup', () => {
    const emailRegex = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;

    if (email.value == '') {
        email.classList.remove('error-state')
        const div = email.nextElementSibling
        const span = div.nextElementSibling
        div.classList.remove('show')
        span.classList.remove('show')
        email.classList.remove('text-error-clr')
    }
    else if (!email.value.match(emailRegex)) {
        email.classList.add('error-state')
        email.classList.add('text-error-clr')
        const div = email.nextElementSibling
        const span = div.nextElementSibling
        div.classList.add('show')
        span.classList.add('show')
    }
})


//! password validation
function passErrorAdd() {
    pass.classList.add('error-state')
    const div = pass.nextElementSibling
    const span = div.nextElementSibling
    div.classList.add('show')
    span.classList.add('show')
}

function passErrorRemove() {
    pass.classList.remove('error-state')
    const div = pass.nextElementSibling
    const span = div.nextElementSibling
    div.classList.remove('show')
    span.classList.remove('show')
}

pass.addEventListener('keyup', () => {

    if (pass.value == '') {
        passErrorRemove();
    }
    else if (pass.value.length < 8) {
        passErrorAdd();
    }
})

