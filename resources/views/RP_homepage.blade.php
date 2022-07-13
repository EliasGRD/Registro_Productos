<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>REGISTRO DE PRODUCTOS</title>

    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/smoothness/jquery-ui.css">
    <script src="//code.jquery.com/jquery-1.12.4.js"></script>
    <script src="//code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

    {{-- bootstrap --}}
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

    <!-- Script -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <link rel="stylesheet" href="{{ asset('css/app.css') }}" type="text/css">

    <!-- Icono -->
    <link rel="icon" type="image/x-icon" href="{{ asset('images/R_icon.png') }}">


    
</head>
<body>
    {{-- navbar --}}
    <nav class="navbar fixed-top navbar-white bg-white">
        <!-- Navbar content -->
        <div class="col-12 col-md-10">
            <div class="menu-logo">
                <h1 class="logo text-hide">
                    <img class="img-fluid" src="{{ asset('images/LOGO-ROJO.png') }}" alt="Casa Nissei" width="140">
                </h1>
            </div>
        </div>
    </nav>

    <section style="padding-top: 110px">
        <h1 class="r-titulo">REGISTRO DE PRODUCTOS</h1>
        <div class="container">
            <form id="Formulario" method="POST" enctype="multipart/form-data" action="{{ route('regpro.store') }}" name="formulario">
                @csrf
                <div class="form-group" style="padding-top: 10px">
                    <label class="r-titulo2" for="autocomplete">CARGADO POR</label>
                    <div class="input-group mb-3">
                        <input id="autocomplete" name="cargadopor" type="text" class="form-control" placeholder="CARGADO POR" aria-label="CARGADO POR" aria-describedby="basic-addon2">
                    </div>
                    <div id="alertD" class="alert alert-danger alert-dismissible fade show" role="alert" hidden>
                        <strong>Por favor!</strong> <br> Escriba correctamente su nombre.
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </div>
                <div class="form-row" style="padding-top: 30px">
                    <div class="form-group col-md-1" style="border-color:black;border-radius:0%">
                        <label class="r-titulo2" for="SKU">SKU</label>
                    </div>
                    <div class="form-group col-md-4">
                        <label class="r-titulo2" for="Descripcion">Descripcion</label>
                    </div>
                    <div class="form-group col-md-1">
                        <label class="r-titulo2" for="Grupo">Grupo</label>
                    </div>
                    <div class="form-group col-md-2">
                        <label class="r-titulo2" for="Acciones">Acciones</label>
                    </div>
                    <div class="form-group col-md-4">
                        <label class="r-titulo2" for="Descripcion">Observación</label>
                    </div>
                </div>
                <div id="form-row" class="form-row" style="height: 0px">
                    @for($x = 1; $x <= 7; $x++)
                        <div id="{{'div_sku_'.$x}}" class="form-group col-md-1">
                            <input name="{{'SKU_'.$x}}" type="text" class="input-data" id="{{'SKU_'.$x}}" placeholder="SKU" onkeyup="autocompletar(this.id)" style="width:70px">
                        </div>
                        <div id="{{'div_descripcion_'.$x}}" class="form-group col-md-4">
                            <div class="col-md-10">
                                <input name="{{'Descripcion_'.$x}}" type="text" class="input-data-boxnt" id="{{'Descripcion_'.$x}}" disabled>
                            </div>
                            <div id="{{'div2_'.$x}}" class="col-md-2" hidden>
                                <button id="{{$x}}" type="button" class="btn" onclick="copyContent(this.id)"><i class="fa fa-copy fa-lg"></i></button>
                            </div>
                        </div>
                        <div id="{{'div_grupo_'.$x}}" class="form-group col-md-1">
                            <input name="{{'Grupo_'.$x}}" type="text" class="input-data-boxnt" id="{{'Grupo_'.$x}}" disabled>
                        </div>
                        <div id="{{'div_acciones_'.$x}}" class="form-group col-md-2">
                            <select id="{{'Acciones_'.$x}}" name="{{'Acciones_'.$x}}" class="acciones-select" aria-label="Acciones" disabled>
                                <option value="" selected disabled>Acciones</option>
                                @foreach ($acciones as $accion)
                                    <option value="{{ $accion->{'selector'} }}" style="text-align: left">{{ $accion->{'selector'} }}</option>
                                @endforeach
                            </select>
                        </div>
                        <div id="{{'div_observacion_'.$x}}" class="form-group col-md-4">
                            <input name="{{'Observacion_'.$x}}" type="text" class="input-data" id="{{'Observacion_'.$x}}" placeholder="Ingrese la observación aquí">
                        </div>
                    @endfor
                </div>
                <div class="form-group col-md-1" style="float: left;">
                    <button id="btnButton" type="button" class="r-enviar">Enviar</button>
                    <button id="btnSubmit" type="submit" class="r-enviar" hidden></button>
                </div>
                <div class="form-group col-md-2">
                    <a href="{{ route('regpro.nissei') }}"><button type="button" class="r-ver" style="color: white">Ver registros</button></a>
                </div>
                <div class="form-group col-md-1" style="float: right; padding-right: 3%">
                    <button id="add" type="button" class="r-agregar" style="color: white"><i class="fa fa-plus" aria-hidden="true"></i></button>
                </div>
                <div class="form-group col-md-1" style="float: right; padding-right: 3%">
                    <button id="delete" type="button" class="r-eliminar" style="color: white"><i class="fa fa-minus" aria-hidden="false"></i></button>
                </div>
            </form>
        </div>
    </section>
    <script>
        $('#autocomplete').autocomplete({
            source: function(request, response) {
                $.ajax({
                    url: "{{route('regpro.cargadopor')}}",
                    dataType: 'json',
                    data: {
                        term: request.term
                    },
                    success: function(data) {
                        response(data)
                    }
                })
            }
        })
    </script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    <script src="{{ asset('/js/RP_scripts.js')}}" type="text/javascript"></script>
    <script src="{{ asset('/js/RP_autocomplete.js')}}" type="text/javascript"></script>
</body>
</html>