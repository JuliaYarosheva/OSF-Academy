import IndicatorModule from './IndicatorModule';
import PasswordModule from './PasswordModule';
import CopyrightModule from './CopyrightModule';
import LoadMoreModule from './LoadMoreModule';
import ProductDetailsPageModule from "./ProductDetailsPageModule";
import HeaderModule from "./HeaderModule";
import { CollapserModule, CollapseContentModule } from "./CollapserModule";
import BurgerMenuModule from "./BurgerMenuModule";
import CategoriesModule from "./CategoriesModule";
import CookieModule from "./CookieModule";
import ShoppingCartModule from "./ShoppingCartModule";

(() => {
    CookieModule();
    HeaderModule();
    IndicatorModule();
    PasswordModule();
    CopyrightModule();
    LoadMoreModule();
    ProductDetailsPageModule();
    CollapserModule();
    CollapseContentModule();
    BurgerMenuModule();
    CategoriesModule();
    ShoppingCartModule();
})();