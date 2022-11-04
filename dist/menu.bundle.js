/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menu)
/* harmony export */ });

function menu() {

    // let title = document.createElement('h2');
    // title.innerHTML = 'Menu'
    // title.id = 'menu'

    let menu = document.createElement('div');
    menu.classList.add("menu");

    let identityText = document.createElement('div');
    identityText.innerHTML = `<p> Entrée </p>Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident.
        <p>Plat</p>  Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
        <p>Dessert</p>  Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.`;
    identityText.classList.add("text");

    // menu.appendChild(title);
    menu.appendChild(identityText);

    return menu;
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTGU7O0FBRWY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudSgpIHtcblxuICAgIC8vIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgLy8gdGl0bGUuaW5uZXJIVE1MID0gJ01lbnUnXG4gICAgLy8gdGl0bGUuaWQgPSAnbWVudSdcblxuICAgIGxldCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcblxuICAgIGxldCBpZGVudGl0eVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpZGVudGl0eVRleHQuaW5uZXJIVE1MID0gYDxwPiBFbnRyw6llIDwvcD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgb2ZmaWNpYSBleGNlcHRldXIgZXggZnVnaWF0IHJlcHJlaGVuZGVyaXQgZW5pbSBsYWJvcmUgY3VscGEgc2ludCBhZCBuaXNpIExvcmVtIHBhcmlhdHVyIG1vbGxpdCBleCBlc3NlIGV4ZXJjaXRhdGlvbiBhbWV0LiBOaXNpIGFuaW0gY3VwaWRhdGF0IGV4Y2VwdGV1ciBvZmZpY2lhLiBSZXByZWhlbmRlcml0IG5vc3RydWQgbm9zdHJ1ZCBpcHN1bSBMb3JlbSBlc3QgYWxpcXVpcCBhbWV0IHZvbHVwdGF0ZSB2b2x1cHRhdGUgZG9sb3IgbWluaW0gbnVsbGEgZXN0IHByb2lkZW50LlxuICAgICAgICA8cD5QbGF0PC9wPiAgTm9zdHJ1ZCBvZmZpY2lhIHBhcmlhdHVyIHV0IG9mZmljaWEuIFNpdCBpcnVyZSBlbGl0IGVzc2UgZWEgbnVsbGEgc3VudCBleCBvY2NhZWNhdCByZXByZWhlbmRlcml0IGNvbW1vZG8gb2ZmaWNpYSBkb2xvciBMb3JlbSBkdWlzIGxhYm9yaXMgY3VwaWRhdGF0IG9mZmljaWEgdm9sdXB0YXRlLiBDdWxwYSBwcm9pZGVudCBhZGlwaXNpY2luZyBpZCBudWxsYSBuaXNpIGxhYm9yaXMgZXggaW4gTG9yZW0gc3VudCBkdWlzIG9mZmljaWEgZWl1c21vZC4gQWxpcXVhIHJlcHJlaGVuZGVyaXQgY29tbW9kbyBleCBub24gZXhjZXB0ZXVyIGR1aXMgc3VudCB2ZWxpdCBlbmltLiBWb2x1cHRhdGUgbGFib3JpcyBzaW50IGN1cGlkYXRhdCB1bGxhbWNvIHV0IGVhIGNvbnNlY3RldHVyIGV0IGVzdCBjdWxwYSBldCBjdWxwYSBkdWlzLlxuICAgICAgICA8cD5EZXNzZXJ0PC9wPiAgTm9zdHJ1ZCBvZmZpY2lhIHBhcmlhdHVyIHV0IG9mZmljaWEuIFNpdCBpcnVyZSBlbGl0IGVzc2UgZWEgbnVsbGEgc3VudCBleCBvY2NhZWNhdCByZXByZWhlbmRlcml0IGNvbW1vZG8gb2ZmaWNpYSBkb2xvciBMb3JlbSBkdWlzIGxhYm9yaXMgY3VwaWRhdGF0IG9mZmljaWEgdm9sdXB0YXRlLiBDdWxwYSBwcm9pZGVudCBhZGlwaXNpY2luZyBpZCBudWxsYSBuaXNpIGxhYm9yaXMgZXggaW4gTG9yZW0gc3VudCBkdWlzIG9mZmljaWEgZWl1c21vZC4gQWxpcXVhIHJlcHJlaGVuZGVyaXQgY29tbW9kbyBleCBub24gZXhjZXB0ZXVyIGR1aXMgc3VudCB2ZWxpdCBlbmltLiBWb2x1cHRhdGUgbGFib3JpcyBzaW50IGN1cGlkYXRhdCB1bGxhbWNvIHV0IGVhIGNvbnNlY3RldHVyIGV0IGVzdCBjdWxwYSBldCBjdWxwYSBkdWlzLmA7XG4gICAgaWRlbnRpdHlUZXh0LmNsYXNzTGlzdC5hZGQoXCJ0ZXh0XCIpO1xuXG4gICAgLy8gbWVudS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChpZGVudGl0eVRleHQpO1xuXG4gICAgcmV0dXJuIG1lbnU7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=