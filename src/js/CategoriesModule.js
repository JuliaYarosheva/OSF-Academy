import { elements } from './elements';

const CategoriesModule = function() {

    const hideCategories = () => {
            console.log('fuck!');

                elements.categories[0].style = 'display: none';
    };

    elements.hideCategBtn[0].addEventListener('click', hideCategories);
};
export default CategoriesModule;