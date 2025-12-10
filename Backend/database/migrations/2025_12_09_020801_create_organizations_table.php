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
        Schema::create('organizations', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('org_name');
            $table->date('org_registrationDate');
            $table->text('org_description');
            $table->foreignId('category_id')->references('categories')->constrained();
            $table->foreignId('wilaya_id')->references('wilayas')->constrained();
            $table->string  ('org_email');
            $table->text('org_slogan')->nullable();
            $table->enum('status',['pending', 'approved' ,'rejected']);
            $table->string('org_hero_img')->nullable();
            $table->string('org_logo')->nullable();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('organizations');
    }
};
