import { elements } from './elements';
import $ from 'jquery';

const CollapserModule = function() {
    // Collapser

    const handleCollapse = (event) => {

        const currElement = $(event.currentTarget.closest('.collapsed-item'));

        currElement[0].classList.toggle('closed');
        currElement[0].classList.toggle('open');
    };

    $('.collapsed-title').each((index, elem) => {
        $(elem).click(handleCollapse)
    });
};

export default CollapserModule;