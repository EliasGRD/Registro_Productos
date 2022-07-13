<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class RP_DocumentsController extends Controller
{
    public function regProHomepage(){
        $acciones = DB::connection("sqlsrv")->select("SELECT selector FROM BI.dbo.regpro_acciones ORDER BY selector ASC");
        return view("RP_homepage", [
            'acciones' => $acciones
        ]);
    }
    public function regpro(){
        $registros = DB::connection("sqlsrv")
        ->table("BI.dbo.regpro_detalles")
        ->select("*")
        ->where("status", "=", 1)
        ->limit('20')
        ->get();
        $grupos = DB::connection("sqlsrv")->select("SELECT DISTINCT grupo FROM BI.dbo.regpro_detalles WHERE [status] = 1");
        return view("RP_show", 
        [
            'registros' => $registros,
            'grupos' => $grupos
        ]);
    }

    protected function update(Request $request){
        $descripcion_pm = $request->get('descripcion');
        $id_input = $request->get('id_input');

        DB::connection("sqlsrv")
        ->update("UPDATE BI.dbo.regpro_detalles set observacion_pm = '$descripcion_pm', status = 0 where id = '$id_input'");
    }

    protected function store(Request $request){
        $last_value = DB::connection("sqlsrv")
        ->select("SELECT TOP 1 id FROM BI.dbo.regpro_cabeceras ORDER BY dh_inclusion DESC");
        if (empty($last_value)){
            $last_value = '1';
        }else{
            $last_value = (int)$last_value[0]->{'id'} + 1;
        }
        DB::connection("sqlsrv")
        ->insert("INSERT INTO BI.dbo.regpro_cabeceras (id) VALUES ('$last_value')");
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
                $accion = $request->{'Acciones_'.$x};
                $observacion = $request->{'Observacion_'.$x};
                $grupo = DB::connection("mysql")
                ->table('productos as p')
                ->selectRaw("g.descripcion_grupo")
                ->leftJoin("grupo as g", "p.cod_grupo", "=", "g.cod_grupo")
                ->where("p.codigo_base", "=", $sku)
                ->groupByRaw("g.descripcion_grupo")
                ->limit(1)
                ->get();
                $grupo = $grupo[0]->{'descripcion_grupo'};
                $cargadopor = $request->{'cargadopor'};


                DB::connection("sqlsrv")
                ->insert("INSERT INTO BI.dbo.regpro_detalles (cod_base, descripcion, observacion, grupo, [status], cabecera, accion, cargado_por) VALUES ($sku, '$descripcion', '$observacion', '$grupo', 1, '$last_value', '$accion', '$cargadopor')");
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
        return redirect("/regpro");
    }
}
