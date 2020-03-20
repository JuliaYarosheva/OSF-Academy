import { elements} from "./elements";

import productsData from "../../static/mockData/popularProductsData";

const LoadMoreModule = function () {
    let skip = 0;
    let take = 4;

    const productsAPI = () => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(productsData), 1000)
        });
    };

    const getProducts = (click) => {
        click.preventDefault();
        let products;

        productsAPI(skip)
            .then(productsData => {
                const t = Array.from(productsData);

               showProducts(t.splice(skip, take));
               skip += take;

                if (productsData.length <= skip) {
                    //disable load more button
                    elements.loadMore[0].style.display = 'none';
                }
            });
    };

    const showProducts = data => {
        let itemsList = [];

        data.map((item) => {
            return itemsList.push(getProductMarkup(item))
        });

        elements.productList.append(itemsList);
    };

    const getProductMarkup = (item) => {
        return (
            `<div class="popular-product-item">
                    <div class="popular-item_inner-content">
                        <a href="productDetailsPage.html"><img class="product-img" src="${item.imgUrl}" alt="item"></a>
                        <div class="col-xl-12 popular-item-name text-center">
                            <a href="productDetailsPage.html"><h6>${item.name}</h6></a>
                            <a href="productDetailsPage.html"><h6 class="price">$ ${item.price}</h6></a>
                        </div>
                    </div>
                </div>`
        )
    };

    elements.loadMore[0].addEventListener('click', getProducts);
};

export default LoadMoreModule;



