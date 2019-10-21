/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _RevealOnScroll = __webpack_require__(1);

var _RevealOnScroll2 = _interopRequireDefault(_RevealOnScroll);

var _StickyHeader = __webpack_require__(2);

var _StickyHeader2 = _interopRequireDefault(_StickyHeader);

var _Navigation = __webpack_require__(3);

var _Navigation2 = _interopRequireDefault(_Navigation);

var _ClickToToggle = __webpack_require__(4);

var _ClickToToggle2 = _interopRequireDefault(_ClickToToggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// let man = require(`./modules/Person`);
// import Person from './modules/Person.js';
// import $ from 'jquery';
new _RevealOnScroll2.default(document.querySelectorAll('.feature-item'), 'effects--fade-in', window.innerHeight * 2 / 3);
new _RevealOnScroll2.default(document.querySelectorAll('.testimonial'), 'effects--fade-in', window.innerHeight * 3 / 4);
new _StickyHeader2.default();
new _Navigation2.default(document.querySelectorAll('.nav a'), document.querySelectorAll('.page-section'));
new _ClickToToggle2.default(['.hamburger'], ['.hamburger', '.header', '.header__right-side'], ['hamburger--cross', 'header--is-expanded', 'header__right-side--visible']);

new _ClickToToggle2.default(['.header .btn', '.large-hero .btn', '.footer .btn', '.lightbox__close'], ['.lightbox'], ['lightbox--visible'], true);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RevealOnScroll = function () {
    function RevealOnScroll(items, effectClass, offset) {
        _classCallCheck(this, RevealOnScroll);

        this.items = items;
        this.effectClass = effectClass;
        this.offset = offset;
        this.events();
    }

    _createClass(RevealOnScroll, [{
        key: "events",
        value: function events() {
            var _this = this;

            this.hide();
            window.addEventListener("scroll", function () {
                _this.reveal(_this.items, _this.effectClass, _this.offset);
            });
        }
    }, {
        key: "hide",
        value: function hide() {
            this.items.forEach(function (item) {
                item.classList.add("effects--hidden");
            });
        }
    }, {
        key: "reveal",
        value: function reveal(items, effectClass, offset) {
            items.forEach(function (item) {
                if (window.pageYOffset > item.offsetTop - offset) {
                    item.classList.add(effectClass);
                }
            });
        }
    }]);

    return RevealOnScroll;
}();

exports.default = RevealOnScroll;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StickyHeader = function () {
    function StickyHeader() {
        _classCallCheck(this, StickyHeader);

        this.header = document.querySelector(".header");
        this.events();
    }

    _createClass(StickyHeader, [{
        key: "events",
        value: function events() {
            window.addEventListener("scroll", this.stick.bind(this));
        }
    }, {
        key: "stick",
        value: function stick() {
            if (window.pageYOffset > 0) {
                this.header.classList.add("header--sticky");
            } else {
                this.header.classList.remove("header--sticky");
            }
        }
    }]);

    return StickyHeader;
}();

exports.default = StickyHeader;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Navigation = function () {
    function Navigation(links, sections) {
        _classCallCheck(this, Navigation);

        this.links = links;
        this.sections = sections;
        this.oldScroll = window.pageYOffset;
        this.events();
    }

    _createClass(Navigation, [{
        key: 'events',
        value: function events() {
            var _this = this;

            this.links.forEach(function (link) {
                link.addEventListener('click', function (e) {
                    e.preventDefault();
                    _this.scrollSmoothly(document.querySelector(link.getAttribute('href')));
                });
            });

            window.addEventListener('scroll', function () {
                _this.hightlight(_this.sections, _this.links, _this.findDirection());
            });
        }
    }, {
        key: 'findDirection',
        value: function findDirection() {
            if (window.pageYOffset > this.oldScroll) {
                var direction = 'down';
            } else {
                var direction = 'up';
            }
            this.oldScroll = window.pageYOffset;
            return direction;
        }
    }, {
        key: 'hightlight',
        value: function hightlight(sections, links, direction) {
            links.forEach(function (link) {
                return link.classList.remove('active');
            });
            for (var i = 0; i < sections.length; i++) {
                var matchingLink = document.querySelector('[href="#' + sections[i].id + '"]');
                var offset = direction === 'down' ? window.innerHeight * 4 / 10 : window.innerHeight * 6 / 10;
                if (i === 2) {
                    if (window.pageYOffset > sections[i].offsetTop - offset) {
                        matchingLink.classList.add('active');
                    }
                } else {
                    if (window.pageYOffset > sections[i].offsetTop - offset && window.pageYOffset < sections[i + 1].offsetTop - offset) {
                        matchingLink.classList.add('active');
                    }
                }
            }
        }
    }, {
        key: 'scrollSmoothly',
        value: function scrollSmoothly(dest) {
            window.scrollTo({
                top: dest.offsetTop - 50,
                left: 0,
                behavior: "smooth"
            });
        }
    }]);

    return Navigation;
}();

exports.default = Navigation;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ClickToToggle = function () {
    function ClickToToggle(triggers, affectedElements, effects, pressEscape) {
        _classCallCheck(this, ClickToToggle);

        this.triggers = triggers.map(function (trigger) {
            return document.querySelector(trigger);
        });
        this.affectedElements = affectedElements.map(function (ele) {
            return document.querySelector(ele);
        });
        this.effects = effects;
        this.pressEscape = pressEscape;
        this.toggle();
    }

    _createClass(ClickToToggle, [{
        key: "toggle",
        value: function toggle() {
            var _this = this;

            this.triggers.forEach(function (trigger) {
                trigger.addEventListener("click", function (e) {
                    e.preventDefault();
                    for (var i = 0; i < _this.effects.length; i++) {
                        _this.affectedElements[i].classList.toggle(_this.effects[i]);
                    }
                });
            });

            if (this.pressEscape) {
                document.addEventListener("keyup", function (e) {
                    if (e.keyCode === 27) {
                        for (var i = 0; i < _this.effects.length; i++) {
                            _this.affectedElements[i].classList.remove(_this.effects[i]);
                        }
                    }
                });
            }
        }
    }]);

    return ClickToToggle;
}();

exports.default = ClickToToggle;

/***/ })
/******/ ]);