import { elements } from './elements';

const PasswordModule = function() {
    // Show Password Button

    const showPassword = () => {

        const attrType = elements.passInput[0].getAttribute('type');

        if (attrType === 'password') {
            elements.passInput[0].removeAttribute('type');
            elements.passInput[0].setAttribute('type', 'input');
        } else if (attrType !== 'password') {
            elements.passInput[0].removeAttribute('type');
            elements.passInput[0].setAttribute('type', 'password');
        }
    };

    elements.showPasswordBtn[0].addEventListener('click', showPassword);


// Password validation

    const validatePass = () => {
        const input = elements.passInput[0].value;
        const check = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\\w\\s]).{6,}$/;

        if (input.match(check)) {
            alert `You logged in!`;

        } else {
            alert `Password must contain at least 6 characters, 1 numeric, 1 uppercase letter, 1 special character.`
        }
    };

    elements.loginBtn[0].addEventListener('click', validatePass);
};

export default PasswordModule;