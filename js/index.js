const elements = {
    copyright: document.querySelector('.copyright'),
    showPasswordBtn: document.querySelector('.show-password'),
    passInput: document.getElementById('defaultForm-pass')
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

// Copyright
const copyrightYear = () => {
    return new Date().getFullYear();
};

elements.copyright.textContent = `© Copyright ${copyrightYear()}. All Rights Reserved.`;