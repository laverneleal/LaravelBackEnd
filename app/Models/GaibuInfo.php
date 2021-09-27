<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GaibuInfo extends Model
{
    use HasFactory;
    protected $connection = 'mysql';
    protected $table = 'gaibu';
    protected $hidden = ['id', 'unique_id', 'updated_at', 'created_at','hiddenitems']; //Added Line 2021.04.19

}
