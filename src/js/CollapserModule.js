import $ from 'jquery';
import {elements} from "./elements";

const CollapserModule = function() {
    const handleCollapse = (event) => {

        const currElement = $(event.currentTarget.closest('.collapsed-item'));

        currElement[0].classList.toggle('closed');
        currElement[0].classList.toggle('open');
    };

    $('.collapsed-title').each((index, elem) => {
        $(elem).click(handleCollapse)
    });
};

const CollapseContentModule = function() {
    if (elements.COLLAPSE_CONTENT_MODULE.length !== 0) {

        // Collapse/Show Text

        let text = elements.productDetailsPar[0].innerHTML;

        const limitPar = (limit = 200) => {

            const newPar = [];
            if (text.length > limit) {
                text.split(' ').reduce((acc, cur) => {
                    if (acc + cur.length <= limit) {
                        newPar.push(cur);
                    }
                    return acc + cur.length;
                }, 0);

                // return the result
                return `${newPar.join(' ')} ...`;
            }
            return text;
        };

        elements.productDetailsPar[0].textContent = `${limitPar()}`;

        let isOpen = false;

        elements.collapseContentBtn[0].addEventListener('click', () => {

            if (isOpen) {
                elements.productDetailsPar[0].textContent = `${limitPar()}`;
                elements.readMoreBtn[0].textContent = "Read more";
                isOpen = false;
            } else {
                elements.productDetailsPar[0].textContent = text;
                elements.readMoreBtn[0].textContent = "Read less";
                isOpen = true;
            }
        });
    }
};

export {
    CollapserModule,
    CollapseContentModule
};