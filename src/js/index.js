import IndicatorModule from './IndicatorModule';
import PasswordModule from './PasswordModule';
import CopyrightModule from './CopyrightModule';
import LoadMoreModule from './LoadMoreModule';
import ProductDetailsPageModule from "./ProductDetailsPageModule";
import HeaderModule from "./HeaderModule";
import CollapserModule from "./CollapserModule";
import BurgerMenuModule from "./BurgerMenuModule";
import CategoriesModule from "./CategoriesModule";
import CookieModule from "./CookieModule";

(() => {
    CookieModule();
    HeaderModule();
    IndicatorModule();
    PasswordModule();
    CopyrightModule();
    LoadMoreModule();
    ProductDetailsPageModule();
    CollapserModule();
    BurgerMenuModule();
    CategoriesModule();
})();