/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/resto.jpg":
/*!***********************!*\
  !*** ./src/resto.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "72f31a61420a06876d28.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/landing.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ landingPage)
/* harmony export */ });
/* harmony import */ var _resto_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resto.jpg */ "./src/resto.jpg");


function landingPage() {

    let landing = document.createElement('div');
    landing.classList.add("landing");

    // Row 1
    let identityText = document.createElement('div');
    identityText.innerHTML = `<p> Family </p>Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident.
        <p>Quality product</p>  Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
        <p>Serve better</p>  Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.`;
    identityText.classList.add("text");

    let identityImage = document.createElement('div');
    identityImage.classList.add("image");
    // Add the image to our existing div.
    const restoImage = new Image();
    restoImage.src = _resto_jpg__WEBPACK_IMPORTED_MODULE_0__;

    identityImage.appendChild(restoImage);

    landing.appendChild(identityText);
    landing.appendChild(identityImage);

    // Row 2
    let identityText2 = document.createElement('div');
    identityText2.innerHTML = `<p> Family </p>Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident.
        <p>Quality product</p>  Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
        <p>Serve better</p>  Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.`;
    identityText2.classList.add("text");

    let identityImage2 = document.createElement('div');
    identityImage2.classList.add("image");

    // Add the image to our existing div.
    const restoImage2 = new Image();
    restoImage2.src = _resto_jpg__WEBPACK_IMPORTED_MODULE_0__;

    identityImage2.appendChild(restoImage2);

    landing.appendChild(identityImage2);
    landing.appendChild(identityText2);

    return landing;
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZGluZy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNmdUM7O0FBRXhCOztBQUVmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHVDQUFZOztBQUVqQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsdUNBQVk7O0FBRWxDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvbGFuZGluZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgTGFuZGluZ0ltYWdlIGZyb20gJy4vcmVzdG8uanBnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGFuZGluZ1BhZ2UoKSB7XG5cbiAgICBsZXQgbGFuZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxhbmRpbmcuY2xhc3NMaXN0LmFkZChcImxhbmRpbmdcIik7XG5cbiAgICAvLyBSb3cgMVxuICAgIGxldCBpZGVudGl0eVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpZGVudGl0eVRleHQuaW5uZXJIVE1MID0gYDxwPiBGYW1pbHkgPC9wPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBvZmZpY2lhIGV4Y2VwdGV1ciBleCBmdWdpYXQgcmVwcmVoZW5kZXJpdCBlbmltIGxhYm9yZSBjdWxwYSBzaW50IGFkIG5pc2kgTG9yZW0gcGFyaWF0dXIgbW9sbGl0IGV4IGVzc2UgZXhlcmNpdGF0aW9uIGFtZXQuIE5pc2kgYW5pbSBjdXBpZGF0YXQgZXhjZXB0ZXVyIG9mZmljaWEuIFJlcHJlaGVuZGVyaXQgbm9zdHJ1ZCBub3N0cnVkIGlwc3VtIExvcmVtIGVzdCBhbGlxdWlwIGFtZXQgdm9sdXB0YXRlIHZvbHVwdGF0ZSBkb2xvciBtaW5pbSBudWxsYSBlc3QgcHJvaWRlbnQuXG4gICAgICAgIDxwPlF1YWxpdHkgcHJvZHVjdDwvcD4gIE5vc3RydWQgb2ZmaWNpYSBwYXJpYXR1ciB1dCBvZmZpY2lhLiBTaXQgaXJ1cmUgZWxpdCBlc3NlIGVhIG51bGxhIHN1bnQgZXggb2NjYWVjYXQgcmVwcmVoZW5kZXJpdCBjb21tb2RvIG9mZmljaWEgZG9sb3IgTG9yZW0gZHVpcyBsYWJvcmlzIGN1cGlkYXRhdCBvZmZpY2lhIHZvbHVwdGF0ZS4gQ3VscGEgcHJvaWRlbnQgYWRpcGlzaWNpbmcgaWQgbnVsbGEgbmlzaSBsYWJvcmlzIGV4IGluIExvcmVtIHN1bnQgZHVpcyBvZmZpY2lhIGVpdXNtb2QuIEFsaXF1YSByZXByZWhlbmRlcml0IGNvbW1vZG8gZXggbm9uIGV4Y2VwdGV1ciBkdWlzIHN1bnQgdmVsaXQgZW5pbS4gVm9sdXB0YXRlIGxhYm9yaXMgc2ludCBjdXBpZGF0YXQgdWxsYW1jbyB1dCBlYSBjb25zZWN0ZXR1ciBldCBlc3QgY3VscGEgZXQgY3VscGEgZHVpcy5cbiAgICAgICAgPHA+U2VydmUgYmV0dGVyPC9wPiAgTm9zdHJ1ZCBvZmZpY2lhIHBhcmlhdHVyIHV0IG9mZmljaWEuIFNpdCBpcnVyZSBlbGl0IGVzc2UgZWEgbnVsbGEgc3VudCBleCBvY2NhZWNhdCByZXByZWhlbmRlcml0IGNvbW1vZG8gb2ZmaWNpYSBkb2xvciBMb3JlbSBkdWlzIGxhYm9yaXMgY3VwaWRhdGF0IG9mZmljaWEgdm9sdXB0YXRlLiBDdWxwYSBwcm9pZGVudCBhZGlwaXNpY2luZyBpZCBudWxsYSBuaXNpIGxhYm9yaXMgZXggaW4gTG9yZW0gc3VudCBkdWlzIG9mZmljaWEgZWl1c21vZC4gQWxpcXVhIHJlcHJlaGVuZGVyaXQgY29tbW9kbyBleCBub24gZXhjZXB0ZXVyIGR1aXMgc3VudCB2ZWxpdCBlbmltLmA7XG4gICAgaWRlbnRpdHlUZXh0LmNsYXNzTGlzdC5hZGQoXCJ0ZXh0XCIpO1xuXG4gICAgbGV0IGlkZW50aXR5SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpZGVudGl0eUltYWdlLmNsYXNzTGlzdC5hZGQoXCJpbWFnZVwiKTtcbiAgICAvLyBBZGQgdGhlIGltYWdlIHRvIG91ciBleGlzdGluZyBkaXYuXG4gICAgY29uc3QgcmVzdG9JbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIHJlc3RvSW1hZ2Uuc3JjID0gTGFuZGluZ0ltYWdlO1xuXG4gICAgaWRlbnRpdHlJbWFnZS5hcHBlbmRDaGlsZChyZXN0b0ltYWdlKTtcblxuICAgIGxhbmRpbmcuYXBwZW5kQ2hpbGQoaWRlbnRpdHlUZXh0KTtcbiAgICBsYW5kaW5nLmFwcGVuZENoaWxkKGlkZW50aXR5SW1hZ2UpO1xuXG4gICAgLy8gUm93IDJcbiAgICBsZXQgaWRlbnRpdHlUZXh0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGlkZW50aXR5VGV4dDIuaW5uZXJIVE1MID0gYDxwPiBGYW1pbHkgPC9wPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBvZmZpY2lhIGV4Y2VwdGV1ciBleCBmdWdpYXQgcmVwcmVoZW5kZXJpdCBlbmltIGxhYm9yZSBjdWxwYSBzaW50IGFkIG5pc2kgTG9yZW0gcGFyaWF0dXIgbW9sbGl0IGV4IGVzc2UgZXhlcmNpdGF0aW9uIGFtZXQuIE5pc2kgYW5pbSBjdXBpZGF0YXQgZXhjZXB0ZXVyIG9mZmljaWEuIFJlcHJlaGVuZGVyaXQgbm9zdHJ1ZCBub3N0cnVkIGlwc3VtIExvcmVtIGVzdCBhbGlxdWlwIGFtZXQgdm9sdXB0YXRlIHZvbHVwdGF0ZSBkb2xvciBtaW5pbSBudWxsYSBlc3QgcHJvaWRlbnQuXG4gICAgICAgIDxwPlF1YWxpdHkgcHJvZHVjdDwvcD4gIE5vc3RydWQgb2ZmaWNpYSBwYXJpYXR1ciB1dCBvZmZpY2lhLiBTaXQgaXJ1cmUgZWxpdCBlc3NlIGVhIG51bGxhIHN1bnQgZXggb2NjYWVjYXQgcmVwcmVoZW5kZXJpdCBjb21tb2RvIG9mZmljaWEgZG9sb3IgTG9yZW0gZHVpcyBsYWJvcmlzIGN1cGlkYXRhdCBvZmZpY2lhIHZvbHVwdGF0ZS4gQ3VscGEgcHJvaWRlbnQgYWRpcGlzaWNpbmcgaWQgbnVsbGEgbmlzaSBsYWJvcmlzIGV4IGluIExvcmVtIHN1bnQgZHVpcyBvZmZpY2lhIGVpdXNtb2QuIEFsaXF1YSByZXByZWhlbmRlcml0IGNvbW1vZG8gZXggbm9uIGV4Y2VwdGV1ciBkdWlzIHN1bnQgdmVsaXQgZW5pbS4gVm9sdXB0YXRlIGxhYm9yaXMgc2ludCBjdXBpZGF0YXQgdWxsYW1jbyB1dCBlYSBjb25zZWN0ZXR1ciBldCBlc3QgY3VscGEgZXQgY3VscGEgZHVpcy5cbiAgICAgICAgPHA+U2VydmUgYmV0dGVyPC9wPiAgTm9zdHJ1ZCBvZmZpY2lhIHBhcmlhdHVyIHV0IG9mZmljaWEuIFNpdCBpcnVyZSBlbGl0IGVzc2UgZWEgbnVsbGEgc3VudCBleCBvY2NhZWNhdCByZXByZWhlbmRlcml0IGNvbW1vZG8gb2ZmaWNpYSBkb2xvciBMb3JlbSBkdWlzIGxhYm9yaXMgY3VwaWRhdGF0IG9mZmljaWEgdm9sdXB0YXRlLiBDdWxwYSBwcm9pZGVudCBhZGlwaXNpY2luZyBpZCBudWxsYSBuaXNpIGxhYm9yaXMgZXggaW4gTG9yZW0gc3VudCBkdWlzIG9mZmljaWEgZWl1c21vZC4gQWxpcXVhIHJlcHJlaGVuZGVyaXQgY29tbW9kbyBleCBub24gZXhjZXB0ZXVyIGR1aXMgc3VudCB2ZWxpdCBlbmltLmA7XG4gICAgaWRlbnRpdHlUZXh0Mi5jbGFzc0xpc3QuYWRkKFwidGV4dFwiKTtcblxuICAgIGxldCBpZGVudGl0eUltYWdlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGlkZW50aXR5SW1hZ2UyLmNsYXNzTGlzdC5hZGQoXCJpbWFnZVwiKTtcblxuICAgIC8vIEFkZCB0aGUgaW1hZ2UgdG8gb3VyIGV4aXN0aW5nIGRpdi5cbiAgICBjb25zdCByZXN0b0ltYWdlMiA9IG5ldyBJbWFnZSgpO1xuICAgIHJlc3RvSW1hZ2UyLnNyYyA9IExhbmRpbmdJbWFnZTtcblxuICAgIGlkZW50aXR5SW1hZ2UyLmFwcGVuZENoaWxkKHJlc3RvSW1hZ2UyKTtcblxuICAgIGxhbmRpbmcuYXBwZW5kQ2hpbGQoaWRlbnRpdHlJbWFnZTIpO1xuICAgIGxhbmRpbmcuYXBwZW5kQ2hpbGQoaWRlbnRpdHlUZXh0Mik7XG5cbiAgICByZXR1cm4gbGFuZGluZztcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==