import React from 'react';
import { Link } from 'react-router-dom';

function Forums() {
    return (
        <>
            {/* Hero Section */}
            <section className="page-header py-5" style={{
                background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%)',
                color: 'white',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div className="container text-center position-relative" style={{zIndex: 2}}>
                    <h1 className="display-4 mb-3 fw-bold">Forums</h1>
                    <p className="lead mb-0">Des espaces de dialogue et d'innovation pour le secteur associatif</p>
                </div>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'url(/images/pattern.svg)',
                    opacity: 0.1,
                    zIndex: 1
                }}></div>
            </section>

            {/* Introduction Section */}
            <section className="py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <div className="pe-lg-4">
                                <h2 className="section-title mb-4" style={{color: 'var(--primary-color)'}}>
                                    <i className="fas fa-comments me-3"></i>
                                    L'intelligence collective au service du développement
                                </h2>
                                <p className="lead mb-4">
                                    Les forums du CDDAM sont des espaces privilégiés de dialogue, de réflexion collective et d'innovation où les dirigeants associatifs se réunissent pour débattre des enjeux majeurs du secteur et co-construire des solutions durables.
                                </p>
                                <p>
                                    Dans un contexte où les défis sociaux évoluent rapidement, les forums CDDAM offrent une plateforme unique pour partager les expériences, analyser les tendances, explorer de nouvelles approches et créer des synergies qui contribuent au développement social et économique du Maroc.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="activity-feature-box p-4" style={{
                                background: 'linear-gradient(135deg, rgba(0, 129, 164, 0.1) 0%, rgba(0, 106, 135, 0.1) 100%)',
                                borderRadius: '15px',
                                border: '2px solid var(--primary-color)',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center'
                            }}>
                                <div className="text-center mb-4">
                                    <i className="fas fa-brain fa-4x mb-3" style={{color: 'var(--primary-color)'}}></i>
                                    <h3 className="mb-3">Intelligence collective</h3>
                                    <p className="mb-0">
                                        Des espaces où la diversité des perspectives et l'échange d'idées génèrent des solutions innovantes et des recommandations concrètes pour le secteur associatif.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Forum Types Section */}
            <section className="py-5 bg-light">
                <div className="container">
                    <h2 className="section-title text-center mb-5">Types de forums</h2>
                    
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="forum-type-card p-4 h-100" style={{
                                background: 'var(--white)',
                                borderRadius: '15px',
                                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                                border: '2px solid var(--primary-color)',
                                height: '100%'
                            }}>
                                <div className="d-flex align-items-start mb-3">
                                    <div className="forum-icon me-4" style={{
                                        width: '80px',
                                        height: '80px',
                                        borderRadius: '50%',
                                        background: 'var(--primary-color)',
                                        color: 'white',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '32px',
                                        flexShrink: 0
                                    }}>
                                        <i className="fas fa-chart-line"></i>
                                    </div>
                                    <div>
                                        <h3 className="mb-3">Forums thématiques</h3>
                                        <p className="mb-3">
                                            Des forums centrés sur des thématiques spécifiques du secteur associatif :
                                        </p>
                                        <ul style={{listStyle: 'none', padding: 0}}>
                                            <li className="mb-2">
                                                <i className="fas fa-check-circle me-2" style={{color: 'var(--primary-color)'}}></i>
                                                Gouvernance et transparence associative
                                            </li>
                                            <li className="mb-2">
                                                <i className="fas fa-check-circle me-2" style={{color: 'var(--primary-color)'}}></i>
                                                Financement durable et diversification des ressources
                                            </li>
                                            <li className="mb-2">
                                                <i className="fas fa-check-circle me-2" style={{color: 'var(--primary-color)'}}></i>
                                                Impact social et mesure de performance
                                            </li>
                                            <li className="mb-2">
                                                <i className="fas fa-check-circle me-2" style={{color: 'var(--primary-color)'}}></i>
                                                Innovation et transformation digitale
                                            </li>
                                            <li>
                                                <i className="fas fa-check-circle me-2" style={{color: 'var(--primary-color)'}}></i>
                                                Coopération internationale et partenariats
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="forum-type-card p-4 h-100" style={{
                                background: 'var(--white)',
                                borderRadius: '15px',
                                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                                border: '2px solid var(--primary-color)',
                                height: '100%'
                            }}>
                                <div className="d-flex align-items-start mb-3">
                                    <div className="forum-icon me-4" style={{
                                        width: '80px',
                                        height: '80px',
                                        borderRadius: '50%',
                                        background: 'var(--primary-color)',
                                        color: 'white',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '32px',
                                        flexShrink: 0
                                    }}>
                                        <i className="fas fa-lightbulb"></i>
                                    </div>
                                    <div>
                                        <h3 className="mb-3">Forums d'innovation</h3>
                                        <p className="mb-3">
                                            Des espaces dédiés à l'exploration de nouvelles approches et solutions :
                                        </p>
                                        <ul style={{listStyle: 'none', padding: 0}}>
                                            <li className="mb-2">
                                                <i className="fas fa-check-circle me-2" style={{color: 'var(--primary-color)'}}></i>
                                                Présentation de projets innovants
                                            </li>
                                            <li className="mb-2">
                                                <i className="fas fa-check-circle me-2" style={{color: 'var(--primary-color)'}}></i>
                                                Partage de bonnes pratiques
                                            </li>
                                            <li className="mb-2">
                                                <i className="fas fa-check-circle me-2" style={{color: 'var(--primary-color)'}}></i>
                                                Co-création de solutions
                                            </li>
                                            <li>
                                                <i className="fas fa-check-circle me-2" style={{color: 'var(--primary-color)'}}></i>
                                                Networking autour de l'innovation
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="forum-type-card p-4 h-100" style={{
                                background: 'var(--white)',
                                borderRadius: '15px',
                                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                                border: '2px solid var(--primary-color)',
                                height: '100%'
                            }}>
                                <div className="d-flex align-items-start mb-3">
                                    <div className="forum-icon me-4" style={{
                                        width: '80px',
                                        height: '80px',
                                        borderRadius: '50%',
                                        background: 'var(--primary-color)',
                                        color: 'white',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '32px',
                                        flexShrink: 0
                                    }}>
                                        <i className="fas fa-handshake"></i>
                                    </div>
                                    <div>
                                        <h3 className="mb-3">Forums de partenariat</h3>
                                        <p className="mb-3">
                                            Des rencontres facilitant la création de partenariats stratégiques :
                                        </p>
                                        <ul style={{listStyle: 'none', padding: 0}}>
                                            <li className="mb-2">
                                                <i className="fas fa-check-circle me-2" style={{color: 'var(--primary-color)'}}></i>
                                                Rencontres B2B entre associations
                                            </li>
                                            <li className="mb-2">
                                                <i className="fas fa-check-circle me-2" style={{color: 'var(--primary-color)'}}></i>
                                                Présentation d'opportunités de collaboration
                                            </li>
                                            <li>
                                                <i className="fas fa-check-circle me-2" style={{color: 'var(--primary-color)'}}></i>
                                                Signature de conventions de partenariat
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="forum-type-card p-4 h-100" style={{
                                background: 'var(--white)',
                                borderRadius: '15px',
                                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                                border: '2px solid var(--primary-color)',
                                height: '100%'
                            }}>
                                <div className="d-flex align-items-start mb-3">
                                    <div className="forum-icon me-4" style={{
                                        width: '80px',
                                        height: '80px',
                                        borderRadius: '50%',
                                        background: 'var(--primary-color)',
                                        color: 'white',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '32px',
                                        flexShrink: 0
                                    }}>
                                        <i className="fas fa-gavel"></i>
                                    </div>
                                    <div>
                                        <h3 className="mb-3">Forums de plaidoyer</h3>
                                        <p className="mb-3">
                                            Des espaces pour porter la voix du secteur associatif :
                                        </p>
                                        <ul style={{listStyle: 'none', padding: 0}}>
                                            <li className="mb-2">
                                                <i className="fas fa-check-circle me-2" style={{color: 'var(--primary-color)'}}></i>
                                                Élaboration de positions communes
                                            </li>
                                            <li className="mb-2">
                                                <i className="fas fa-check-circle me-2" style={{color: 'var(--primary-color)'}}></i>
                                                Dialogue avec les pouvoirs publics
                                            </li>
                                            <li>
                                                <i className="fas fa-check-circle me-2" style={{color: 'var(--primary-color)'}}></i>
                                                Recommandations pour les politiques publiques
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Methodology Section */}
            <section className="py-5">
                <div className="container">
                    <h2 className="section-title text-center mb-5">Méthodologie des forums</h2>
                    
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-3">
                            <div className="methodology-card text-center p-4 h-100" style={{
                                background: 'var(--white)',
                                borderRadius: '10px',
                                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                                border: '2px solid var(--primary-color)',
                                height: '100%'
                            }}>
                                <div className="method-icon mb-3">
                                    <i className="fas fa-user-friends fa-3x" style={{color: 'var(--primary-color)'}}></i>
                                </div>
                                <h5 className="mb-3">Participation active</h5>
                                <p className="mb-0">
                                    Chaque participant est encouragé à partager son expérience, ses idées et ses perspectives dans un esprit de respect et d'écoute mutuelle.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3">
                            <div className="methodology-card text-center p-4 h-100" style={{
                                background: 'var(--white)',
                                borderRadius: '10px',
                                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                                border: '2px solid var(--primary-color)',
                                height: '100%'
                            }}>
                                <div className="method-icon mb-3">
                                    <i className="fas fa-comments fa-3x" style={{color: 'var(--primary-color)'}}></i>
                                </div>
                                <h5 className="mb-3">Débat structuré</h5>
                                <p className="mb-0">
                                    Des sessions de débat organisées avec des modérateurs expérimentés qui guident les discussions et assurent la qualité des échanges.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3">
                            <div className="methodology-card text-center p-4 h-100" style={{
                                background: 'var(--white)',
                                borderRadius: '10px',
                                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                                border: '2px solid var(--primary-color)',
                                height: '100%'
                            }}>
                                <div className="method-icon mb-3">
                                    <i className="fas fa-tasks fa-3x" style={{color: 'var(--primary-color)'}}></i>
                                </div>
                                <h5 className="mb-3">Travail en groupes</h5>
                                <p className="mb-0">
                                    Des ateliers en petits groupes permettant d'approfondir les sujets et de co-construire des solutions concrètes et actionnables.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3">
                            <div className="methodology-card text-center p-4 h-100" style={{
                                background: 'var(--white)',
                                borderRadius: '10px',
                                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                                border: '2px solid var(--primary-color)',
                                height: '100%'
                            }}>
                                <div className="method-icon mb-3">
                                    <i className="fas fa-file-alt fa-3x" style={{color: 'var(--primary-color)'}}></i>
                                </div>
                                <h5 className="mb-3">Recommandations</h5>
                                <p className="mb-0">
                                    Chaque forum aboutit à des recommandations concrètes, des plans d'action et des engagements collectifs pour le secteur associatif.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Section */}
            <section className="py-5 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <h2 className="section-title text-center mb-5">L'impact des forums CDDAM</h2>
                            
                            <div className="impact-box p-4" style={{
                                background: 'var(--white)',
                                borderRadius: '15px',
                                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                                borderLeft: '5px solid var(--primary-color)'
                            }}>
                                <p className="lead mb-4">
                                    Les forums du CDDAM ont un impact concret et mesurable sur le développement du secteur associatif marocain :
                                </p>
                                
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="d-flex align-items-start">
                                            <i className="fas fa-check-circle fa-2x me-3 mt-1" style={{color: 'var(--primary-color)'}}></i>
                                            <div>
                                                <h6 className="mb-2">Solutions innovantes</h6>
                                                <p className="mb-0 small">
                                                    Des solutions pratiques et innovantes émergent de chaque forum, contribuant à résoudre les défis du secteur.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="d-flex align-items-start">
                                            <i className="fas fa-check-circle fa-2x me-3 mt-1" style={{color: 'var(--primary-color)'}}></i>
                                            <div>
                                                <h6 className="mb-2">Partenariats durables</h6>
                                                <p className="mb-0 small">
                                                    De nombreux partenariats stratégiques naissent lors des forums, créant des synergies durables entre associations.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="d-flex align-items-start">
                                            <i className="fas fa-check-circle fa-2x me-3 mt-1" style={{color: 'var(--primary-color)'}}></i>
                                            <div>
                                                <h6 className="mb-2">Influence sur les politiques</h6>
                                                <p className="mb-0 small">
                                                    Les recommandations des forums influencent les politiques publiques et les décisions institutionnelles.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="d-flex align-items-start">
                                            <i className="fas fa-check-circle fa-2x me-3 mt-1" style={{color: 'var(--primary-color)'}}></i>
                                            <div>
                                                <h6 className="mb-2">Renforcement des capacités</h6>
                                                <p className="mb-0 small">
                                                    Les participants acquièrent de nouvelles compétences, connaissances et perspectives qui enrichissent leur pratique.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-5" style={{
                background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%)',
                color: 'white'
            }}>
                <div className="container text-center">
                    <h2 className="section-title mb-4 text-white">Participez aux forums CDDAM</h2>
                    <p className="lead mb-4">
                        Rejoignez les espaces de dialogue et d'innovation qui façonnent l'avenir du secteur associatif marocain. Votre voix et votre expertise comptent !
                    </p>
                    <div className="d-flex gap-3 justify-content-center flex-wrap">
                        <Link to="/packs-adhesions" className="btn btn-light btn-lg px-5">
                            <i className="fas fa-user-plus me-2"></i>
                            Devenir membre
                        </Link>
                        <Link to="/contact" className="btn btn-outline-light btn-lg px-5">
                            <i className="fas fa-envelope me-2"></i>
                            Nous contacter
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Forums;

