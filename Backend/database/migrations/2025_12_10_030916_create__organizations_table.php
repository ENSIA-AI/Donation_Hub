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
        if (!Schema::hasTable('organizations')) {
            Schema::create('organizations', function (Blueprint $table) {
                $table->id('orgID');
                $table->string('org_Name');
                $table->date('org_registrationDate');
                $table->text('org_description')->nullable();
                $table->string('org_hero_img')->nullable();
                $table->string('org_logo')->nullable();
                $table->string('org_type')->nullable();
                $table->string('org_slogan')->nullable();
                $table->enum('status', ['pending', 'approved', 'rejected'])->default('pending');
                $table->timestamps();
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('Organizations');
    }
};
