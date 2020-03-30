import {elements} from "./elements";
import $ from "jquery";

const ShoppingCartModule = function() {

    calcSubtotal();
    updateTotal();

    function calcSubtotal() {
        const subtotalArr = [];

        elements.productPriceLarge.each((index, elem) => {
            const itemPriceArr = elem.textContent.split(' ');
            const itemPrice = parseFloat(itemPriceArr[1]);
            subtotalArr.push(itemPrice);

        });

        const subtotal = subtotalArr.reduce((a, b) => a + b, 0);
        elements.subtotalValue[0].textContent = `$ ${subtotal.toFixed(2)}`;
        return subtotal;
    }

    function updateShipping () {

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
    }

    function updateTotal () {

        calcSubtotal();
        updateShipping();
        elements.orderTotal[0].textContent = `$ ${(calcSubtotal() + updateShipping()).toFixed(2)}`;
    }

    elements.moreLessBtns.each((index, elem) => {
        elem.addEventListener('click', updateTotal);
    });
    elements.shippingType.each((index, elem) => {
        elem.addEventListener('click', updateTotal);
    });

    const deleteProd = (e) => {

        let productElement = $(e.target).parent();
        productElement[0].parentNode.removeChild(productElement[0]);
    };

    elements.deleteProduct.each((index, elem) => {
        elem.addEventListener('click', deleteProd);
    });
};

export default ShoppingCartModule;