import $ from 'jquery';
import RevealOnScroll from './modules/RevealOnScroll.js';
import StickyHeader from './modules/StickyHeader.js';
import Navigation from './modules/Navigation.js';
import ClickToToggle from './modules/ClickToToggle.js';


new RevealOnScroll('.feature-item', '85%');
new RevealOnScroll('.testimonial', '65%');
new Navigation('.header a:not(.btn)', '#hero, .page-section');
new StickyHeader();
new ClickToToggle(  ['.hamburger'],
                    ['.hamburger', '.header', '.header__right-side'],
                    ['hamburger--cross', 'header--is-expanded', 'header__right-side--visible']  );

new ClickToToggle(  ['.header .btn', '.large-hero .btn', '.footer .btn', '.lightbox__close'],
                    ['.lightbox'],
                    ['lightbox--visible'],
                    true   );