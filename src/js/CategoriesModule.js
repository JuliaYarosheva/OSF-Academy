import { elements } from './elements';

const CategoriesModule = function() {
    if (elements.CATEGORIES_MODULE.length !== 0) {

        let isOpen = false;

        elements.hideCategBtn[0].addEventListener('click', () => {

            if (isOpen) {
                elements.categories[0].style = 'display: block';
                isOpen = false;
            } else {
                elements.categories[0].style = 'display: none';
                isOpen = true;
            }
        });
    }
};
export default CategoriesModule;