<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $stats = [
            'members' => 6000,
            'regions' => 12,
            'countries' => 30,
            'partnerships' => 100,
            'business_circles' => 10,
            'congress' => 6,
            'networking_events' => 60,
            'platforms' => 2,
        ];

        $premiumMembers = [
            ['name' => 'Aziz HORAN', 'position' => 'DGA HPS'],
            ['name' => 'Adil KHALIFI', 'position' => 'CEO SCASCO ASSURANCES'],
            ['name' => 'Alae Karim BENNANI', 'position' => 'CEO DELTA BUREAU'],
            ['name' => 'Khalid DEBBARH', 'position' => 'CEO FIDE CONSULTING'],
        ];

        $vipMembers = [
            ['name' => 'Said Chebacheb', 'position' => 'CEO SC Consulting Morocco'],
            ['name' => 'Mounir RABIA', 'position' => 'CEO MAGHREB RAYONAGE'],
            ['name' => 'Jaouad ELHOUMA', 'position' => 'CEO MetaUniverselle'],
            ['name' => 'YAO GUANNAN', 'position' => 'DG ROMANTIC CO LTD'],
            ['name' => 'Khalid El Moufid', 'position' => 'CEO UNIVERS AUTO'],
            ['name' => 'Jihad PHARAOUN', 'position' => ''],
            ['name' => 'Lhaj BOULANOUAR', 'position' => 'CEO Certified Experts Consultants'],
            ['name' => 'Mounir CHAMI', 'position' => 'CEO ASTRLABE VOYAGE'],
        ];

        $testimonials = [
            [
                'author' => 'Abdelhak KASSABI',
                'position' => 'DIRECTEUR CHEZ URBAMENA',
                'content' => 'Cooperation, partenariat et solidarité sont l\'essentiel de toute réussite, d\'où l\'importance de se constituer en groupe et s\'ouvrir individuellement vers les membres du groupe et de façon solidaire vers l\'extérieur du groupe. En toute sincérité depuis ma présence au sein du club des dirigeants je retrouve mes forces et je me retrouve moi même. Je fais bcp de progrès. Merci beaucoup Ssi Driss pour avoir pense a créer ce club, et merci au club qui nous réuni.',
                'rating' => 5
            ],
            [
                'author' => 'Ahmed BOUTRIG',
                'position' => 'DEPUTY DIRECTOR GENERAL CHEZ SGI TEELCOM',
                'content' => 'Il ne m\'étais jamais venu a l\'esprit qu\'un jour je serai parmi un groupe CDD un groupe inédit. Bon continuation Ssi Driss.',
                'rating' => 5
            ],
            [
                'author' => 'Mohammed Achraf ALAOUI TAHIRI',
                'position' => 'DIRECTEUR DES OPERATIONS CHEZ SCASCO ASSURANCES',
                'content' => 'Merci d\'avoir mis au point ce concept au Maroc Ssi Driss, vous y avez crû et vous y êtes engagé. Seuls les vrais leaders connaissent Ia valeur du réseau. Tous ceux qui ont réussi témoignent de l\'importance du réseautage. Un sage a dit un jour que chacun d\'entre nous est Ia moyenne des 5 personnes qui l\'entourent, je rajouterai autant bien les choisir, et ce qui se fait au Club des dirigeants.',
                'rating' => 5
            ],
        ];

        return view('home', compact('stats', 'premiumMembers', 'vipMembers', 'testimonials'));
    }

    public function membership()
    {
        return view('membership');
    }

    public function mycdd()
    {
        return view('mycdd');
    }
}

