import {elements} from "./elements";
import $ from "jquery";

const ProductDetailsPageModule = function () {
    if (elements.PRODUCT_MODULE.length !== 0) {
        const enlargeImage = (click) => {
            click.preventDefault();

            elements.smallImg.each((index, elem) => {
                elem.classList.remove('preview_active');
            });

            click.target.classList.add('preview_active');


            let source = click.target.src;

            let sourceArr = source.split('-');

            elements.largeImg[0].src = `${sourceArr[0]}.jpg`;
        };

        elements.smallImg.each((index, elem) => {
            elem.addEventListener('click', enlargeImage);
        });


        // Decrease/Increase Products Quantity
        const incDecQuantity = (e) => {
            let numProds = parseInt($(e.target).parent().find('.quantity')[0].value);


            if (e.target.matches('.dec')) {
                //Decrease button is clicked
                if (numProds > 1) {

                    numProds -= 1;

                    $(e.target).parent().find('.quantity')[0].value = numProds;
                     } else if (numProds === 1) {
                         $(e.target).parent().find('.quantity')[0].value = 1;
                     }

                } else if (e.target.matches('.inc')) {
                    //Increase button is clicked
                    numProds += 1;
                    $(e.target).parent().find('.quantity')[0].value = numProds;
                }

            calculateTotalPrice();
            function calculateTotalPrice () {

                const productPriceString = $(e.target).parent().siblings('.shopping-cart-product-info').find('.product-price')[0].innerHTML;;

                const productPriceArr = productPriceString.split(' ');
                const productPrice = productPriceArr[1];

                const totalPrice = (productPrice * numProds).toFixed(2);

                const productPriceLarge = $(e.target).parent().siblings('.product-price-large')[0].textContent = `$ ${totalPrice}`;
            }
        };

        elements.moreLessBtns.each((index, elem) => {
            elem.addEventListener('click', incDecQuantity);
        });

        //Add to Cart

        const addToCart = () => {
            let numItems = parseInt(elements.cartInd[0].innerHTML);
            let numProds = parseInt(elements.numProducts[0].value);

            numItems += numProds;

            elements.cartInd.each((index, elem) => {
                elem.style.visibility = numItems > 0 ? 'visible' : 'hidden';
            });

            elements.cartInd.each((index, elem) => {
                elem.textContent = `${numItems}`;
            });

        };

        //elements.addToCart[0].addEventListener('click', addToCart);
    }
};

export default ProductDetailsPageModule;