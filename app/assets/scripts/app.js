// let man = require(`./modules/Person`);
// import Person from './modules/Person.js';
// import $ from 'jquery';
import RevealOnScroll from './modules/RevealOnScroll.js';
import StickyHeader from './modules/StickyHeader.js';
import Navigation from './modules/Navigation.js';
import ClickToToggle from './modules/ClickToToggle.js';



new RevealOnScroll(document.querySelectorAll('.feature-item'), 'effects--fade-in', window.innerHeight * 2 / 3);
new RevealOnScroll(document.querySelectorAll('.testimonial'), 'effects--fade-in', window.innerHeight * 3 / 4);
new Navigation(document.querySelectorAll('.nav a'), document.querySelectorAll('.page-section'));
new StickyHeader();
new ClickToToggle(  ['.hamburger'],
                    ['.hamburger', '.header', '.header__right-side'],
                    ['hamburger--cross', 'header--is-expanded', 'header__right-side--visible']  );

new ClickToToggle(  ['.header .btn', '.large-hero .btn', '.footer .btn', '.lightbox__close'],
                    ['.lightbox'],
                    ['lightbox--visible'],
                    true   );