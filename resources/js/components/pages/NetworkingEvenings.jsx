import React from 'react';
import { Link } from 'react-router-dom';

function NetworkingEvenings() {
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
                    <h1 className="display-4 mb-3 fw-bold">Soirées de Networking</h1>
                    <p className="lead mb-0">Connectez-vous avec les dirigeants les plus influents du Maroc</p>
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
                                    <i className="fas fa-wine-glass-alt me-3"></i>
                                    Un espace d'échange privilégié
                                </h2>
                                <p className="lead mb-4">
                                    Les soirées de networking du CDDAM sont des événements mensuels incontournables qui rassemblent les dirigeants associatifs les plus dynamiques du Maroc. Chaque mois, nous créons un espace convivial et professionnel où les opportunités se rencontrent et où les synergies se créent naturellement.
                                </p>
                                <p>
                                    Ces soirées exclusives offrent une plateforme unique pour développer votre réseau professionnel, échanger des idées innovantes, partager vos expériences et découvrir de nouvelles opportunités de collaboration. Dans une atmosphère détendue et élégante, vous pourrez rencontrer des pairs passionnés par le développement associatif et le leadership.
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
                                    <i className="fas fa-users fa-4x mb-3" style={{color: 'var(--primary-color)'}}></i>
                                    <h3 className="mb-3">Réseau d'excellence</h3>
                                    <p className="mb-0">
                                        Rejoignez une communauté de plus de 6000 dirigeants associatifs répartis dans 12 régions du Maroc et plus de 30 pays à l'international.
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
                    <h2 className="section-title text-center mb-5">Pourquoi participer aux soirées de networking CDDAM ?</h2>
                    
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
                                    <i className="fas fa-handshake fa-3x" style={{color: 'var(--primary-color)'}}></i>
                                </div>
                                <h4 className="mb-3">Rencontres stratégiques</h4>
                                <p>
                                    Connectez-vous avec des dirigeants de tous les secteurs d'activité et créez des partenariats durables qui propulseront votre association vers de nouveaux sommets.
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
                                    <i className="fas fa-lightbulb fa-3x" style={{color: 'var(--primary-color)'}}></i>
                                </div>
                                <h4 className="mb-3">Thématiques inspirantes</h4>
                                <p>
                                    Chaque soirée aborde une thématique spécifique en lien avec les enjeux actuels du secteur associatif, vous permettant d'acquérir de nouvelles perspectives et connaissances.
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
                                    <i className="fas fa-chart-line fa-3x" style={{color: 'var(--primary-color)'}}></i>
                                </div>
                                <h4 className="mb-3">Opportunités d'affaires</h4>
                                <p>
                                    Découvrez de nouvelles opportunités de collaboration, de partenariats et de projets qui contribueront au développement et à la croissance de votre association.
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
                                    <i className="fas fa-user-graduate fa-3x" style={{color: 'var(--primary-color)'}}></i>
                                </div>
                                <h4 className="mb-3">Partage d'expertise</h4>
                                <p>
                                    Bénéficiez de l'expérience et des connaissances de dirigeants chevronnés qui partagent volontiers leurs meilleures pratiques et leurs leçons apprises.
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
                                    <i className="fas fa-calendar-check fa-3x" style={{color: 'var(--primary-color)'}}></i>
                                </div>
                                <h4 className="mb-3">Rythme mensuel</h4>
                                <p>
                                    Avec plus de 60 soirées organisées chaque année, vous avez l'opportunité régulière de renforcer votre réseau et de rester connecté avec la communauté CDDAM.
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
                                    <i className="fas fa-star fa-3x" style={{color: 'var(--primary-color)'}}></i>
                                </div>
                                <h4 className="mb-3">Ambiance exclusive</h4>
                                <p>
                                    Profitez d'une atmosphère raffinée et conviviale dans des lieux prestigieux, où l'excellence et le professionnalisme sont au rendez-vous.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Format Section */}
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <h2 className="section-title text-center mb-5">Format des soirées</h2>
                            
                            <div className="timeline-style mb-4">
                                <div className="d-flex mb-4">
                                    <div className="flex-shrink-0">
                                        <div className="timeline-icon" style={{
                                            width: '60px',
                                            height: '60px',
                                            borderRadius: '50%',
                                            background: 'var(--primary-color)',
                                            color: 'white',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '24px',
                                            fontWeight: 'bold'
                                        }}>1</div>
                                    </div>
                                    <div className="flex-grow-1 ms-4">
                                        <h4 className="mb-2">Accueil et networking informel</h4>
                                        <p className="mb-0">
                                            Dès votre arrivée, profitez d'un moment de convivialité autour d'un cocktail d'accueil. C'est l'occasion idéale de faire connaissance avec les autres participants dans une atmosphère détendue.
                                        </p>
                                    </div>
                                </div>

                                <div className="d-flex mb-4">
                                    <div className="flex-shrink-0">
                                        <div className="timeline-icon" style={{
                                            width: '60px',
                                            height: '60px',
                                            borderRadius: '50%',
                                            background: 'var(--primary-color)',
                                            color: 'white',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '24px',
                                            fontWeight: 'bold'
                                        }}>2</div>
                                    </div>
                                    <div className="flex-grow-1 ms-4">
                                        <h4 className="mb-2">Présentation et thématique du mois</h4>
                                        <p className="mb-0">
                                            Découvrez les actualités du CDDAM et plongez dans la thématique du mois présentée par des experts reconnus. Des sujets variés sont abordés : innovation, gouvernance, financement, impact social, leadership, et bien plus encore.
                                        </p>
                                    </div>
                                </div>

                                <div className="d-flex mb-4">
                                    <div className="flex-shrink-0">
                                        <div className="timeline-icon" style={{
                                            width: '60px',
                                            height: '60px',
                                            borderRadius: '50%',
                                            background: 'var(--primary-color)',
                                            color: 'white',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '24px',
                                            fontWeight: 'bold'
                                        }}>3</div>
                                    </div>
                                    <div className="flex-grow-1 ms-4">
                                        <h4 className="mb-2">Échanges et discussions</h4>
                                        <p className="mb-0">
                                            Participez à des discussions enrichissantes et des échanges d'idées. Posez vos questions, partagez vos expériences et bénéficiez des conseils de vos pairs.
                                        </p>
                                    </div>
                                </div>

                                <div className="d-flex">
                                    <div className="flex-shrink-0">
                                        <div className="timeline-icon" style={{
                                            width: '60px',
                                            height: '60px',
                                            borderRadius: '50%',
                                            background: 'var(--primary-color)',
                                            color: 'white',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '24px',
                                            fontWeight: 'bold'
                                        }}>4</div>
                                    </div>
                                    <div className="flex-grow-1 ms-4">
                                        <h4 className="mb-2">Dîner et networking continu</h4>
                                        <p className="mb-0">
                                            Continuez vos échanges autour d'un dîner de qualité. C'est le moment privilégié pour approfondir vos conversations, échanger vos cartes de visite et planifier des rencontres de suivi.
                                        </p>
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
                    <h2 className="section-title mb-4 text-white">Rejoignez la prochaine soirée de networking</h2>
                    <p className="lead mb-4">
                        Ne manquez pas l'opportunité de développer votre réseau et de participer à des échanges enrichissants avec les dirigeants associatifs les plus influents du Maroc.
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

export default NetworkingEvenings;

