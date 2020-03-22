import { elements } from './elements';
import $ from 'jquery';

const CollapserModule = function() {
    // Collapser

    const handleCollapse = (event) => {
        const currElement = $(event.currentTarget);

        currElement[0].nextElementSibling.classList.toggle('content-closed');
        //el.childNodes[2].style = 'transform: rotate(180deg)';

        // if (el.matches('.collapsed-title')) {
        //     el.nextElementSibling.classList.toggle('content-closed');
        //     el.childNodes[2].style = 'transform: rotate(180deg)';
        //
        // } else if (el.matches('.collapsed-item')) {
        //     el.childNodes[3].classList.toggle('content-closed');
        //     el.childNodes[1].childNodes[2].style = 'transform: rotate(180deg)';
        // }
    };

    $('.collapsed-title').each((index, elem) => {
        $(elem).click(handleCollapse)
    });
};

export default CollapserModule;