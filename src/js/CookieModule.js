import { elements } from './elements';

const CookieModule = function() {

    const modal = elements.cookiesModal[0];
    const span = elements.closeModalBtn[0];
    span.onclick = function() {
        modal.style.display = "none";
    };
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    function showModal() {
            modal.style.display = "block";
    }

    const acceptCookies = () => {
        document.cookie = "username=Julia Yarosheva; expires=Thu, 30 Apr 2020 12:00:00 UTC";
        modal.style.display = "none";
    };

    elements.acceptCookiesBtn[0].addEventListener('click', acceptCookies);

    (function () {

        //document.cookie = "username= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
        if (!document.cookie) {
            window.setTimeout(showModal, 10000);
        }

    })();
};

export default CookieModule;