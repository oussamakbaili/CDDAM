import React from 'react';
import { Link } from 'react-router-dom';

function Evenements() {
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
                    <h1 className="display-4 mb-3 fw-bold">Événements Spéciaux</h1>
                    <p className="lead mb-0">Des moments uniques qui marquent la vie du CDDAM</p>
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
                                    <i className="fas fa-star me-3"></i>
                                    Une programmation riche et variée
                                </h2>
                                <p className="lead mb-4">
                                    Au-delà de nos activités régulières, le CDDAM organise tout au long de l'année une série d'événements spéciaux qui enrichissent l'expérience de nos membres et renforcent les liens au sein de notre communauté.
                                </p>
                                <p>
                                    Ces événements exceptionnels offrent des opportunités uniques de networking, d'apprentissage, de célébration et de développement personnel et professionnel. Chaque événement est soigneusement conçu pour créer de la valeur, inspirer et connecter les dirigeants associatifs dans des contextes variés et stimulants.
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
                                    <i className="fas fa-calendar-star fa-4x mb-3" style={{color: 'var(--primary-color)'}}></i>
                                    <h3 className="mb-3">Événements d'exception</h3>
                                    <p className="mb-0">
                                        Une programmation diversifiée qui combine excellence, innovation et convivialité pour offrir à nos membres des expériences mémorables et enrichissantes.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Event Types Section */}
            <section className="py-5 bg-light">
                <div className="container">
                    <h2 className="section-title text-center mb-5">Types d'événements spéciaux</h2>
                    
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-4">
                            <div className="event-type-card p-4 h-100" style={{
                                background: 'var(--white)',
                                borderRadius: '15px',
                                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                                border: '2px solid var(--primary-color)',
                                height: '100%',
                                transition: 'transform 0.3s'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                <div className="event-icon mb-3 text-center">
                                    <i className="fas fa-utensils fa-3x" style={{color: 'var(--primary-color)'}}></i>
                                </div>
                                <h4 className="mb-3 text-center">Déjeuners-débats</h4>
                                <p className="mb-0">
                                    Des rencontres conviviales autour d'un déjeuner où des experts partagent leurs insights sur des sujets d'actualité. L'occasion parfaite de combiner networking et apprentissage dans un cadre détendu.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="event-type-card p-4 h-100" style={{
                                background: 'var(--white)',
                                borderRadius: '15px',
                                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                                border: '2px solid var(--primary-color)',
                                height: '100%',
                                transition: 'transform 0.3s'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                <div className="event-icon mb-3 text-center">
                                    <i className="fas fa-glass-cheers fa-3x" style={{color: 'var(--primary-color)'}}></i>
                                </div>
                                <h4 className="mb-3 text-center">Dîners de gala</h4>
                                <p className="mb-0">
                                    Des soirées prestigieuses qui célèbrent les succès du secteur associatif, récompensent l'excellence et renforcent les liens dans une atmosphère élégante et festive.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="event-type-card p-4 h-100" style={{
                                background: 'var(--white)',
                                borderRadius: '15px',
                                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                                border: '2px solid var(--primary-color)',
                                height: '100%',
                                transition: 'transform 0.3s'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                <div className="event-icon mb-3 text-center">
                                    <i className="fas fa-plane fa-3x" style={{color: 'var(--primary-color)'}}></i>
                                </div>
                                <h4 className="mb-3 text-center">Voyages d'études</h4>
                                <p className="mb-0">
                                    Des missions d'observation et d'échange dans d'autres régions ou pays pour découvrir les meilleures pratiques, créer des partenariats internationaux et élargir vos horizons.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="event-type-card p-4 h-100" style={{
                                background: 'var(--white)',
                                borderRadius: '15px',
                                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                                border: '2px solid var(--primary-color)',
                                height: '100%',
                                transition: 'transform 0.3s'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                <div className="event-icon mb-3 text-center">
                                    <i className="fas fa-chalkboard-teacher fa-3x" style={{color: 'var(--primary-color)'}}></i>
                                </div>
                                <h4 className="mb-3 text-center">Conférences spéciales</h4>
                                <p className="mb-0">
                                    Des conférences exceptionnelles avec des intervenants de renommée internationale qui partagent leur vision et leur expertise sur des enjeux majeurs du secteur associatif.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="event-type-card p-4 h-100" style={{
                                background: 'var(--white)',
                                borderRadius: '15px',
                                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                                border: '2px solid var(--primary-color)',
                                height: '100%',
                                transition: 'transform 0.3s'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                <div className="event-icon mb-3 text-center">
                                    <i className="fas fa-users fa-3x" style={{color: 'var(--primary-color)'}}></i>
                                </div>
                                <h4 className="mb-3 text-center">Rencontres informelles</h4>
                                <p className="mb-0">
                                    Des moments de convivialité dans un cadre décontracté pour échanger librement, partager des expériences et renforcer les relations amicales entre membres.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="event-type-card p-4 h-100" style={{
                                background: 'var(--white)',
                                borderRadius: '15px',
                                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                                border: '2px solid var(--primary-color)',
                                height: '100%',
                                transition: 'transform 0.3s'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                <div className="event-icon mb-3 text-center">
                                    <i className="fas fa-trophy fa-3x" style={{color: 'var(--primary-color)'}}></i>
                                </div>
                                <h4 className="mb-3 text-center">Cérémonies de remise de prix</h4>
                                <p className="mb-0">
                                    Des événements qui célèbrent l'excellence et l'innovation dans le secteur associatif, reconnaissant les contributions remarquables de nos membres et partenaires.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="event-type-card p-4 h-100" style={{
                                background: 'var(--white)',
                                borderRadius: '15px',
                                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                                border: '2px solid var(--primary-color)',
                                height: '100%',
                                transition: 'transform 0.3s'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                <div className="event-icon mb-3 text-center">
                                    <i className="fas fa-puzzle-piece fa-3x" style={{color: 'var(--primary-color)'}}></i>
                                </div>
                                <h4 className="mb-3 text-center">Activités de team building</h4>
                                <p className="mb-0">
                                    Des activités ludiques et collaboratives qui renforcent la cohésion, développent l'esprit d'équipe et créent des souvenirs mémorables entre les membres du CDDAM.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="event-type-card p-4 h-100" style={{
                                background: 'var(--white)',
                                borderRadius: '15px',
                                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                                border: '2px solid var(--primary-color)',
                                height: '100%',
                                transition: 'transform 0.3s'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                <div className="event-icon mb-3 text-center">
                                    <i className="fas fa-birthday-cake fa-3x" style={{color: 'var(--primary-color)'}}></i>
                                </div>
                                <h4 className="mb-3 text-center">Célébrations et anniversaires</h4>
                                <p className="mb-0">
                                    Des moments festifs pour célébrer les jalons importants du CDDAM, les anniversaires de membres éminents et les succès collectifs de notre communauté.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="event-type-card p-4 h-100" style={{
                                background: 'var(--white)',
                                borderRadius: '15px',
                                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                                border: '2px solid var(--primary-color)',
                                height: '100%',
                                transition: 'transform 0.3s'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                <div className="event-icon mb-3 text-center">
                                    <i className="fas fa-laptop fa-3x" style={{color: 'var(--primary-color)'}}></i>
                                </div>
                                <h4 className="mb-3 text-center">Webinaires et événements digitaux</h4>
                                <p className="mb-0">
                                    Des événements en ligne accessibles depuis partout, permettant de participer à des formations, conférences et échanges même à distance.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-5">
                <div className="container">
                    <h2 className="section-title text-center mb-5">Les avantages de participer aux événements spéciaux</h2>
                    
                    <div className="row g-4">
                        <div className="col-md-6">
                            <div className="benefit-item d-flex align-items-start p-3" style={{
                                background: 'rgba(0, 129, 164, 0.05)',
                                borderRadius: '10px',
                                borderLeft: '4px solid var(--primary-color)'
                            }}>
                                <i className="fas fa-check-circle fa-2x me-3 mt-1" style={{color: 'var(--primary-color)'}}></i>
                                <div>
                                    <h5 className="mb-2">Expériences uniques</h5>
                                    <p className="mb-0">
                                        Chaque événement est conçu pour offrir une expérience mémorable et enrichissante, différente de nos activités régulières.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="benefit-item d-flex align-items-start p-3" style={{
                                background: 'rgba(0, 129, 164, 0.05)',
                                borderRadius: '10px',
                                borderLeft: '4px solid var(--primary-color)'
                            }}>
                                <i className="fas fa-check-circle fa-2x me-3 mt-1" style={{color: 'var(--primary-color)'}}></i>
                                <div>
                                    <h5 className="mb-2">Diversité des formats</h5>
                                    <p className="mb-0">
                                        Une variété de formats et de contextes pour répondre à tous les goûts et besoins, du formel au décontracté.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="benefit-item d-flex align-items-start p-3" style={{
                                background: 'rgba(0, 129, 164, 0.05)',
                                borderRadius: '10px',
                                borderLeft: '4px solid var(--primary-color)'
                            }}>
                                <i className="fas fa-check-circle fa-2x me-3 mt-1" style={{color: 'var(--primary-color)'}}></i>
                                <div>
                                    <h5 className="mb-2">Renforcement des liens</h5>
                                    <p className="mb-0">
                                        Des occasions privilégiées de renforcer les relations personnelles et professionnelles dans des contextes variés et stimulants.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="benefit-item d-flex align-items-start p-3" style={{
                                background: 'rgba(0, 129, 164, 0.05)',
                                borderRadius: '10px',
                                borderLeft: '4px solid var(--primary-color)'
                            }}>
                                <i className="fas fa-check-circle fa-2x me-3 mt-1" style={{color: 'var(--primary-color)'}}></i>
                                <div>
                                    <h5 className="mb-2">Apprentissage continu</h5>
                                    <p className="mb-0">
                                        Des opportunités d'apprendre, de découvrir de nouvelles perspectives et d'acquérir des compétences dans des domaines variés.
                                    </p>
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
                    <h2 className="section-title mb-4 text-white">Rejoignez nos événements spéciaux</h2>
                    <p className="lead mb-4">
                        Ne manquez pas ces moments exceptionnels qui enrichissent votre expérience en tant que membre du CDDAM et renforcent votre réseau professionnel.
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

export default Evenements;

