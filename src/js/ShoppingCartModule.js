import {elements} from "./elements";
import $ from "jquery";

const ShoppingCartModule = function() {

    if (elements.SHOPING_CART_MODULE.length !== 0) {
        let subtotalArr;
        const calcSubtotal = () => {

            const arr = [];
            elements.productPriceLarge.each((index, elem) => {
                const itemPriceArr = elem.textContent.split(' ');
                const itemPrice = parseFloat(itemPriceArr[1]);
                arr.push(itemPrice);
            });

            return arr;
        };

        subtotalArr = calcSubtotal();

        const renderSubtotal = () => {

            const subtotal = subtotalArr.reduce((a, b) => a + b, 0);
            elements.subtotalValue[0].textContent = `$ ${subtotal.toFixed(2)}`;
            return subtotal;
        };

        const updateShipping = () => {

            let shippingRate;

            if (document.getElementById('flat-rate').checked) {
                shippingRate = parseInt(document.getElementById('flat-rate').value);
            } else if (document.getElementById('free-shipping').checked) {
                shippingRate = parseInt(document.getElementById('free-shipping').value);
            } else if (document.getElementById('international').checked) {
                shippingRate = parseInt(document.getElementById('international').value);
            } else if (document.getElementById('local-delivery').checked) {
                shippingRate = parseInt(document.getElementById('local-delivery').value);
            } else if (document.getElementById('local-pickup').checked) {
                shippingRate = parseInt(document.getElementById('local-pickup').value);
            } else {
                shippingRate = 0;
            }

            return shippingRate;
        };

        const updateTotal = () => {

            const subtotal = renderSubtotal();
            const shipping = updateShipping();
            elements.orderTotal[0].textContent = `$ ${(subtotal + shipping).toFixed(2)}`;
        };

        elements.moreLessBtns.each((index, elem) => {
            elem.addEventListener('click', updateTotal);
        });
        elements.shippingType.each((index, elem) => {
            elem.addEventListener('click', updateTotal);
        });

        updateTotal();

        const deleteProd = (e) => {

            let productElement = $(e.target).parent();
            productElement[0].parentNode.removeChild(productElement[0]);
            removePrice();
            updateTotal();

            function removePrice() {
                const elementPriceArr = productElement.find('.product-price-large')[0].textContent.split(' ');
                const elementPriceString = elementPriceArr[1];
                const elementPrice = parseFloat(elementPriceString);

                const index = subtotalArr.indexOf(elementPrice);
                if (index !== -1) {
                    subtotalArr.splice(index, 1);
                }
            }
        };

        elements.deleteProduct.each((index, elem) => {
            elem.addEventListener('click', deleteProd);
        });

    }
};

export default ShoppingCartModule;