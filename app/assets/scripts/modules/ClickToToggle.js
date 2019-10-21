class ClickToToggle {
    constructor(triggers, affectedElements, effects, pressEscape) {
        this.triggers = triggers.map(trigger => document.querySelector(trigger));
        this.affectedElements = affectedElements.map(ele => document.querySelector(ele));
        this.effects = effects;
        this.pressEscape = pressEscape;
        this.toggle();
    }

    toggle() {
        this.triggers.forEach(trigger => {
            trigger.addEventListener(`click`, (e) => {
                e.preventDefault();
                for (let i = 0; i < this.effects.length; i++) {
                    this.affectedElements[i].classList.toggle(this.effects[i]);
                }
            });
        });

        if (this.pressEscape) {
            document.addEventListener(`keyup`, (e) => {
                if (e.keyCode === 27) {
                    for (let i = 0; i < this.effects.length; i++) {
                        this.affectedElements[i].classList.remove(this.effects[i]);
                    }
                }
            })
        }
    }
}

export default ClickToToggle;