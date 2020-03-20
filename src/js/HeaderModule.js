import { elements} from "./elements";

const HeaderModule = function () {

    const sticky = elements.header[0].offsetTop;

    const stickyHeader = () => {
        if (window.pageYOffset > sticky) {
            elements.header[0].classList.add("sticky");
        } else {
            elements.header[0].classList.remove("sticky");
        }
    };

    window.onscroll = function() {stickyHeader()};
};

export default HeaderModule;