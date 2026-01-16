<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        if (!User::where('email', 'admin@cddam.org')->exists()) {
            User::create([
                'name' => 'Administrateur CDDAM',
                'email' => 'admin@cddam.org',
                'password' => Hash::make('admin123'),
                'is_admin' => true,
            ]);
        }
    }
}


