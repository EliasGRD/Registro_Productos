import $ from 'jquery';
window.$ = window.jQuery = $;

import 'jquery-ui/ui/widgets/datepicker.js';

var sw = 0;
var divs = 0;
var x = 0;

window.show_input = function show_input(id){
    let input = document.getElementById("input_"+id);
    let button = document.getElementById("button_"+id);
    let div_input = document.getElementById("div_input_"+id);
    let div = document.getElementById("div_"+id);
    if (window.getComputedStyle(input).display === "none"){
        sw+=1;
        input.hidden = false;
        input.required = true;
        button.hidden = false;
        div_input.className = "form-row";
        div_input.style = "padding-bottom: 15px; height: 100%";
        div.className = "borrosont form-row";
        div.style = "filter: blur(0);";
        divs = document.getElementsByClassName("borroso");
        for (x=0; x<divs.length; x++) {
            divs[x].style = "filter: blur(2px)";
        };
    }else{
        sw-=1;
        input.value = "";
        input.hidden = true;
        input.required = false;
        button.hidden = true;
        div_input.className = "oculto form-row";
        div_input.style = "padding-bottom: 0px; height: 0px";
        div.className = "borroso form-row";
        div.style = "filter: blur(2px);";
        divs = document.getElementsByClassName("borroso");
        for (x=0; x<divs.length; x++) {
            divs[x].style = "filter: blur(2px);";
        };
        if (sw == 0){
            divs = document.getElementsByClassName("borroso");
            for (x=0; x<divs.length; x++) {
                divs[x].style = "filter: blur(0);";
            };
        };
    }
}

window.ajax_method = function ajax_method(id){
    let input_id;
    for (x = 99; x>0; x--){
        if ((parseInt(id.slice(-x))) >= 0){
            input_id = parseInt(id.slice(-x));
            break;
        }
    }
    let input = document.getElementById("input_"+input_id);
    if (input.value === ""){
        alert("Ingrese una solución válida");
    }else{
        let div = document.getElementById("div_"+input_id);
        let div_input = document.getElementById("div_input_"+input_id);
        $.ajax({
            type: 'post',
            url: "/reca/update",
            dataType: 'html',
            data: {
                "_token": $("meta[name='csrf-token']").attr("content"),
                descripcion: (input.value).toString(),
                id_input: input_id.toString()   
            },
            success: function(response) {
                div.remove();
                div_input.remove();
                divs = document.getElementsByClassName("borroso");
                for (x=0; x<divs.length; x++) {
                    divs[x].style = "filter: blur(0);";
                };
                sw-=1;
            }
        });
    }
}