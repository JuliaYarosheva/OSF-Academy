import { elements } from './elements';

const CopyrightModule = function() {
    // Copyright
    const copyrightYear = () => {
        return new Date().getFullYear();
    };

    elements.copyright.each((index, elem) => {
        elem.textContent = `© Copyright ${copyrightYear()}. All Rights Reserved.`;
    });
};

export default CopyrightModule;