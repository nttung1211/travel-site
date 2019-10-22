import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';

class Navigation {
    constructor(links, sections) {
        this.links = document.querySelectorAll(links);
        this.sections = document.querySelectorAll(sections);
        this.createWaypoint();
        this.addSmoothScroll();
        this.refreshWaypoint();
    }

    addSmoothScroll() {
        $(this.links).smoothScroll();
    }

    refreshWaypoint() {
        document.querySelectorAll(`.lazyload`).forEach(lazyImage => lazyImage.addEventListener(`load`, () => {
            Waypoint.refreshAll();
        }))
    }

    createWaypoint(){
        this.sections.forEach(section => {
            let links = this.links;
            new Waypoint({
                element: section,
                handler: (direction) => {
                    if (direction === `down`) {
                        let matchingLink = document.querySelector(`[href='#${section.id}']`);
                        links.forEach(link => link.classList.remove(`active`));
                        matchingLink.classList.add(`active`);
                    }
                },
                offset: `20%`
            });

            new Waypoint({
                element: section,
                handler: (direction) => {
                    if (direction === `up`) {
                        let matchingLink = document.querySelector(`[href='#${section.id}']`);
                        links.forEach(link => link.classList.remove(`active`));
                        matchingLink.classList.add(`active`);
                    }
                },
                offset: `-20%`
            });
        })
    }
}

// class Navigation {
//     constructor(links, sections) {
//         this.links = links;
//         this.sections = sections;
//         this.oldScroll = window.pageYOffset;
//         this.events();
//     }
    
//     events() {
//         this.links.forEach(link => {
//             link.addEventListener(`click`, (e) => {
//                 e.preventDefault();
//                 this.scrollSmoothly(document.querySelector(link.getAttribute(`href`)));
//             });
//         });

//         window.addEventListener(`scroll`, () => {
//             this.hightlight(this.sections, this.links, this.findDirection());
//         })
//     }

//     findDirection() {
//         if (window.pageYOffset > this.oldScroll) {
//             var direction = 'down';
//         } else {
//             var direction = 'up';
//         }
//         this.oldScroll = window.pageYOffset;
//         return direction;
//     }

//     hightlight(sections, links, direction) {
//         links.forEach(link => link.classList.remove(`active`));
//         for (let i = 0; i < sections.length; i++) {
//             let matchingLink = document.querySelector(`[href="#${sections[i].id}"]`);
//             let offset = direction === 'down' ? window.innerHeight * 4 / 10 : window.innerHeight * 6 / 10;
//             if (i === 2) {
//                 if (window.pageYOffset > sections[i].offsetTop - offset) {
//                     matchingLink.classList.add(`active`);
//                 }
//             } else {
//                 if (window.pageYOffset > sections[i].offsetTop - offset && window.pageYOffset < sections[i + 1].offsetTop - offset) {
//                     matchingLink.classList.add(`active`);
//                 }
//             }
//         }
//     }

//     scrollSmoothly(dest) {
//         window.scrollTo({
//             top: dest.offsetTop - 50,
//             left: 0,
//             behavior: "smooth"
//         })
//     }
// }

export default Navigation;