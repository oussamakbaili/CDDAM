<?php

namespace Database\Seeders;

use App\Models\Activity;
use Illuminate\Database\Seeder;

class ActivitiesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        if (Activity::count() > 0) {
            return;
        }

        $activities = [
            [
                'title' => 'Formations et Ateliers',
                'slug' => 'formations-ateliers',
                'category' => 'Formation',
                'description' => 'Programmes de formation continue couvrant la gestion associative, le leadership, la collecte de fonds, la communication et le développement organisationnel.',
                'features' => [
                    'Gestion financière et comptable',
                    'Stratégie et planification',
                    'Communication et marketing',
                    'Levée de fonds',
                    'Leadership et gouvernance',
                    'Gestion de projets',
                ],
                'primary_stat_label' => 'Participants',
                'primary_stat_value' => '500+',
                'secondary_stat_label' => 'Sessions / an',
                'secondary_stat_value' => '24',
                'icon' => 'chalkboard-teacher',
                'order' => 1,
            ],
            [
                'title' => 'Networking Mensuel',
                'slug' => 'networking-mensuel',
                'category' => 'Networking',
                'description' => 'Rencontres régulières pour faciliter les échanges entre dirigeants d\'associations et créer des opportunités de partenariats.',
                'features' => [
                    'Événements mensuels exclusifs',
                    'Speed networking structuré',
                    'Présentations de projets',
                    'Échanges de bonnes pratiques',
                    'Cocktails et dîners d\'affaires',
                    'Sessions de pitch',
                ],
                'primary_stat_label' => 'Événements / an',
                'primary_stat_value' => '12',
                'secondary_stat_label' => 'Participants / évènement',
                'secondary_stat_value' => '50+',
                'icon' => 'wine-glass',
                'order' => 2,
            ],
            [
                'title' => 'Conférences Nationales',
                'slug' => 'conferences-nationales',
                'category' => 'Conférences',
                'description' => 'Grands événements annuels rassemblant les acteurs clés du secteur associatif avec des intervenants de renom.',
                'features' => [
                    'Conférences annuelles',
                    'Tables rondes thématiques',
                    'Intervenants experts internationaux',
                    'Exposition de projets innovants',
                    'Sessions de networking premium',
                ],
                'primary_stat_label' => 'Participants',
                'primary_stat_value' => '1000+',
                'secondary_stat_label' => 'Intervenants',
                'secondary_stat_value' => '50+',
                'icon' => 'calendar-alt',
                'order' => 3,
            ],
            [
                'title' => 'Plateforme Digitale MyCDDAM',
                'slug' => 'plateforme-digitale-myCDDAM',
                'category' => 'Digital',
                'description' => 'Espace en ligne exclusif offrant un accès à des ressources, un annuaire des membres et des outils de collaboration.',
                'features' => [
                    'Annuaire interactif',
                    'Ressources documentaires',
                    'Outils de collaboration en ligne',
                    'Forum de discussion',
                    'Calendrier des événements',
                    'Base de données de projets',
                ],
                'primary_stat_label' => 'Utilisateurs',
                'primary_stat_value' => '6000+',
                'secondary_stat_label' => 'Ressources',
                'secondary_stat_value' => '500+',
                'icon' => 'laptop',
                'order' => 4,
            ],
            [
                'title' => 'Programmes Spéciaux',
                'slug' => 'programmes-speciaux',
                'category' => 'Programmes',
                'description' => 'Initiatives ciblées et programmes d\'accompagnement personnalisés pour promouvoir l\'innovation sociale.',
                'features' => [
                    'Mentorat personnalisé',
                    'Accompagnement de projets',
                    'Programmes d\'incubation',
                    'Prix et reconnaissances',
                    'Bourses d\'excellence',
                    'Partenariats stratégiques',
                ],
                'primary_stat_label' => 'Projets accompagnés',
                'primary_stat_value' => '100+',
                'secondary_stat_label' => 'Mentors',
                'secondary_stat_value' => '30+',
                'icon' => 'star',
                'order' => 5,
            ],
            [
                'title' => 'Cercles d\'Affaires',
                'slug' => 'cercles-d-affaires',
                'category' => 'Business',
                'description' => 'Groupes de travail thématiques permettant de créer des synergies entre associations complémentaires.',
                'features' => [
                    'Groupes par secteur d\'activité',
                    'Réunions régulières',
                    'Projets collaboratifs',
                    'Partage d\'expertise',
                    'Événements sectoriels',
                    'Réseaux spécialisés',
                ],
                'primary_stat_label' => 'Cercles actifs',
                'primary_stat_value' => '10',
                'secondary_stat_label' => 'Membres impliqués',
                'secondary_stat_value' => '300+',
                'icon' => 'building',
                'order' => 6,
            ],
        ];

        foreach ($activities as $activity) {
            Activity::create($activity);
        }
    }
}


