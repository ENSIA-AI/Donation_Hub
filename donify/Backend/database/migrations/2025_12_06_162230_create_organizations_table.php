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
    $table->foreignId('category_id')->constrained('categories');
    $table->foreignId('wilaya_id')->constrained('wilayas'); // from friend's migration
    $table->string('org_email');
    $table->text('org_slogan')->nullable();
    $table->enum('status',['pending', 'approved', 'rejected']);
    $table->string('org_hero_img')->nullable();
    $table->string('org_logo')->nullable();
    $table->string('org_mission')->nullable();
    $table->string('org_vision')->nullable();
    $table->string('mission_img')->nullable();
    $table->string('program1_title')->nullable();
    $table->text('program1_desc')->nullable();
    $table->string('program1_img')->nullable();
    $table->string('program2_title')->nullable();
    $table->text('program2_desc')->nullable();
    $table->string('program2_img')->nullable();
    $table->string('impact_value1')->nullable();
    $table->text('imapct_desc1')->nullable();
    $table->string('impact_value2')->nullable();
    $table->text('imapct_desc2')->nullable();
    $table->string('impact_value3')->nullable();
    $table->text('imapct_desc3')->nullable();
    $table->string('value1')->nullable();
    $table->string('value2')->nullable();
    $table->string('value3')->nullable();
    $table->string('value4')->nullable();
    $table->string('org_address')->nullable();
    $table->string('org_phone')->nullable();
    $table->string('org_facebook')->nullable();
    $table->string('org_instagram')->nullable();
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