var btn_add = document.getElementById("add");
var btn_delete = document.getElementById("delete");
var form_row = document.getElementById("form-row");
var cont = 7;
var select1 = document.getElementById("Acciones_1");


window.copyContent = async function copyContent(id) {
    texto = document.getElementById("Descripcion_"+id);
    texto.disabled = false;
    texto.select();
    document.execCommand("copy");
    texto.disabled = true;
}


btn_add.addEventListener("click", function event() {    
    cont++;

    let a = select1.options;
    //input de sku
    let divSku = document.createElement("div");
    divSku.id = "div_sku_"+cont;
    divSku.className = "form-group col-md-1";
    let sku = document.createElement("input");
    sku.className = "input-data";
    sku.id = "SKU_"+cont;
    sku.type = "text";
    sku.style = "width:70px";
    sku.placeholder = "SKU";
    sku.setAttribute("onkeyup", "autocompletar(this.id)");
    divSku.appendChild(sku);

    //input de descripcion
    let divDescripcion = document.createElement("div");
    divDescripcion.id = "div_descripcion_"+cont;
    divDescripcion.className = "form-group col-md-4";
    div1 = document.createElement("div");
    div1.className = "col-md-10";
    div2 = document.createElement("div");
    div2.className = "col-md-2";
    div2.hidden = true;
    button = document.createElement("button");
    button.id = cont;
    button.type = "button";
    button.className = "btn";
    i = document.createElement("i");
    i.className = "fa fa-copy fa-lg";
    button.appendChild(i);
    let descripcion = document.createElement("input");
    descripcion.className = "input-data-boxnt";
    descripcion.id = "Descripcion_"+cont;
    descripcion.type = "text";
    descripcion.disabled = true;
    div1.appendChild(descripcion);
    div2.appendChild(button);
    divDescripcion.appendChild(div1);
    divDescripcion.appendChild(div2);

    //input de observacion
    let divObservacion = document.createElement("div");
    divObservacion.id = "div_observacion_"+cont;
    divObservacion.className = "form-group col-md-4";
    let observacion = document.createElement("input");
    observacion.className = "input-data";
    observacion.id = "Observacion_"+cont;
    observacion.type = "text";
    observacion.placeholder = "Ingrese la observación aquí";
    divObservacion.appendChild(observacion);

    //input de acciones
    let divAcciones = document.createElement("div");
    divAcciones.id = "div_acciones_"+cont;
    divAcciones.className = "form-group col-md-2";
    let accion = document.createElement("select");
    accion.className = "acciones-select";
    accion.id = "Acciones_"+cont;
    accion.ariaLabel = "Acciones";
    accion.disabled = true;
    var option = document.createElement("option");
    option.value = "Acciones";
    option.text = "Acciones";
    option.disabled = true;
    option.selected = true;
    accion.appendChild(option);
    //Create and append the options
    for (var i = 0; i < a.length; i++) {
        var option = document.createElement("option");
        option.value = a[i].value;
        option.text = a[i].value;
        accion.appendChild(option);
    }
    divAcciones.appendChild(accion);

    //input de grupo
    let divGrupo = document.createElement("div");
    divGrupo.id = "div_grupo_"+cont;
    divGrupo.className = "form-group col-md-1";
    let grupo = document.createElement("input");
    grupo.className = "input-data-boxnt";
    grupo.id = "Grupo_"+cont;
    grupo.type = "text";
    grupo.disabled = true;
    divGrupo.appendChild(grupo);

    form_row.appendChild(divSku);
    form_row.appendChild(divDescripcion);
    form_row.appendChild(divGrupo);
    form_row.appendChild(divAcciones);
    form_row.appendChild(divObservacion);
    
    
})

btn_delete.addEventListener("click", function event() { 
    if ( cont > 1 ){

        //input de sku
        let input_Sku = document.getElementById("SKU_"+cont);
        let divSku = document.getElementById("div_sku_"+cont);
        divSku.remove();
        input_Sku.remove();

        //input de descripcion
        let input_Descripcion = document.getElementById("Descripcion_"+cont);
        let divDescripcion = document.getElementById("div_descripcion_"+cont);
        divDescripcion.remove();
        input_Descripcion.remove();

        //input de observacion
        let input_Observacion = document.getElementById("Observacion_"+cont);
        let divObservacion = document.getElementById("div_observacion_"+cont);
        divObservacion.remove();
        input_Observacion.remove();

        //input de acciones
        let SelectAcciones = document.getElementById("Acciones_"+cont);
        let divAcciones = document.getElementById("div_acciones_"+cont);
        divAcciones.remove();
        SelectAcciones.remove();

        //input de grupo
        let input_Grupo = document.getElementById("Grupo_"+cont);
        let divGrupo = document.getElementById("div_grupo_"+cont);
        divGrupo.remove();
        input_Grupo.remove();

        cont--;
    } 

})