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

var _Hamburger = __webpack_require__(2);

var _Hamburger2 = _interopRequireDefault(_Hamburger);

var _StickyHeader = __webpack_require__(3);

var _StickyHeader2 = _interopRequireDefault(_StickyHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _Hamburger2.default(); // let man = require(`./modules/Person`);
// import Person from './modules/Person.js';
// import $ from 'jquery';

new _RevealOnScroll2.default(document.querySelectorAll('.feature-item'), 'effects--fade-in', window.innerHeight * 2 / 3);
new _RevealOnScroll2.default(document.querySelectorAll('.testimonial'), 'effects--fade-in', window.innerHeight * 3 / 4);
new _StickyHeader2.default();

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

var Hamburger = function () {
    function Hamburger() {
        _classCallCheck(this, Hamburger);

        this.header = document.querySelector(".header");
        this.hamburger = document.querySelector(".hamburger");
        this.rightSide = document.querySelector(".header__right-side");
        this.events();
    }

    _createClass(Hamburger, [{
        key: "events",
        value: function events() {
            this.hamburger.addEventListener("click", this.toggleRightSide.bind(this));
        }
    }, {
        key: "toggleRightSide",
        value: function toggleRightSide() {
            this.rightSide.classList.toggle("header__right-side--visible");
            this.header.classList.toggle("header--is-expanded");
            this.hamburger.classList.toggle("hamburger--cross");
        }
    }]);

    return Hamburger;
}();

exports.default = Hamburger;

/***/ }),
/* 3 */
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
        this.ourBeginning = document.querySelector("#our-beginning");
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
            if (window.pageYOffset > this.ourBeginning.offsetTop - 110) {
                this.header.classList.add("header--sticky");
            } else {
                this.header.classList.remove("header--sticky");
            }
        }
    }]);

    return StickyHeader;
}();

exports.default = StickyHeader;

/***/ })
/******/ ]);