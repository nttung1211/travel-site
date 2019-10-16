class Hamburger {
    constructor() {
        this.header = document.querySelector(`.header`);
        this.hamburger = document.querySelector(`.hamburger`);
        this.rightSide = document.querySelector(`.header__right-side`);
        this.events();
    }

    events() {
        this.hamburger.addEventListener(`click`, this.toggleRightSide.bind(this));
    }

    toggleRightSide() {
        this.rightSide.classList.toggle(`header__right-side--visible`);
        this.header.classList.toggle(`header--is-expanded`);
    }
}

export default Hamburger;