<?php

namespace App\Http\Controllers;

use App\Models\Search;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class RP_SearchController extends Controller
{

    public function autocomplete(Request $request){
        $term = $request->get('term');
        $querys[0] = null;
        try {
            $querys = DB::connection("mysql")
            ->table('productos as p')
            ->selectRaw("p.codigo_base, p.descripcion_producto, g.descripcion_grupo")
            ->leftJoin("grupo as g", "p.cod_grupo", "=", "g.cod_grupo")
            ->where("p.codigo_base", "=", $term)
            ->groupByRaw("p.codigo_base, p.descripcion_producto, g.descripcion_grupo")
            ->limit(1)
            ->get();
        } catch (\Throwable $th) {
            $querys[0] = null;
        }
        

        if (empty($querys[0])){
            return "";
        }else{
            return $querys[0];
        }
    }

    public function cargadopor(Request $request){
        $term = $request->get('term');
        $querys = DB::connection('sqlsrv')->select("SELECT TOP 5 Nombre_Apellido FROM BI.dbo.vw_staff vs WHERE Nombre_Apellido LIKE '%$term%'");
        $data = [];

        foreach ($querys as $query) {
            $data[] = $query->Nombre_Apellido;
        }
        return $data;
    }

    public function verificar(Request $request){
        $term = $request->get('term');
        $querys = DB::connection('sqlsrv')->select("SELECT Nombre_Apellido FROM BI.dbo.vw_staff vs WHERE Nombre_Apellido = '$term'");
        $data = null;

        foreach ($querys as $query) {
            $data = $query->Nombre_Apellido;
        }
        return $data;
    }

    public function searchGrupoSKU(Request $request){
        $filtro = $request->input("filtro");

<<<<<<< HEAD:app/Http/Controllers/RP_SearchController.php
        $querys = DB::connection("sqlsrv")->select("SELECT TOP 20 * FROM BI.dbo.regpro_detalles WHERE grupo LIKE '%$filtro%' AND [status] = 1");
=======
        $querys = DB::connection("sqlsrv")->select("SELECT TOP 20 * FROM BI.dbo.reca_detalles WHERE cod_base LIKE '%$filtro%' OR grupo LIKE '%$filtro%' AND [status] = 1");
>>>>>>> 00cda4acb3797cb18199c6ecee158af8581fe52d:app/Http/Controllers/SearchController.php

        if(is_null($filtro) or count($querys) == 0){
            return redirect("/regpro/documents");
        }else{
            return view("RP_grupo_show",[
                'registros' => $querys,
            ]);
        }
    }
}
