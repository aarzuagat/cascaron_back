<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            ['name' => 'Admin', 'role_id' => 1, 'email' => 'admin@admin.love', 'password' => Hash::make('admin123')]
        ];
        foreach ($data as $user){
            User::create($user);
        }

    }
}
