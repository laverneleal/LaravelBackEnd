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
            '屋根材種',
            '屋根材種(フラットルーフ)',
            'パラペット壁笠木',
            '軒天仕上げ',
            '破風鼻隠し仕上げ',
            '軒樋',
            '縦樋',
            '土台水切り',
            '１階外壁仕上げ',
            '２階外壁仕上げ',
            '３階外壁仕上げ',
            '外壁タイル',
            'デザインモール',
            '1階外壁帯',
            '2階外壁帯',
            '3階外壁帯',
            'タイル面帯',
            'バルコニー帯',
            'デザインルーバー',
            'サッシ',
            'オーニング',
            '手摺',
            'バルコニー袖壁笠木',
            'ｶﾞｰﾃﾞﾝｳｫｰﾙ笠木',
            'ポーチ側面タイル',
            'ポーチ','車庫',
            'スロープ',
            '勝手口ユニット',
            'テラス',
            'WPCウッドデッキ',
            'ウッドデッキ',
            '門柱ユニット',
            '車庫シャッター',
            'カーポート',
            '屋外排水配管カバー',
            '玄関戸',
            'シリンダー',
            '2階バルコニー手摺',
            '2階ガーデンウォール笠木',
            '2階ガーデンウォール手摺（開口部）',
            '2階バルコニー袖壁笠木',
            '3階バルコニー手摺',
            '3階ガーデンウォール笠木',
            '3階ガーデンウォール手摺（開口部）',
            '3階バルコニー袖壁笠木',
            'PH階バルコニー手摺',
            'PH階ガーデンウォール笠木',
            'PH階ガーデンウォール手摺（開口部）',
            'PH階バルコニー袖壁笠木',
            '矢切り部分飾り帯',
            '外部手摺',
            '踏み台',
            '宅配ボックス(クロークポール) ※製品販売',
            '窓手摺', '軒天見切り', 
            '軒天水切り','雨押え',
            '風除室ｻｯｼ',
            '壁(車庫内)',
            '天井(車庫内)',
            '2階ﾊﾞﾙｺﾆｰ床'
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
