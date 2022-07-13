import $ from 'jquery';
window.$ = window.jQuery = $;

import 'jquery-ui/ui/widgets/datepicker.js';

var x = 0;


var button = document.getElementById("btnButton");
var submit = document.getElementById("btnSubmit");
button.addEventListener('click', function event() {
  var inputValue = document.getElementById("autocomplete").value;
  try {
    $.ajax({
      type: 'GET',
      url: "/regpro/verificar",
      dataType: 'html',
      data: {
        term: inputValue
      },
      success: function success(respuesta) {
        if (respuesta) {
                // $("#Formulario").submit();
                submit.click();
        } else {
          var alertD = document.getElementById("alertD");
          alertD.hidden = false;
          $(document).ready(function () {
            $("#alertD").hide();
            $("#alertD").fadeTo(2000, 500).slideUp(500, function () {
              $("#alertD").slideUp(500);
            });
            function sleep(ms) {
              return new Promise(resolve => setTimeout(resolve, ms));
            }
          async function demo() {
              await sleep(2000);
              alertD.hidden = true;
          }
          
          demo();
            
          });
        }
      }
    });
  } catch (_unused) {//
  }
});


window.autocompletar = function autocompletar(id) {
    let input = document.getElementById(id);
    let input_id;
    for (x = 999; x>0; x--){
        if ((parseInt(id.slice(-x)))){
            input_id = parseInt(id.slice(-x));  
            break;
        }
    }
    let Descripcion = document.getElementById("Descripcion_"+input_id)
    let Grupo = document.getElementById("Grupo_"+input_id)
    let Observacion = document.getElementById("Observacion_"+input_id)
    let Selector = document.getElementById("Acciones_"+input_id);
    let div2 = document.getElementById("div2_"+input_id);
    $.ajax({
        type: 'GET',
        url: "/regpro/search",
        dataType: 'html',
        data: {
            term: input.value
        },
        success: function(response) {
            try{
                var values = JSON.parse(response);
                Descripcion.value = (values.descripcion_producto);
                Grupo.value = (values.descripcion_grupo);
                Observacion.required = true;
                Selector.disabled = false;
                Selector.required = true;
                div2.hidden = false;
            }catch{
                Descripcion.value = "";
                Grupo.value = "";
                Observacion.required = false;
                Selector.disabled = true;
                Selector.options[0].selected = true;
                Selector.required = false;
                div2.hidden = true;
            }
        }
    });
}