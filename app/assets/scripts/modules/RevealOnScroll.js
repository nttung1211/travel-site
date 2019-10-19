class RevealOnScroll {
    constructor(items, effectClass, offset) {
        this.items = items;
        this.effectClass = effectClass;
        this.offset = offset;
        this.events();
    }
    
    events() {
        this.hide();
        window.addEventListener(`scroll`, () => {
            this.reveal(this.items, this.effectClass, this.offset);
        });
    }
    
    hide() {
        this.items.forEach(item => {
            item.classList.add(`effects--hidden`);
        });
    }

    reveal(items, effectClass, offset) {
        items.forEach(item => {
            if (window.pageYOffset > item.offsetTop - offset) {
                item.classList.add(effectClass);
            }
        });
    }
}

export default RevealOnScroll;