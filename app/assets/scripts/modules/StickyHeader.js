class StickyHeader {
    constructor() {
        this.header = document.querySelector(`.header`);
        this.events();
    }

    events() {
        window.addEventListener(`scroll`, this.stick.bind(this));
    }

    stick() {
        if (window.pageYOffset > 0) {
            this.header.classList.add(`header--sticky`);
        } else {
            this.header.classList.remove(`header--sticky`);
        }
    }
}

export default StickyHeader;