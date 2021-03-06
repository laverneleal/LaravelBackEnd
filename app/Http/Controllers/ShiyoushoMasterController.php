<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Resources\SRSTextureResource as SRSTextureResource;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Models\ShiyoushoMaster;
use App\Models\CLItems;


class ShiyoushoMasterController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $items = DB::connection('hrdsql2')->table('tbl_siyo_syohin')
                ->join('tbl_siyo_heya','tbl_siyo_syohin.customerCode','=','tbl_siyo_heya.customerCode')
                ->join('tbl_siyo_boss','tbl_siyo_syohin.customerCode','=','tbl_siyo_boss.customerCode') //G021014-2005
                ->where('tbl_siyo_syohin.customerCode','0000000-0000')  //customerCode
                ->where('tbl_siyo_boss.zumenCode','1-0')                 //revision number
                ->where('tbl_siyo_heya.siyoCode','1')                //siyoCode
                ->where('dbo.tbl_siyo_syohin.siyoKbn','1')
                ->where('dbo.tbl_siyo_syohin.notNeedsKoumoku2','0')
                ->where('dbo.tbl_siyo_heya.notNeedKoumoku1','0')
                ->select('komokuName1','komokuName2','shohinName','colorShanai','shohinName')
                ->get();
        return $items;   

    }

    public function getShioRequest($customerCode, $revision, $siyoNo){
       try {

        $siyoCode = json_decode(DB::connection('hrdsql2')->table('tbl_siyo_boss')
        ->where('tbl_siyo_boss.customerCode', $customerCode)
        ->where('tbl_siyo_boss.zumenCode', $revision)
        ->where('tbl_siyo_boss.siyoNo', $siyoNo)
        ->select('siyoCode')
        ->get(),true);
        

        $items = DB::connection('hrdsql2')->table('tbl_siyo_syohin')
        ->join('tbl_siyo_heya','tbl_siyo_syohin.customerCode','=','tbl_siyo_heya.customerCode')
        ->join('tbl_siyo_boss','tbl_siyo_syohin.customerCode','=','tbl_siyo_boss.customerCode')
        ->where('tbl_siyo_syohin.customerCode', $customerCode)  //customerCode
        ->where('tbl_siyo_boss.zumenCode', $revision)           //revision number
        ->where('tbl_siyo_heya.siyoCode', $siyoCode[0]['siyoCode'])            //siyoCode
        ->where('tbl_siyo_syohin.siyoKbn',1)
        ->where('tbl_siyo_syohin.notNeedsKoumoku2',0)
        ->where('tbl_siyo_heya.notNeedKoumoku1',0)
        //->whereNotNull('shohinName')
            ->whereColumn([
                ['tbl_siyo_syohin.siyoKbn', '=', 'tbl_siyo_heya.siyoKbn'],
                ['tbl_siyo_syohin.seqNo', '=', 'tbl_siyo_heya.seqNo'],
                ['tbl_siyo_syohin.komokuCd1','=','tbl_siyo_heya.komokuCd1'],
                ['tbl_siyo_syohin.customerCode','=','tbl_siyo_heya.customerCode'],
                ['tbl_siyo_syohin.customerCode','=','tbl_siyo_boss.customerCode'],
                ['tbl_siyo_syohin.siyoCode','=','tbl_siyo_boss.siyoCode']
            ])
        ->whereIn('komokuName2',[
            '????????????',
            '????????????(?????????????????????)',
            '????????????????????????',
            '???????????????',
            '????????????????????????',
            '??????',
            '??????',
            '???????????????',
            '?????????????????????',
            '?????????????????????',
            '?????????????????????',
            '???????????????',
            '?????????????????????',
            '1????????????',
            '2????????????',
            '3????????????',
            '???????????????',
            '??????????????????',
            '????????????????????????',
            '?????????',
            '???????????????',
            '??????',
            '???????????????????????????',
            '????????????????????????????????????',
            '????????????????????????',
            '?????????','??????',
            '????????????',
            '?????????????????????',
            '?????????',
            'WPC??????????????????',
            '??????????????????',
            '??????????????????',
            '?????????????????????',
            '???????????????',
            '???????????????????????????',
            '?????????',
            '???????????????',
            '2????????????????????????',
            '2?????????????????????????????????',
            '2????????????????????????????????????????????????',
            '2??????????????????????????????',
            '3????????????????????????',
            '3?????????????????????????????????',
            '3????????????????????????????????????????????????',
            '3??????????????????????????????',
            'PH????????????????????????',
            'PH?????????????????????????????????',
            'PH????????????????????????????????????????????????',
            'PH??????????????????????????????',
            '????????????????????????',
            '????????????',
            '?????????',
            '??????????????????(?????????????????????) ???????????????',
            '?????????', '???????????????', 
            '???????????????','?????????',
            '??????????????????',
            '???(?????????)',
            '??????(?????????)',
            '2????????????????????????'
            ])
        ->select('tbl_siyo_syohin.komokuName2 as ItemName','tbl_siyo_syohin.shohinName as Category','tbl_siyo_syohin.colorShanai as Texture')
        ->orderBy('tbl_siyo_syohin.komokuCd1', 'ASC')
        ->get();
            return $items;
        }catch (exception $e) {
            return $e;
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ShiyoushoMaster  $shiyoushoMaster
     * @return \Illuminate\Http\Response
     */
    public function show(ShiyoushoMaster $shiyoushoMaster)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ShiyoushoMaster  $shiyoushoMaster
     * @return \Illuminate\Http\Response
     */
    public function edit(ShiyoushoMaster $shiyoushoMaster)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ShiyoushoMaster  $shiyoushoMaster
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ShiyoushoMaster $shiyoushoMaster)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ShiyoushoMaster  $shiyoushoMaster
     * @return \Illuminate\Http\Response
     */
    public function destroy(ShiyoushoMaster $shiyoushoMaster)
    {
        //
    }
}
