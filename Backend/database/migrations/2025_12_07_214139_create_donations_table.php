<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('donations', function (Blueprint $table) {
            $table->id();


            $table->string('donor_firstName');
            $table->string('donor_lastName');
            $table->string('donor_phoneNumber');
            $table->string('donor_email');
            $table->string('donation_type');
            $table->decimal('donation_amount', 10, 2)->nullable();
            $table->boolean('donation_received')->default(false);
            $table->date('donation_date');
            $table->unsignedBigInteger('compaign_ID')->nullable();
            $table->foreignId('organization_id')
                ->constrained()
                ->cascadeOnDelete();



            $table->foreign('compaign_ID')
                ->references('compaign_ID')   // <-- match the primary key in compaigns
                ->on('compaigns')
                ->onDelete('set null');

            $table->softDeletes();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('donations');
    }
};