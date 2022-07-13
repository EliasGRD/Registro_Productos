/******/ (() => { // webpackBootstrap
<<<<<<< HEAD:public/js/scripts.js
/******/ 	"use strict";
/******/ 	
/******/ 	
=======
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./resources/js/reca_scripts.js ***!
  \**************************************/
var btn_add = document.getElementById("add");
var btn_delete = document.getElementById("delete");
var form_row = document.getElementById("form-row");
var cont = 7;

window.setImage = function setImage(id) {
  for (x = 99; x > 0; x--) {
    if (parseInt(id.slice(-x)) >= 0) {
      input_id = parseInt(id.slice(-x));
      break;
    }
  }

  labelImage = document.getElementById("Label_Imagen_" + input_id);
  labelImage.innerHTML = '<i id="img_' + input_id + '" class="fa fa-check" aria-hidden="true" style="font-size:24px"></i>';
};

btn_add.addEventListener("click", function event() {
  cont++; //input de imagen

  var divImagen = document.createElement("div");
  divImagen.id = "div_imagen_" + cont;
  divImagen.className = "image-upload col-md-1";
  labelImagen = document.createElement("label");
  labelImagen.setAttribute("for", "Imagen_" + cont);
  labelImagen.id = "Label_Imagen_" + cont;
  labelImagen.innerHTML = '<img id="img_' + cont + '" src="http://reca_nissei.test/images/upload.png" alt="Cargar-Imagen" class="upload-image" height="30" width="30">';
  var imagen = document.createElement("input");
  imagen.className = "custom-file-input";
  imagen.id = "Imagen_" + cont;
  imagen.name = "Imagen_" + cont;
  imagen.type = "file";
  imagen.accept = "image/*";
  imagen.placeholder = "Imagen";
  imagen.setAttribute("onchange", "setImage(this.id);");
  divImagen.appendChild(labelImagen);
  divImagen.appendChild(imagen); //input de sku

  var divSku = document.createElement("div");
  divSku.id = "div_sku_" + cont;
  divSku.className = "form-group col-md-1";
  var sku = document.createElement("input");
  sku.className = "input-data";
  sku.id = "SKU_" + cont;
  sku.name = "SKU_" + cont;
  sku.type = "text";
  sku.style = "width:70px";
  sku.placeholder = "SKU";
  sku.setAttribute("onkeyup", "autocompletar(this.id)");
  divSku.appendChild(sku); //input de descripcion

  var divDescripcion = document.createElement("div");
  divDescripcion.id = "div_descripcion_" + cont;
  divDescripcion.className = "form-group col-md-3";
  var descripcion = document.createElement("input");
  descripcion.className = "input-data-boxnt";
  descripcion.id = "Descripcion_" + cont;
  descripcion.name = "Descripcion_" + cont;
  descripcion.type = "text";
  descripcion.disabled = true;
  divDescripcion.appendChild(descripcion); //input de observacion

  var divObservacion = document.createElement("div");
  divObservacion.id = "div_observacion_" + cont;
  divObservacion.className = "form-group col-md-4";
  var observacion = document.createElement("input");
  observacion.className = "input-data";
  observacion.id = "Observacion_" + cont;
  observacion.name = "Observacion_" + cont;
  observacion.type = "text";
  observacion.placeholder = "Ingrese la observación aquí";
  divObservacion.appendChild(observacion); //input de cantidad

  var divCantidad = document.createElement("div");
  divCantidad.id = "div_cantidad_" + cont;
  divCantidad.className = "form-group col-md-1";
  var cantidad = document.createElement("input");
  cantidad.className = "input-data";
  cantidad.id = "Cantidad_" + cont;
  cantidad.name = "Cantidad_" + cont;
  cantidad.type = "text";
  divCantidad.appendChild(cantidad); //input de deposito

  var divDeposito = document.createElement("div");
  divDeposito.id = "div_deposito_" + cont;
  divDeposito.className = "form-group col-md-1";
  var deposito = document.createElement("input");
  deposito.className = "input-data";
  deposito.id = "Deposito_" + cont;
  deposito.name = "Deposito_" + cont;
  deposito.type = "text";
  divDeposito.appendChild(deposito); //input de grupo

  var divGrupo = document.createElement("div");
  divGrupo.id = "div_grupo_" + cont;
  divGrupo.className = "form-group col-md-1";
  var grupo = document.createElement("input");
  grupo.className = "input-data-boxnt";
  grupo.id = "Grupo_" + cont;
  grupo.type = "text";
  grupo.disabled = true;
  divGrupo.appendChild(grupo);
  form_row.appendChild(divImagen);
  form_row.appendChild(divSku);
  form_row.appendChild(divDescripcion);
  form_row.appendChild(divObservacion);
  form_row.appendChild(divCantidad);
  form_row.appendChild(divDeposito);
  form_row.appendChild(divGrupo);
});
btn_delete.addEventListener("click", function event() {
  if (cont > 1) {
    //input de imagen
    var input_Imagen = document.getElementById("Imagen_" + cont);
    var divImagen = document.getElementById("div_imagen_" + cont);

    var _labelImagen = document.getElementById("Label_Imagen_" + cont);

    var imagen = document.getElementById("img_" + cont);
    divImagen.remove();
    input_Imagen.remove();

    _labelImagen.remove();

    imagen.remove(); //input de sku

    var input_Sku = document.getElementById("SKU_" + cont);
    var divSku = document.getElementById("div_sku_" + cont);
    divSku.remove();
    input_Sku.remove(); //input de descripcion

    var input_Descripcion = document.getElementById("Descripcion_" + cont);
    var divDescripcion = document.getElementById("div_descripcion_" + cont);
    divDescripcion.remove();
    input_Descripcion.remove(); //input de observacion

    var input_Observacion = document.getElementById("Observacion_" + cont);
    var divObservacion = document.getElementById("div_observacion_" + cont);
    divObservacion.remove();
    input_Observacion.remove(); //input de cantidad

    var input_Cantidad = document.getElementById("Cantidad_" + cont);
    var divCantidad = document.getElementById("div_cantidad_" + cont);
    divCantidad.remove();
    input_Cantidad.remove(); //input de deposito

    var input_Depostio = document.getElementById("Deposito_" + cont);
    var divDepostio = document.getElementById("div_deposito_" + cont);
    divDepostio.remove();
    input_Depostio.remove(); //input de grupo

    var input_Grupo = document.getElementById("Grupo_" + cont);
    var divGrupo = document.getElementById("div_grupo_" + cont);
    divGrupo.remove();
    input_Grupo.remove();
    cont--;
  }
});
>>>>>>> 00cda4acb3797cb18199c6ecee158af8581fe52d:public/js/reca_scripts.js
/******/ })()
;