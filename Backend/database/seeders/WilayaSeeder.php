<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Wilaya;

class WilayaSeeder extends Seeder
{
   
    public function run()
    {
         $wilayas = [
            'Adrar', 'Chlef', 'Laghouat', 'Oum El Bouaghi', 'Batna', 'Béjaïa',
            'Biskra', 'Béchar', 'Blida', 'Bouira', 'Tamanrasset', 'Tébessa',
            'Tlemcen', 'Tiaret', 'Tizi Ouzou', 'Algiers', 'Djelfa', 'Jijel',
            'Sétif', 'Saïda', 'Skikda', 'Sidi Bel Abbès', 'Annaba', 'Guelma',
            'Constantine', 'Médéa', 'Mostaganem', 'M’Sila', 'Mascara', 'Ouargla',
            'Oran', 'El Bayadh', 'Illizi', 'Bordj Bou Arréridj', 'Boumerdès',
            'El Tarf', 'Tindouf', 'Tissemsilt', 'El Oued', 'Khenchela', 'Souk Ahras',
            'Tipaza', 'Mila', 'Aïn Defla', 'Naâma', 'Aïn Témouchent', 'Ghardaïa',
            'Relizane', 'El M’Ghair', 'El Menia', 'Ouled Djellal', 'Bordj Badji Mokhtar',
            'Béni Abbès', 'Timimoun', 'Touggourt', 'Djanet', 'In Salah', 'In Guezzam',
        ];

        foreach ($wilayas as $name) {
            Wilaya::create(['wilaya_name' => $name]);
        }
    }
}
// to run this seeder :php artisan db:seed --class=WilayaSeeder