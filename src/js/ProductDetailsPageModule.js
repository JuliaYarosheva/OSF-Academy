import {elements} from "./elements";

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
            let numProds = parseInt(elements.numProducts[0].value);

            if (e.target.matches('.dec')) {
                //Decrease button is clicked
                if (numProds > 1) {

                    numProds -= 1;
                    elements.numProducts[0].value = numProds;
                } else if (numProds === 1) {
                    elements.numProducts[0].value = 1;
                }

            } else if (e.target.matches('.inc')) {
                //Increase button is clicked
                numProds += 1;
                elements.numProducts[0].value = numProds;
            }
        };

        elements.moreLessBtns[0].addEventListener('click', incDecQuantity);

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

        elements.addToCart[0].addEventListener('click', addToCart);
    }
};

export default ProductDetailsPageModule;