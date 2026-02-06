<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('requests', function (Blueprint $table) {
            $table->id();
            $table->string('rec_firstName');
            $table->string('rec_lastName');
            $table->string('rec_phoneNumber');
            $table->string('rec_email');
            $table->string('rec_message');
            $table->string('rec_type');
            $table->date('rec_date');
            $table->string('rec_file_path')->nullable();
            $table->unsignedBigInteger('organization_id');

            $table->timestamps();

    // Then add the foreign key
    $table->foreign('organization_id')
          ->references('id')
          ->on('organizations')
          ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('requests');
    }
};
