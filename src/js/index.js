//import ddd from "../mockData/popularProductsData";


const elements = {
    copyright: document.querySelector('.info_copyright'),
    showPasswordBtn: document.querySelector('.show-password'),
    passInput: document.getElementById('defaultForm-pass'),
    loginBtn: document.querySelector('.btn-default')
};

// Show Password Button

const showPassword = () => {

    const attrType = elements.passInput.getAttribute('type');

    if (attrType === 'password') {
        elements.passInput.removeAttribute('type');
        elements.passInput.setAttribute('type', 'input');
    } else if (attrType !== 'password') {
        elements.passInput.removeAttribute('type');
        elements.passInput.setAttribute('type', 'password');
    }
};

elements.showPasswordBtn.addEventListener('click', showPassword);


// Password validation

const validatePass = () => {
    const input = elements.passInput.value;
    const check = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\\w\\s]).{6,}$/;

    if (input.match(check)) {
        alert `You logged in!`;

    } else {
        alert `Password must contain at least 6 characters, 1 numeric, 1 uppercase letter, 1 special character.`
    }
};

elements.loginBtn.addEventListener('click', validatePass);

// Copyright
const copyrightYear = () => {
    return new Date().getFullYear();
};

elements.copyright.textContent = `© Copyright ${copyrightYear()}. All Rights Reserved.`;