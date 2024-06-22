const form = document.querySelector('form')
const password1 = document.querySelector('#password')
const password2 = document.querySelector('#confirm-password')
const inputs = document.querySelectorAll('input')
const button = document.querySelector('button')

form.addEventListener('submit', handleSubmitForm)
password2.addEventListener('input', validatePassword)
form.addEventListener('click', () => {
    Array.from(inputs).forEach(i => {
        i.className = ""
        button.disabled = false
        
    })
})



function handleSubmitForm(e) {
    Array.from(inputs).forEach(i => {
        if (!i.value) {
            e.preventDefault()
            i.classList.add('empty')
            button.disabled = true
        }
    })

    if (form.checkValidity()) {
        // form is valid

    } else {
        e.preventDefault()
    }
}

function validatePassword(e) {
    const pwdValue = e.target.value
    if (confirmPassword(password1.value, pwdValue)) {
        password1.classList = ""
        password2.classList = ""
    } else if (confirmPassword(password1.value, pwdValue) === null) {
        password1.classList = ""
        password2.classList = ""
    } else {
        if (pwdValue) {
            password1.classList.add('invalid')
            password2.classList.add('invalid')
        }
    }
}

function confirmPassword(a, b) {
    if (!a || !b)
        return null
    return a === b
}