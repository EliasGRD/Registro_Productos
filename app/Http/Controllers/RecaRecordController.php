<?php

namespace App\Http\Controllers;

use App\Models\RecaRecord;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Image;
use File;

class RecaRecordController extends Controller
{
    public function reca(){
        $registros = DB::connection("sqlsrv")
        ->table("BI.dbo.reca_detalles")
        ->select("*")
        ->where("status", "=", 1)
        ->limit('20')
        ->get();
        $grupos = DB::connection("sqlsrv")->select("SELECT DISTINCT grupo FROM BI.dbo.reca_detalles WHERE [status] = 1");
        return view("reca_show", 
        [
            'registros' => $registros,
            'grupos' => $grupos
        ]);
    }

    public function recaHomepage(){
        return view("reca_homepage");
    }


    protected function update(Request $request){
        $descripcion_pm = $request->get('descripcion');
        $id_input = $request->get('id_input');

        DB::connection("sqlsrv")
        ->update("UPDATE BI.dbo.reca_detalles set observacion_pm = '$descripcion_pm', status = 0 where id = '$id_input'");

    }



    protected function store(Request $request){
        $last_value = DB::connection("sqlsrv")
        ->select("SELECT TOP 1 id FROM BI.dbo.reca_cabeceras ORDER BY dh_inclusion DESC");
        if (empty($last_value)){
            $last_value = '1';
        }else{
            $last_value = (int)$last_value[0]->{'id'} + 1;
        }
        DB::connection("sqlsrv")
        ->insert("INSERT INTO BI.dbo.reca_cabeceras (id) VALUES ($last_value)");
        for ($x=1; $x<((count($request->{'request'})-1)/2); $x++){
            if (!is_null($request->{'SKU_'.$x})){
                $sku = $request->{'SKU_'.$x};
                $descripcion = DB::connection("mysql")
                ->table('productos as p')
                ->selectRaw("p.descripcion_producto")
                ->leftJoin("grupo as g", "p.cod_grupo", "=", "g.cod_grupo")
                ->where("p.codigo_base", "=", $sku)
                ->groupByRaw("p.descripcion_producto")
                ->limit(1)
                ->get();
                $descripcion = $descripcion[0]->{'descripcion_producto'};
                $observacion = $request->{'Observacion_'.$x};
                $cantidad = $request->{'Cantidad_'.$x};
                $deposito = $request->{'Deposito_'.$x};
                $url = null;
                if ($request->{'Imagen_'.$x}){
                    $imageName = Str::random(30).'_'.strval($last_value).'.png';
                    $image = $request->{'Imagen_'.$x}->storeAs('public/imagenes', $imageName);
                    $url = Storage::url($image);
                }else{
                    $image = null;
                };
                $grupo = DB::connection("mysql")
                ->table('productos as p')
                ->selectRaw("g.descripcion_grupo")
                ->leftJoin("grupo as g", "p.cod_grupo", "=", "g.cod_grupo")
                ->where("p.codigo_base", "=", $sku)
                ->groupByRaw("g.descripcion_grupo")
                ->limit(1)
                ->get();
                $grupo = $grupo[0]->{'descripcion_grupo'};


                DB::connection("sqlsrv")
                ->insert("INSERT INTO BI.dbo.reca_detalles (cod_base, descripcion, observacion, cantidad, grupo, [status], cabecera, deposito, [image]) VALUES ($sku, '$descripcion', '$observacion', $cantidad, '$grupo', 1, $last_value, '$deposito', '$url')");
                // ->insert([
                //     "cod_base" => ''.$sku,
                //     "descripcion" => ''.$descripcion,
                //     "observacion" => ''.$observacion,
                //     "cantidad" => $cantidad,
                //     "grupo" => ''.$grupo,
                //     "status" => 1
                // ]);
            }
        }
        return redirect("/reca");
    }
}
