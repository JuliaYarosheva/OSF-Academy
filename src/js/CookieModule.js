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
        document.cookie = "username=1; expires=Thu, 30 Apr 2020 12:00:00 UTC";
        modal.style.display = "none";
    };

    elements.acceptCookiesBtn[0].addEventListener('click', acceptCookies);

    (function () {
        if (!document.cookie) {
            window.setTimeout(showModal, 10000);
        }
    })();
};

export default CookieModule;