<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('web_messages' , function (Blueprint $table){
            $table->id('web_msg_id');
            $table->string('sender_name')->unique();
            $table->string('web_subject');
            $table->text('web_message');
             $table->timestamps();
        }
    );
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
