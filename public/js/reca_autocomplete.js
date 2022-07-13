/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	
/******/ 	
<<<<<<< HEAD:public/js/autocomplete.js
=======
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*******************************************!*\
  !*** ./resources/js/reca_autocomplete.js ***!
  \*******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery_ui_ui_widgets_datepicker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery-ui/ui/widgets/datepicker.js */ "./node_modules/jquery-ui/ui/widgets/datepicker.js");
/* harmony import */ var jquery_ui_ui_widgets_datepicker_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery_ui_ui_widgets_datepicker_js__WEBPACK_IMPORTED_MODULE_1__);

window.$ = window.jQuery = (jquery__WEBPACK_IMPORTED_MODULE_0___default());

var x = 0;

window.autocompletar = function autocompletar(id) {
  var input = document.getElementById(id);
  var input_id;

  for (x = 999; x > 0; x--) {
    if (parseInt(id.slice(-x))) {
      input_id = parseInt(id.slice(-x));
      break;
    }
  }

  var Descripcion = document.getElementById("Descripcion_" + input_id);
  var Grupo = document.getElementById("Grupo_" + input_id);
  var Cantidad = document.getElementById("Cantidad_" + input_id);
  var Observacion = document.getElementById("Observacion_" + input_id);
  var Deposito = document.getElementById("Deposito_" + input_id);
  jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
    type: 'GET',
    url: "/reca/search",
    dataType: 'html',
    data: {
      term: input.value
    },
    success: function success(response) {
      try {
        var values = JSON.parse(response);
        Descripcion.value = values.descripcion_producto;
        Grupo.value = values.descripcion_grupo;
        Observacion.required = true;
        Cantidad.required = true;
        Deposito.required = true;
      } catch (_unused) {
        Descripcion.value = "";
        Grupo.value = "";
        Observacion.required = false;
        Cantidad.required = false;
        Deposito.required = false;
      }
    }
  });
};
})();

>>>>>>> 00cda4acb3797cb18199c6ecee158af8581fe52d:public/js/reca_autocomplete.js
/******/ })()
;