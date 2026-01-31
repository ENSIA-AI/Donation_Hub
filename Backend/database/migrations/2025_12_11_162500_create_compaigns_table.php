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
            $table->unsignedBigInteger('organization_id'); // make sure you have this!
            $table->unsignedBigInteger('category_id')->nullable(); // add category_id here
            $table->string('compaign_img')->nullable();
            $table->string('compaign_title');
            $table->text('compaign_content');
            $table->date('compaign_date')->default(DB::raw('CURRENT_DATE'));
            $table->boolean('compaign_approval')->default(false);
            $table->enum('status', ['waiting', 'accepted', 'rejected'])->default('waiting');

            $table->timestamps();


            $table->foreign('organization_id')
                ->references('id')
                ->on('organizations')
                ->onDelete('cascade');

            $table->foreign('category_id')
                ->references('id')
                ->on('categories')
                ->onDelete('set null');
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
