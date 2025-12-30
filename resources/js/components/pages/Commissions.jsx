import React from 'react';
import { Link } from 'react-router-dom';

function Commissions() {
    const commissions = [
        {
            id: 'adhesion-developpement',
            title: 'Commission Adhésion & Développement',
            icon: 'user-plus',
            description: 'Organiser des événements d\'accueil pour les nouveaux membres afin de favoriser leur intégration et leur engagement dès le départ. Mettre en place un programme de parrainage où les membres actuels guident et soutiennent les nouveaux adhérents.',
            activities: [
                'Organisation d\'événements d\'accueil pour nouveaux membres',
                'Programme de parrainage et accompagnement',
                'Stratégies de développement du réseau associatif',
                'Intégration et engagement des nouveaux adhérents'
            ]
        },
        {
            id: 'formation-accompagnement',
            title: 'Commission Formation & Accompagnement',
            icon: 'chalkboard-teacher',
            description: 'Proposer des formations interactives et pratiques pour favoriser l\'apprentissage concret. Établir des partenariats avec des experts et des formateurs reconnus dans différents domaines du secteur associatif.',
            activities: [
                'Formations interactives et pratiques',
                'Partenariats avec experts et formateurs',
                'Programmes de renforcement des capacités',
                'Accompagnement personnalisé des dirigeants'
            ]
        },
        {
            id: 'digital-innovation',
            title: 'Commission Digital & Innovation',
            icon: 'laptop-code',
            description: 'Mettre en place un laboratoire d\'innovation où les membres peuvent collaborer sur des projets numériques novateurs. Organiser des séminaires et des ateliers sur les tendances technologiques émergentes pour le secteur associatif.',
            activities: [
                'Laboratoire d\'innovation numérique',
                'Séminaires sur les tendances technologiques',
                'Projets numériques collaboratifs',
                'Transformation digitale des associations'
            ]
        },
        {
            id: 'financement-investissement',
            title: 'Commission Financement & Investissement',
            icon: 'hand-holding-usd',
            description: 'Organiser des sessions d\'information sur les différentes sources de financement disponibles pour les associations, y compris les subventions et les investissements. Faciliter les rencontres entre les membres en recherche de financement et les investisseurs potentiels.',
            activities: [
                'Sessions d\'information sur les sources de financement',
                'Rencontres avec investisseurs potentiels',
                'Accompagnement dans la recherche de subventions',
                'Stratégies de mobilisation de ressources'
            ]
        },
        {
            id: 'com-events',
            title: 'Commission Communication & Événements',
            icon: 'bullhorn',
            description: 'Créer une stratégie de communication globale pour promouvoir les événements de l\'association et les réussites de ses membres. Explorer des formats d\'événements innovants, tels que des forums de discussions interactifs et des rencontres thématiques.',
            activities: [
                'Stratégie de communication globale',
                'Promotion des événements et réussites',
                'Formats d\'événements innovants',
                'Forums de discussions interactifs'
            ]
        },
        {
            id: 'juridique-reglementation',
            title: 'Commission Juridique & Réglementation',
            icon: 'gavel',
            description: 'Fournir des guides pratiques sur les lois et réglementations pertinentes pour les associations, en mettant l\'accent sur les changements récents. Organiser des séances de questions-réponses avec des avocats spécialisés pour répondre aux préoccupations des membres.',
            activities: [
                'Guides pratiques sur les lois et réglementations',
                'Séances de questions-réponses avec avocats',
                'Veille juridique pour le secteur associatif',
                'Conseil en conformité réglementaire'
            ]
        },
        {
            id: 'fiscalite-finance',
            title: 'Commission Fiscalité & Finance',
            icon: 'calculator',
            description: 'Offrir des ateliers de planification financière pour aider les membres à gérer efficacement leurs ressources financières. Mettre en place une veille fiscale pour informer les membres sur les changements fiscaux impactant leurs associations.',
            activities: [
                'Ateliers de planification financière',
                'Veille fiscale et réglementaire',
                'Gestion efficace des ressources financières',
                'Conseil en fiscalité associative'
            ]
        },
        {
            id: 'arbitrage-mediation',
            title: 'Commission Arbitrage & Médiation',
            icon: 'balance-scale',
            description: 'Établir des procédures claires et transparentes pour la résolution de conflits au sein de l\'association. Proposer des formations en médiation pour les membres intéressés à développer ces compétences.',
            activities: [
                'Procédures de résolution de conflits',
                'Formations en médiation',
                'Services d\'arbitrage et de conciliation',
                'Promotion de la culture du dialogue'
            ]
        },
        {
            id: 'partenariats',
            title: 'Commission Partenariats',
            icon: 'handshake',
            description: 'Identifier des opportunités de partenariats avec des organisations locales et internationales pour renforcer le réseau des membres. Organiser des missions et des rencontres pour explorer de nouvelles opportunités de collaboration.',
            activities: [
                'Identification d\'opportunités de partenariats',
                'Partenariats locaux et internationaux',
                'Renforcement du réseau des membres',
                'Missions et rencontres stratégiques'
            ]
        }
    ];

    return (
        <>
            {/* Page Header */}
            <section className="page-header py-5" style={{background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%)', color: 'white'}}>
                <div className="container text-center">
                    <h1 className="display-4 mb-3">Commissions</h1>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <div className="commissions-intro">
                                <p className="lead mb-4" style={{fontSize: '18px', lineHeight: '1.8', color: '#555'}}>
                                    Le Club des Dirigeants – Association Maroc compte plusieurs commissions qui se concentrent sur des domaines spécifiques d'intérêt et d'expertise. Ces commissions regroupent des membres qui partagent un intérêt commun et travaillent ensemble pour promouvoir des initiatives, des projets et des activités spécifiques dans leur domaine d'expertise. Les commissions peuvent couvrir divers sujets tels que l'innovation, le développement durable, la transformation numérique, la gouvernance associative, le financement et bien d'autres domaines essentiels au renforcement du secteur associatif marocain.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Commissions Grid */}
            <section className="py-5 bg-light">
                <div className="container">
                    <div className="row g-4">
                        {commissions.map((commission, index) => (
                            <div key={commission.id} id={commission.id} className="col-lg-4 col-md-6 mb-4">
                                <div className="commission-card">
                                    <div className="commission-icon-wrapper">
                                        <i className={`fas fa-${commission.icon}`}></i>
                                    </div>
                                    <h3 className="commission-title">{commission.title}</h3>
                                    <p className="commission-description">{commission.description}</p>
                                    <div className="commission-activities">
                                        <h5 className="commission-activities-title">Activités principales :</h5>
                                        <ul className="commission-activities-list">
                                            {commission.activities.map((activity, idx) => (
                                                <li key={idx}>{activity}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Conclusion Section */}
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <div className="commissions-conclusion p-4" style={{background: 'rgba(0, 129, 164, 0.05)', borderRadius: '10px', borderLeft: '4px solid var(--primary-color)'}}>
                                <p className="mb-0" style={{fontSize: '16px', lineHeight: '1.8', color: '#555'}}>
                                    Chaque commission peut tirer parti de ces activités pour renforcer son impact et sa contribution à la communauté du Club des Dirigeants – Association Maroc. Les commissions travaillent en synergie pour créer un écosystème dynamique et performant au service du développement du secteur associatif marocain.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-5 bg-light">
                <div className="container text-center">
                    <h2 className="section-title mb-4">Rejoignez une commission</h2>
                    <p className="lead mb-4">Participez activement à une commission et contribuez au développement du secteur associatif marocain</p>
                    <Link to="/contact" className="btn btn-primary btn-lg">Contactez-nous</Link>
                </div>
            </section>
        </>
    );
}

export default Commissions;

