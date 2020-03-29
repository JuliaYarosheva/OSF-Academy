import { elements } from './elements';

const BurgerMenuModule = function() {
    let isOpen = false;
    const toggleMenu = (click) => {
        click.preventDefault();

        if (isOpen) {
            elements.burgerMenu[0].style = "left: -9999px;";
            elements.bodyTag[0].style = 'overflow: auto';

            isOpen = false;
        } else {
            elements.burgerMenu[0].style = "left: 0;";
            elements.bodyTag[0].style = 'overflow: hidden';

            isOpen = true;
        }
    };

    elements.burgerBtn[0].addEventListener('click', toggleMenu);
};

export default BurgerMenuModule;