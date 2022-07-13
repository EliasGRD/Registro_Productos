<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>REGISTRO DE PRODUCTOS</title>

        <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/smoothness/jquery-ui.css">
        <script src="//code.jquery.com/jquery-1.12.4.js"></script>
        <script src="//code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

        {{-- bootstrap --}}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">


        <link rel="stylesheet" href="{{ asset('css/app.css') }}" type="text/css">

        <!-- Script -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

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

        {{-- Formulario --}}
        <section style="padding-top: 110px">
            <h1 class="r-titulo">REGISTRO DE PRODUCTOS</h1>
            <div class="container">
                <form action="{{route('regpro.grupoSKU')}}">
                    <div class="form-group">
                        <div class="input-group" style="width: 100%">
                            <input name="filtro" type="text" class="input-grupo" aria-label="Filtro" aria-describedby="basic-addon2">
                        </div>
                    </div>
                </form>
                <div class="form-row" style="padding-bottom: 50px">
                    <div class="form-group col-md-1">
                        <label class="r-titulo2" for="SKU">SKU</label>
                    </div>
                    <div class="form-group col-md-3">
                        <label class="r-titulo2" for="Descripcion">Descripcion</label>
                    </div>
                    <div class="form-group col-md-1">
                        <label class="r-titulo2" for="Grupo">Grupo</label>
                    </div>
                    <div class="form-group col-md-3">
                        <label class="r-titulo2" for="Grupo">Acciones</label>
                    </div>
                    <div class="form-group col-md-3">
                        <label class="r-titulo2" for="Descripcion">Observación</label>
                    </div>
                    <div class="form-group col-md-1">
                        <label class="r-titulo2" for="Editar">Editar</label>
                    </div>
                </div>
                @foreach ($registros as $registro)
                    <div id="div_{{ $registro->{'id'} }}" class="borroso form-row">
<<<<<<< HEAD:resources/views/RP_show.blade.php
=======
                        <div id="div_img_{{ $registro->{'id'} }}" class="form-group col-md-1">
                            @if (!empty($registro->{'image'}))
                                <button id="btn_img_{{ $registro->{'id'} }}" class="btn-editar label-data-edit" type="button" onclick="imgClick(this.id)" style="border:none"><i class="fa fa-image" aria-hidden="true" style="font-size:20px">
                                <img id="img_{{ $registro->{'id'} }}" class="myImg" src="{{ $registro->{'image'} }}" style="width:100%;max-width:50px;height:100%;max-height:26px;padding-left:3px;padding-right:3px" hidden>
                            @endif
                        </div>
>>>>>>> 00cda4acb3797cb18199c6ecee158af8581fe52d:resources/views/reca_show.blade.php
                        <div class="form-group col-md-1">
                            <label class="label-data" for="sku">{{ $registro->{'cod_base'} }}</label>
                        </div>
                        <div class="form-group col-md-3">
                            <label class="label-data" for="Descripcion">{{ $registro->{'descripcion'} }}</label>
                        </div>
                        <div class="form-group col-md-1">
                            <label class="label-data" for="Grupo">{{ $registro->{'grupo'} }}</label>
                        </div>
                        <div class="form-group col-md-3">
                            <label class="label-data" for="Acciones">{{ $registro->{'accion'} }}</label>
                        </div>
                        <div class="form-group col-md-3">
                            <label class="label-data" for="Observación">{{ $registro->{'observacion'} }}</label>
                        </div>
                        <div class="form-group col-md-1">
                            <button id="{{ $registro->{'id'} }}" type="button" class="btn-editar label-data-edit" onclick="show_input(this.id)"><i class="fa fa-edit fa-lg"></i></button>
                        </div>
                    </div>
                    <div id="div_input_{{ $registro->{'id'} }}" class="oculto form-row">
                        <div class="form-group col-md-11">
                            <input name="input_{{ $registro->{'id'} }}" class="input-data" type="text" id="input_{{ $registro->{'id'} }}" hidden style="padding-left:10px;text-align:left">
                        </div>
                        <div class="form-group col-md-1">
                            <button id="button_{{ $registro->{'id'} }}" class="btn btn-outline-secondary" type="button" hidden onclick="ajax_method(this.id)" style="width: 100%; background-color:green; color:white">Enviar</button>
                        </div>
                    </div>
                @endforeach
                <div class="form-group">
<<<<<<< HEAD:resources/views/RP_show.blade.php
                    <a href="{{ route('regpro.homepage') }}"><button type="button" class="r-enviar">Agregar registro</button></a>
=======
                    <a href="{{ route('reca.homepage') }}"><button type="button" class="r-enviar">Agregar Registros</button></a>
>>>>>>> 00cda4acb3797cb18199c6ecee158af8581fe52d:resources/views/reca_show.blade.php
                </div>
            </div>
        </section>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
<<<<<<< HEAD:resources/views/RP_show.blade.php
        <script src="{{ asset('/js/RP_show_scripts.js')}}" type="text/javascript"></script>
=======
        <script src="{{ asset('/js/reca_show_scripts.js')}}" type="text/javascript"></script>
>>>>>>> 00cda4acb3797cb18199c6ecee158af8581fe52d:resources/views/reca_show.blade.php
    </body>
</html>