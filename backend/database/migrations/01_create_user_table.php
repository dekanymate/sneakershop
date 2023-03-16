<?php
use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('email')->unique();
            $table->string('name');
            $table->string('password');
            $table->string('city');
            $table->integer('zipcode');
            $table->string('address_details');
            $table->boolean('is_admin')->default(false);
        });

        User::create(['email'=>"dekanymate@gmail.com", 'name'=>"Dékány Máté", 'password'=>"Kutyamacska123", 'city'=>"Budapest", 'zipcode'=>"1032", 'address_details'=>"Kutyamacska utca 1.", 'is_admin'=>1]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user');
    }
};
