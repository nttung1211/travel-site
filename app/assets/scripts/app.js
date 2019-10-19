// let man = require(`./modules/Person`);
// import Person from './modules/Person.js';
// import $ from 'jquery';
import RevealOnScroll from './modules/RevealOnScroll.js';
import Hamburger from './modules/Hamburger.js';
import StickyHeader from './modules/StickyHeader.js';
import Navigation from './modules/Navigation.js';


new Hamburger();
new RevealOnScroll(document.querySelectorAll(`.feature-item`), `effects--fade-in`, window.innerHeight * 2 / 3);
new RevealOnScroll(document.querySelectorAll(`.testimonial`), `effects--fade-in`, window.innerHeight * 3 / 4);
new StickyHeader();
new Navigation(document.querySelectorAll(`.nav a`), document.querySelectorAll(`.page-section`));
