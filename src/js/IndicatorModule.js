import $ from "jquery";
import { elements } from './elements';

// Add to WishList & Add to Cart

const IndicatorModule = function () {
    const showIndicator = (num, indicator) => {

        num += 1;

        indicator.style.visibility = num > 0 ? 'visible' : 'hidden';

        indicator.textContent = `${num}`;
    };

    const addToWishList = () => {

        let numLikes = parseInt(elements.likeInd[0].innerHTML);
        showIndicator(numLikes, elements.likeInd[0]);
    };

    const addToCart = () => {
        let numItems = parseInt(elements.cartInd[0].innerHTML);
        showIndicator(numItems, elements.cartInd[0]);
    };

    elements.likeBtn.each((index, elem) => {
        elem.addEventListener('click', addToWishList)
    });

    elements.addBtn.each((index, elem) => {
        elem.addEventListener('click', addToCart)
    });

    elements.buyNowBtn.each((index, elem) => {
        elem.addEventListener('click', addToCart)
    });

};

export default IndicatorModule;