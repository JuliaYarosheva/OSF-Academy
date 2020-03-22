import { elements} from "./elements";

const ProductDetailsPageModule = function () {
    // check is product module
if (elements.PRODUCT_MODULE.length === 0) return;
    // Enlarge selected image

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
    elements.moreLessBtns[0].addEventListener('click', e => {
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
    });

    //Add to Cart

    const addToCart = () => {
        let numItems = parseInt(elements.cartInd[0].innerHTML);
        let numProds = parseInt(elements.numProducts[0].value);

        numItems += numProds;

        elements.cartInd[0].style.visibility = numItems > 0 ? 'visible' : 'hidden';

        elements.cartInd[0].textContent = `${numItems}`;
    };

    elements.addToCart[0].addEventListener('click', addToCart);

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

    const collapsePar = () => {

        elements.productDetailsPar[0].textContent = text;

    };

    elements.readMoreBtn[0].addEventListener('click', collapsePar);
};

export default ProductDetailsPageModule;