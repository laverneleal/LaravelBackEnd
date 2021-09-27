<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DeliveryBox extends Model
{
    protected $connection = 'sqlite2';
    protected $table = 'deliverybox';  
}
