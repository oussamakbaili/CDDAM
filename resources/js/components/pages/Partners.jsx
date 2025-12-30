import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Partners() {
    const location = useLocation();
    
    // Déterminer le type de partenaire depuis l'URL hash
    const getCategoryFromHash = () => {
        const hash = location.hash.substring(1); // Enlever le #
        if (['prive', 'public', 'ong'].includes(hash)) {
            return hash;
        }
        return null;
    };

    const selectedCategory = getCategoryFromHash();

    // Descriptions spécifiques pour chaque type de partenaire
    const categoryDescriptions = {
        prive: {
            title: 'Partenaires Privés',
            description: 'Les partenaires privés du Club des Dirigeants des Associations Maroc sont des entreprises et organisations du secteur privé qui partagent notre vision d\'un secteur associatif fort et professionnel. Ces partenariats stratégiques permettent de créer des synergies entre le monde associatif et le secteur privé, favorisant ainsi l\'innovation sociale, le développement durable et la création de valeur partagée.',
            benefits: [
                'Accès à un réseau d\'influence de dirigeants associatifs',
                'Visibilité accrue lors de nos événements et activités',
                'Opportunités de collaboration sur des projets à impact social',
                'Renforcement de votre image de marque engagée',
                'Participation à des initiatives de développement durable'
            ]
        },
        public: {
            title: 'Partenaires Publics',
            description: 'Les partenaires publics du Club des Dirigeants des Associations Maroc comprennent les institutions gouvernementales, les administrations publiques et les organismes d\'État qui reconnaissent l\'importance du secteur associatif dans le développement national. Ces collaborations permettent de renforcer le dialogue entre le secteur associatif et les pouvoirs publics, contribuant ainsi à l\'amélioration des politiques sociales et à la promotion de la bonne gouvernance.',
            benefits: [
                'Renforcement du dialogue institutionnel',
                'Participation aux consultations publiques',
                'Accès à des programmes de financement et de soutien',
                'Collaboration sur des projets d\'intérêt général',
                'Valorisation de votre engagement citoyen'
            ]
        },
        ong: {
            title: 'Partenaires ONG',
            description: 'Les ONG partenaires du Club des Dirigeants des Associations Maroc sont des organisations non gouvernementales qui œuvrent pour le développement social, l\'action humanitaire et la promotion des droits. Ces partenariats permettent de créer des synergies entre différentes organisations de la société civile, renforçant ainsi leur impact collectif et leur capacité à répondre aux défis sociaux du Maroc.',
            benefits: [
                'Renforcement des capacités organisationnelles',
                'Partage d\'expériences et de bonnes pratiques',
                'Collaboration sur des projets communs',
                'Accès à des réseaux internationaux',
                'Amélioration de la visibilité et de l\'impact'
            ]
        }
    };

    return (
        <>
            {/* Page Header */}
            <section className="page-header py-5" style={{background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%)', color: 'white'}}>
                <div className="container text-center">
                    <h1 className="display-4 mb-3">Partenaires</h1>
                    <p className="lead">Des alliances stratégiques pour un impact durable</p>
                </div>
            </section>

            {/* Description Section - Générale ou spécifique selon le type */}
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <div className="partners-intro">
                                {selectedCategory && categoryDescriptions[selectedCategory] ? (
                                    // Description spécifique pour le type de partenaire sélectionné
                                    <div className="partners-description">
                                        <h2 className="section-title text-center mb-4" style={{color: 'var(--primary-color)'}}>
                                            {categoryDescriptions[selectedCategory].title}
                                        </h2>
                                        <p className="lead text-center mb-4" style={{color: '#666', fontSize: '18px', lineHeight: '1.8'}}>
                                            {categoryDescriptions[selectedCategory].description}
                                        </p>
                                        
                                        <div className="category-benefits mt-5">
                                            <h3 className="mb-4" style={{color: 'var(--primary-color)', fontSize: '24px'}}>
                                                Avantages pour nos partenaires {selectedCategory === 'prive' ? 'privés' : selectedCategory === 'public' ? 'publics' : 'ONG'} :
                                            </h3>
                                            <ul className="category-benefits-list" style={{listStyle: 'none', padding: 0}}>
                                                {categoryDescriptions[selectedCategory].benefits.map((benefit, index) => (
                                                    <li key={index} className="mb-3" style={{paddingLeft: '30px', position: 'relative', fontSize: '16px', lineHeight: '1.8', color: '#555'}}>
                                                        <i className="fas fa-check-circle" style={{position: 'absolute', left: 0, color: 'var(--primary-color)', fontSize: '20px'}}></i>
                                                        {benefit}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ) : (
                                    // Description générale
                                    <div className="partners-description">
                                        <h2 className="section-title text-center mb-4">L'engagement du Club des Dirigeants des Associations Maroc envers ses partenaires</h2>
                                        <p className="lead text-center mb-4" style={{color: '#666'}}>
                                            Une collaboration fondée sur la confiance, la transparence et la réussite partagée
                                        </p>
                                        
                                        <div className="partners-description">
                                            <p>
                                                Le Club des Dirigeants des Associations Maroc (CDDAM) s'est positionné comme un réseau d'excellence dédié au renforcement des capacités et au développement du secteur associatif marocain. Cette mission ne saurait être accomplie sans les partenariats stratégiques que le CDDAM a su développer avec des organisations partageant ses valeurs et sa vision.
                                            </p>
                                            
                                            <p>
                                                Ces collaborations sont essentielles pour renforcer notre réseau, réaliser des projets innovants et créer des initiatives à fort impact social. Chaque partenariat est conçu dans une approche fondée sur la confiance, la transparence et la collaboration mutuelle, offrant un environnement propice à la co-création et au partage de ressources.
                                            </p>

                                            <h3 className="mt-4 mb-3" style={{color: 'var(--primary-color)', fontSize: '24px'}}>Ce que le CDDAM offre à ses partenaires :</h3>
                                            
                                            <div className="partners-benefits">
                                                <div className="benefit-item mb-3">
                                                    <h4><i className="fas fa-users text-primary me-2"></i>Un réseau influent et dynamique</h4>
                                                    <p>Accès direct à un large réseau de dirigeants associatifs et de décideurs issus de divers secteurs, permettant de créer des synergies fructueuses et de renforcer votre présence sur le marché associatif marocain.</p>
                                                </div>
                                                
                                                <div className="benefit-item mb-3">
                                                    <h4><i className="fas fa-bullhorn text-primary me-2"></i>Une visibilité accrue</h4>
                                                    <p>Grâce aux nombreux événements organisés tout au long de l'année (congrès, conférences, ateliers, forums), nos partenaires disposent d'une plateforme pour promouvoir leurs services et produits auprès d'un public ciblé de professionnels engagés.</p>
                                                </div>
                                                
                                                <div className="benefit-item mb-3">
                                                    <h4><i className="fas fa-handshake text-primary me-2"></i>Des collaborations sur mesure</h4>
                                                    <p>Le CDDAM travaille étroitement avec chacun de ses partenaires pour concevoir des projets adaptés à leurs besoins spécifiques, incluant des opportunités de sponsoring, des partenariats événementiels et des collaborations stratégiques visant à soutenir le développement durable et la transformation du secteur associatif.</p>
                                                </div>
                                                
                                                <div className="benefit-item mb-3">
                                                    <h4><i className="fas fa-heart text-primary me-2"></i>Une relation à long terme</h4>
                                                    <p>Le Club des Dirigeants des Associations Maroc croit en l'importance des relations durables. Chaque partenariat est considéré comme une alliance à long terme, où les bénéfices sont mutuels et basés sur la confiance réciproque.</p>
                                                </div>
                                                
                                                <div className="benefit-item mb-3">
                                                    <h4><i className="fas fa-tools text-primary me-2"></i>Un accompagnement personnalisé</h4>
                                                    <p>Le CDDAM veille à ce que ses partenaires soient pleinement intégrés dans les projets et initiatives du réseau, en leur offrant un soutien continu et des solutions adaptées pour les aider à atteindre leurs objectifs stratégiques.</p>
                                                </div>
                                            </div>

                                            <div className="partners-conclusion mt-4 p-4" style={{background: 'rgba(0, 129, 164, 0.05)', borderRadius: '10px', borderLeft: '4px solid var(--primary-color)'}}>
                                                <p className="mb-0" style={{fontSize: '18px', fontStyle: 'italic', color: '#555'}}>
                                                    <strong>En conclusion</strong>, le Club des Dirigeants des Associations Maroc s'engage à être un partenaire de choix, avec une vision commune de réussite et d'innovation. Ensemble, nous bâtissons un avenir solide, fondé sur des valeurs partagées et une collaboration mutuelle, au service de la croissance et de la prospérité de nos membres et partenaires.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-5">
                <div className="container text-center">
                    <h2 className="section-title mb-4">Rejoignez-nous en tant que partenaire</h2>
                    <p className="lead mb-4">Devenez partenaire du Club des Dirigeants des Associations Maroc et participez à la transformation du secteur associatif</p>
                    <Link to="/contact" className="btn btn-primary btn-lg">Contactez-nous</Link>
                </div>
            </section>
        </>
    );
}

export default Partners;

