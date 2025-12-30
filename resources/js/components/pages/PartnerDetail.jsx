import React from 'react';
import { useParams, Link } from 'react-router-dom';

function PartnerDetail() {
    const { slug } = useParams();

    // Données des partenaires (à remplacer par une API ou un fichier de données)
    const partnersData = {
        'omecs': {
            name: 'OMECS',
            fullName: 'Observatoire Marocain des Études et Conseils Sociaux',
            category: 'Partenaire Privé',
            logo: '/images/omecs.jpg',
            description: 'L\'Observatoire Marocain des Études et Conseils Sociaux (OMECS) est un partenaire stratégique du Club des Dirigeants – Association Maroc, apportant son expertise dans le domaine des études sociales et du conseil aux associations.',
            details: [
                'Expertise en études et analyses sociales',
                'Conseil stratégique pour les associations',
                'Support dans la réalisation de projets à impact social',
                'Accompagnement dans la structuration organisationnelle'
            ],
            website: '#',
            contact: 'contact@omecs.ma'
        }
        // Ajouter d'autres partenaires ici
    };

    const partner = partnersData[slug];

    if (!partner) {
        return (
            <div className="container py-5 text-center">
                <h1>Partenaire non trouvé</h1>
                <p>Le partenaire que vous recherchez n'existe pas.</p>
                <Link to="/partenaires" className="btn btn-primary">Retour aux partenaires</Link>
            </div>
        );
    }

    return (
        <>
            {/* Page Header avec bannière bleue */}
            <section className="partner-detail-header py-5" style={{background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%)', color: 'white'}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <h1 className="partner-detail-title mb-3" style={{fontSize: '48px', fontWeight: 'bold'}}>
                                {partner.fullName || partner.name}
                            </h1>
                            <p className="partner-detail-category mb-0" style={{fontSize: '20px', opacity: 0.9}}>
                                {partner.category}
                            </p>
                        </div>
                        <div className="col-lg-4 text-center mt-4 mt-lg-0">
                            <div className="partner-detail-header-icon">
                                <i className="fas fa-handshake" style={{fontSize: '120px', opacity: 0.3}}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contenu principal */}
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        {/* Logo et informations principales */}
                        <div className="col-lg-4 mb-5">
                            <div className="partner-detail-card text-center p-4" style={{background: '#f8f9fa', borderRadius: '12px', boxShadow: '0 3px 15px rgba(0,0,0,0.1)'}}>
                                <div className="partner-detail-logo-container mb-4">
                                    <img 
                                        src={partner.logo} 
                                        alt={partner.name}
                                        className="partner-detail-logo"
                                        style={{maxWidth: '100%', height: 'auto', maxHeight: '200px', objectFit: 'contain'}}
                                    />
                                </div>
                                <h2 className="partner-detail-name mb-3" style={{color: 'var(--primary-color)', fontSize: '28px'}}>
                                    {partner.name}
                                </h2>
                                {partner.website && (
                                    <a 
                                        href={partner.website} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="btn btn-outline-primary mb-3"
                                    >
                                        <i className="fas fa-external-link-alt me-2"></i>
                                        Visiter le site web
                                    </a>
                                )}
                                {partner.contact && (
                                    <p className="mb-0" style={{color: '#666'}}>
                                        <i className="fas fa-envelope me-2"></i>
                                        {partner.contact}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Description et détails */}
                        <div className="col-lg-8">
                            <div className="partner-detail-content">
                                <h3 className="mb-4" style={{color: 'var(--primary-color)', fontSize: '32px'}}>
                                    À propos
                                </h3>
                                <p className="lead mb-4" style={{fontSize: '18px', lineHeight: '1.8', color: '#555'}}>
                                    {partner.description}
                                </p>

                                {partner.details && partner.details.length > 0 && (
                                    <div className="partner-detail-details mt-5">
                                        <h4 className="mb-4" style={{color: 'var(--primary-color)', fontSize: '24px'}}>
                                            Domaines d'expertise
                                        </h4>
                                        <ul className="partner-detail-list" style={{listStyle: 'none', padding: 0}}>
                                            {partner.details.map((detail, index) => (
                                                <li key={index} className="mb-3" style={{paddingLeft: '30px', position: 'relative', fontSize: '16px', lineHeight: '1.8', color: '#555'}}>
                                                    <i className="fas fa-check-circle" style={{position: 'absolute', left: 0, color: 'var(--primary-color)', fontSize: '20px'}}></i>
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                <div className="partner-detail-cta mt-5 p-4" style={{background: 'rgba(0, 129, 164, 0.05)', borderRadius: '10px', borderLeft: '4px solid var(--primary-color)'}}>
                                    <h4 className="mb-3" style={{color: 'var(--primary-color)'}}>
                                        Intéressé par un partenariat ?
                                    </h4>
                                    <p className="mb-3" style={{color: '#666'}}>
                                        Le Club des Dirigeants – Association Maroc est toujours à la recherche de nouveaux partenaires stratégiques pour renforcer son impact et développer le secteur associatif marocain.
                                    </p>
                                    <Link to="/contact" className="btn btn-primary">
                                        <i className="fas fa-envelope me-2"></i>
                                        Contactez-nous
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section autres partenaires */}
            <section className="py-5 bg-light">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="section-title">Découvrez nos autres partenaires</h2>
                        <Link to="/partenaires" className="btn btn-outline-primary btn-lg mt-3">
                            Voir tous les partenaires
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default PartnerDetail;

