/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	
/******/ 	
<<<<<<< HEAD:public/js/show_scripts.js
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
  !*** ./resources/js/reca_show_scripts.js ***!
  \*******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery_ui_ui_widgets_datepicker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery-ui/ui/widgets/datepicker.js */ "./node_modules/jquery-ui/ui/widgets/datepicker.js");
/* harmony import */ var jquery_ui_ui_widgets_datepicker_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery_ui_ui_widgets_datepicker_js__WEBPACK_IMPORTED_MODULE_1__);

window.$ = window.jQuery = (jquery__WEBPACK_IMPORTED_MODULE_0___default());

var sw = 0;
var divs = 0;
var x = 0;

window.show_input = function show_input(id) {
  var input = document.getElementById("input_" + id);
  var button = document.getElementById("button_" + id);
  var div_input = document.getElementById("div_input_" + id);
  var div = document.getElementById("div_" + id);

  if (window.getComputedStyle(input).display === "none") {
    sw += 1;
    input.hidden = false;
    input.required = true;
    button.hidden = false;
    div_input.className = "form-row";
    div_input.style = "padding-bottom: 15px; height: 100%";
    div.className = "borrosont form-row";
    div.style = "filter: blur(0);";
    divs = document.getElementsByClassName("borroso");

    for (x = 0; x < divs.length; x++) {
      divs[x].style = "filter: blur(2px)";
    }

    ;
  } else {
    sw -= 1;
    input.value = "";
    input.hidden = true;
    input.required = false;
    button.hidden = true;
    div_input.className = "oculto form-row";
    div_input.style = "padding-bottom: 0px; height: 0px";
    div.className = "borroso form-row";
    div.style = "filter: blur(2px);";
    divs = document.getElementsByClassName("borroso");

    for (x = 0; x < divs.length; x++) {
      divs[x].style = "filter: blur(2px);";
    }

    ;

    if (sw == 0) {
      divs = document.getElementsByClassName("borroso");

      for (x = 0; x < divs.length; x++) {
        divs[x].style = "filter: blur(0);";
      }

      ;
    }

    ;
  }
};

window.ajax_method = function ajax_method(id) {
  var input_id;

  for (x = 99; x > 0; x--) {
    if (parseInt(id.slice(-x)) >= 0) {
      input_id = parseInt(id.slice(-x));
      break;
    }
  }

  var input = document.getElementById("input_" + input_id);

  if (input.value === "") {
    alert("Ingrese una solución válida");
  } else {
    var div = document.getElementById("div_" + input_id);
    var div_input = document.getElementById("div_input_" + input_id);
    jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
      type: 'post',
      url: "/reca/update",
      dataType: 'html',
      data: {
        "_token": jquery__WEBPACK_IMPORTED_MODULE_0___default()("meta[name='csrf-token']").attr("content"),
        descripcion: input.value.toString(),
        id_input: input_id.toString()
      },
      success: function success(response) {
        div.remove();
        div_input.remove();
        divs = document.getElementsByClassName("borroso");

        for (x = 0; x < divs.length; x++) {
          divs[x].style = "filter: blur(0);";
        }

        ;
        sw -= 1;
      }
    });
  }
}; // Get the modal


var modal = document.getElementById("myModal"); // Get the image and insert it inside the modal - use its "alt" text as a caption

var modalImg = document.getElementById("img01");

window.imgClick = function imgClick(id) {
  var input_id;

  for (x = 99; x > 0; x--) {
    if (parseInt(id.slice(-x)) >= 0) {
      input_id = parseInt(id.slice(-x));
      break;
    }
  }

  var img = document.getElementById("img_" + input_id);
  modal.style.display = "block";
  modalImg.src = img.src;
}; // Get the <span> element that closes the modal


var span = document.getElementsByClassName("close")[0]; // When the user clicks on <span> (x), close the modal

span.onclick = function () {
  modal.style.display = "none";
};
})();

>>>>>>> 00cda4acb3797cb18199c6ecee158af8581fe52d:public/js/reca_show_scripts.js
/******/ })()
;