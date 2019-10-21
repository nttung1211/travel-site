class Navigation {
    constructor(links, sections) {
        this.links = links;
        this.sections = sections;
        this.oldScroll = window.pageYOffset;
        this.events();
    }

    events() {
        this.links.forEach(link => {
            link.addEventListener(`click`, (e) => {
                e.preventDefault();
                this.scrollSmoothly(document.querySelector(link.getAttribute(`href`)));
            });
        });

        window.addEventListener(`scroll`, () => {
            this.hightlight(this.sections, this.links, this.findDirection());
        })
    }

    findDirection() {
        if (window.pageYOffset > this.oldScroll) {
            var direction = 'down';
        } else {
            var direction = 'up';
        }
        this.oldScroll = window.pageYOffset;
        return direction;
    }
    
    hightlight(sections, links, direction) {
        links.forEach(link => link.classList.remove(`active`));
        for (let i = 0; i < sections.length; i++) {
            let matchingLink = document.querySelector(`[href="#${sections[i].id}"]`);
            let offset = direction === 'down' ? window.innerHeight * 4 / 10 : window.innerHeight * 6 / 10;
            if (i === 2) {
                if (window.pageYOffset > sections[i].offsetTop - offset) {
                    matchingLink.classList.add(`active`);
                }
            } else {
                if (window.pageYOffset > sections[i].offsetTop - offset && window.pageYOffset < sections[i + 1].offsetTop - offset) {
                    matchingLink.classList.add(`active`);
                }
            }
        }
    }

    scrollSmoothly(dest) {
        window.scrollTo({
            top: dest.offsetTop - 50,
            left: 0,
            behavior: "smooth"
        })
    }
}

export default Navigation;