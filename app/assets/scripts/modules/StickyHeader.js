class StickyHeader {
    constructor() {
        this.header = document.querySelector(`.header`);
        this.ourBeginning = document.querySelector(`#our-beginning`);
        this.events();
    }

    events() {
        window.addEventListener(`scroll`, this.stick.bind(this));
    }

    stick() {
        if (window.pageYOffset > this.ourBeginning.offsetTop - 110) {
            this.header.classList.add(`header--sticky`);
        } else {
            this.header.classList.remove(`header--sticky`);
        }
    }
}

export default StickyHeader;