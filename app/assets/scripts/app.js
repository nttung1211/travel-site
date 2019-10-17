// let man = require(`./modules/Person`);
// import Person from './modules/Person.js';
// import $ from 'jquery';
import RevealOnScroll from './modules/RevealOnScroll';
import Hamburger from './modules/Hamburger.js';


new Hamburger();
new RevealOnScroll(document.querySelectorAll(`.feature-item`), `effects--fade-in`, window.innerHeight * 2 / 3);
new RevealOnScroll(document.querySelectorAll(`.testimonial`), `effects--fade-in`, window.innerHeight / 2);

