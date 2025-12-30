import React from 'react';
import { Link } from 'react-router-dom';

function Congres() {
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
                    <h1 className="display-4 mb-3 fw-bold">Congrès Internationaux</h1>
                    <p className="lead mb-0">Des événements d'envergure pour façonner l'avenir du secteur associatif</p>
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
                                    <i className="fas fa-globe-americas me-3"></i>
                                    Des congrès d'excellence internationale
                                </h2>
                                <p className="lead mb-4">
                                    Le CDDAM organise des congrès internationaux de grande envergure qui rassemblent les dirigeants associatifs les plus influents du Maroc et du monde entier. Ces événements majeurs constituent des moments forts de réflexion, d'échange et d'action pour le secteur associatif.
                                </p>
                                <p>
                                    Avec plus de 6 congrès internationaux organisés à ce jour, le CDDAM s'est imposé comme un acteur incontournable dans la promotion du dialogue, de la coopération et de l'innovation dans le secteur associatif. Chaque congrès aborde des enjeux cruciaux et offre une plateforme unique pour partager les meilleures pratiques, explorer de nouvelles perspectives et créer des synergies durables.
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
                                    <i className="fas fa-globe fa-4x mb-3" style={{color: 'var(--primary-color)'}}></i>
                                    <h3 className="mb-3">Portée internationale</h3>
                                    <p className="mb-0">
                                        Plus de 30 pays représentés, des intervenants de renommée mondiale, et des débats qui façonnent l'avenir du secteur associatif à l'échelle internationale.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-5 bg-light">
                <div className="container">
                    <h2 className="section-title text-center mb-5">Pourquoi participer aux congrès CDDAM ?</h2>
                    
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-4">
                            <div className="feature-card h-100 p-4 text-center" style={{
                                background: 'var(--white)',
                                borderRadius: '10px',
                                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                                transition: 'transform 0.3s, box-shadow 0.3s',
                                height: '100%'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                            }}>
                                <div className="feature-icon mb-3">
                                    <i className="fas fa-microphone-alt fa-3x" style={{color: 'var(--primary-color)'}}></i>
                                </div>
                                <h4 className="mb-3">Intervenants de renom</h4>
                                <p>
                                    Écoutez et échangez avec des experts internationaux, des leaders visionnaires et des personnalités influentes qui partagent leurs connaissances et leur vision.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="feature-card h-100 p-4 text-center" style={{
                                background: 'var(--white)',
                                borderRadius: '10px',
                                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                                transition: 'transform 0.3s, box-shadow 0.3s',
                                height: '100%'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                            }}>
                                <div className="feature-icon mb-3">
                                    <i className="fas fa-chalkboard-teacher fa-3x" style={{color: 'var(--primary-color)'}}></i>
                                </div>
                                <h4 className="mb-3">Thématiques stratégiques</h4>
                                <p>
                                    Explorez des sujets d'actualité cruciaux : gouvernance associative, financement durable, impact social, innovation, coopération internationale, et bien plus encore.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="feature-card h-100 p-4 text-center" style={{
                                background: 'var(--white)',
                                borderRadius: '10px',
                                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                                transition: 'transform 0.3s, box-shadow 0.3s',
                                height: '100%'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                            }}>
                                <div className="feature-icon mb-3">
                                    <i className="fas fa-network-wired fa-3x" style={{color: 'var(--primary-color)'}}></i>
                                </div>
                                <h4 className="mb-3">Networking international</h4>
                                <p>
                                    Connectez-vous avec des dirigeants associatifs du monde entier, créez des partenariats transfrontaliers et élargissez votre réseau à l'échelle internationale.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="feature-card h-100 p-4 text-center" style={{
                                background: 'var(--white)',
                                borderRadius: '10px',
                                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                                transition: 'transform 0.3s, box-shadow 0.3s',
                                height: '100%'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                            }}>
                                <div className="feature-icon mb-3">
                                    <i className="fas fa-certificate fa-3x" style={{color: 'var(--primary-color)'}}></i>
                                </div>
                                <h4 className="mb-3">Certification et reconnaissance</h4>
                                <p>
                                    Obtenez une attestation de participation et bénéficiez d'une reconnaissance professionnelle qui valorise votre engagement dans le développement du secteur associatif.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="feature-card h-100 p-4 text-center" style={{
                                background: 'var(--white)',
                                borderRadius: '10px',
                                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                                transition: 'transform 0.3s, box-shadow 0.3s',
                                height: '100%'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                            }}>
                                <div className="feature-icon mb-3">
                                    <i className="fas fa-users-cog fa-3x" style={{color: 'var(--primary-color)'}}></i>
                                </div>
                                <h4 className="mb-3">Ateliers pratiques</h4>
                                <p>
                                    Participez à des ateliers interactifs et des sessions de travail collaboratif où vous pourrez acquérir des compétences concrètes et applicables immédiatement.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="feature-card h-100 p-4 text-center" style={{
                                background: 'var(--white)',
                                borderRadius: '10px',
                                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                                transition: 'transform 0.3s, box-shadow 0.3s',
                                height: '100%'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                            }}>
                                <div className="feature-icon mb-3">
                                    <i className="fas fa-file-alt fa-3x" style={{color: 'var(--primary-color)'}}></i>
                                </div>
                                <h4 className="mb-3">Ressources documentaires</h4>
                                <p>
                                    Accédez à des documents exclusifs, des actes de congrès, des recommandations et des ressources précieuses pour votre développement professionnel.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Program Structure Section */}
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <h2 className="section-title text-center mb-5">Structure d'un congrès CDDAM</h2>
                            
                            <div className="row g-4">
                                <div className="col-md-6">
                                    <div className="program-item p-4 h-100" style={{
                                        background: 'var(--white)',
                                        borderRadius: '10px',
                                        border: '2px solid var(--primary-color)',
                                        height: '100%'
                                    }}>
                                        <div className="d-flex align-items-start mb-3">
                                            <i className="fas fa-flag-checkered fa-2x me-3" style={{color: 'var(--primary-color)'}}></i>
                                            <div>
                                                <h4 className="mb-2">Cérémonie d'ouverture</h4>
                                                <p className="mb-0">
                                                    Une cérémonie solennelle avec des discours d'ouverture, la présentation des enjeux du congrès et l'accueil des participants internationaux.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="program-item p-4 h-100" style={{
                                        background: 'var(--white)',
                                        borderRadius: '10px',
                                        border: '2px solid var(--primary-color)',
                                        height: '100%'
                                    }}>
                                        <div className="d-flex align-items-start mb-3">
                                            <i className="fas fa-comments fa-2x me-3" style={{color: 'var(--primary-color)'}}></i>
                                            <div>
                                                <h4 className="mb-2">Conférences plénières</h4>
                                                <p className="mb-0">
                                                    Des sessions plénières avec des intervenants de renommée internationale qui partagent leur vision et leur expertise sur les enjeux majeurs du secteur.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="program-item p-4 h-100" style={{
                                        background: 'var(--white)',
                                        borderRadius: '10px',
                                        border: '2px solid var(--primary-color)',
                                        height: '100%'
                                    }}>
                                        <div className="d-flex align-items-start mb-3">
                                            <i className="fas fa-tasks fa-2x me-3" style={{color: 'var(--primary-color)'}}></i>
                                            <div>
                                                <h4 className="mb-2">Ateliers thématiques</h4>
                                                <p className="mb-0">
                                                    Des ateliers interactifs en petits groupes permettant d'approfondir des sujets spécifiques et d'échanger des pratiques concrètes.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="program-item p-4 h-100" style={{
                                        background: 'var(--white)',
                                        borderRadius: '10px',
                                        border: '2px solid var(--primary-color)',
                                        height: '100%'
                                    }}>
                                        <div className="d-flex align-items-start mb-3">
                                            <i className="fas fa-handshake fa-2x me-3" style={{color: 'var(--primary-color)'}}></i>
                                            <div>
                                                <h4 className="mb-2">Sessions de networking</h4>
                                                <p className="mb-0">
                                                    Des moments dédiés à la rencontre et à l'échange avec les autres participants, la création de contacts et le développement de partenariats.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="program-item p-4 h-100" style={{
                                        background: 'var(--white)',
                                        borderRadius: '10px',
                                        border: '2px solid var(--primary-color)',
                                        height: '100%'
                                    }}>
                                        <div className="d-flex align-items-start mb-3">
                                            <i className="fas fa-file-contract fa-2x me-3" style={{color: 'var(--primary-color)'}}></i>
                                            <div>
                                                <h4 className="mb-2">Déclarations et recommandations</h4>
                                                <p className="mb-0">
                                                    L'adoption de déclarations communes et de recommandations qui guideront les actions futures du secteur associatif.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="program-item p-4 h-100" style={{
                                        background: 'var(--white)',
                                        borderRadius: '10px',
                                        border: '2px solid var(--primary-color)',
                                        height: '100%'
                                    }}>
                                        <div className="d-flex align-items-start mb-3">
                                            <i className="fas fa-glass-cheers fa-2x me-3" style={{color: 'var(--primary-color)'}}></i>
                                            <div>
                                                <h4 className="mb-2">Événements sociaux</h4>
                                                <p className="mb-0">
                                                    Des dîners de gala, des réceptions et des moments conviviaux pour renforcer les liens et célébrer les succès du secteur associatif.
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
                    <h2 className="section-title mb-4 text-white">Participez au prochain congrès international</h2>
                    <p className="lead mb-4">
                        Rejoignez les dirigeants associatifs les plus influents du monde entier pour façonner ensemble l'avenir du secteur associatif.
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

export default Congres;

