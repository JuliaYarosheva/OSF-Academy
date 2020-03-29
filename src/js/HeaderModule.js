import { elements} from "./elements";

const HeaderModule = function () {
    const sticky = elements.desktopHeader[0].offsetTop;

    const stickyHeader = () => {
        if (window.pageYOffset > sticky) {
            elements.desktopHeader[0].classList.add("sticky");
        } else {
            elements.desktopHeader[0].classList.remove("sticky");
        }
    };

    window.onscroll = function() {stickyHeader()};
};

export default HeaderModule;