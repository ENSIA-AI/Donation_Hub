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
        Schema::create('help_requests', function (Blueprint $table) {
            $table->id('help_rec_ID');
            $table->string('requester_first_name');
            $table->string('requester_last_name');
            $table->string('type_of_rec');
            $table->integer('rec_phone_number');
            $table->string('rec_proof');
            $table->text('rec_message');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('help_requests');
    }
};