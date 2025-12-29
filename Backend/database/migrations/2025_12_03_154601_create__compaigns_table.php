<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('compaigns', function (Blueprint $table) {
            $table->id('compaign_ID');
            $table->string('compaign_img')->nullable();
            $table->string('compaign_title');
            $table->text('compaign_content');
            $table->date('compaign_date')->default(DB::raw('CURRENT_DATE')); 
            $table->boolean('compaign_approval')->default(false);
            $table->enum('status', ['waiting', 'accepted', 'rejected'])->default('waiting');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('compaigns');
    }
};