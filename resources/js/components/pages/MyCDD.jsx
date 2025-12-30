import React from 'react';
import { Link } from 'react-router-dom';

function MyCDD() {
    return (
        <>
            {/* Hero Section with Blue Background */}
            <section className="py-5" style={{
                background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%)',
                color: 'white',
                minHeight: '500px',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <div className="hero-content">
                                <h1 className="display-3 fw-bold mb-4" style={{
                                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                                    lineHeight: '1.2'
                                }}>
                                    MY CDDAM - VOTRE RÉSEAU SOCIAL<br />
                                    <span style={{fontSize: '0.9em'}}>D'AFFAIRES</span>
                                </h1>
                                <p className="lead mb-4" style={{fontSize: '1.2rem'}}>
                                    La plateforme exclusive qui connecte les dirigeants associatifs du Maroc
                                </p>
                                <Link 
                                    to="/packs-adhesions" 
                                    className="btn btn-light btn-lg px-5 py-3 fw-bold"
                                    style={{
                                        borderRadius: '5px',
                                        border: '2px solid white',
                                        fontSize: '1.1rem',
                                        transition: 'all 0.3s'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'transparent';
                                        e.currentTarget.style.color = 'white';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'white';
                                        e.currentTarget.style.color = 'var(--primary-color)';
                                    }}
                                >
                                    REJOIGNEZ LE CDDAM
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="hero-image text-center">
                                <img 
                                    src="/images/description.png" 
                                    alt="MyCDDAM - Réseau Social d'Affaires" 
                                    className="img-fluid"
                                    style={{
                                        maxWidth: '100%',
                                        height: 'auto',
                                        filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.3))'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="py-5" style={{background: '#f8f9fa'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <div className="intro-section mb-5">
                                <h2 className="section-title mb-4" style={{color: 'var(--primary-color)', fontSize: '2.5rem'}}>
                                    Bienvenue sur MyCDDAM
                                </h2>
                                <p className="lead mb-4" style={{fontSize: '1.25rem', lineHeight: '1.8'}}>
                                    Bienvenue sur <strong>MyCDDAM</strong>, votre réseau social d'affaires dédié aux membres du <strong>Club des Dirigeants des Associations Maroc</strong>. MyCDDAM est conçu pour faciliter les échanges, les collaborations et les opportunités au sein de notre communauté dynamique de dirigeants associatifs.
                                </p>
                                <p style={{fontSize: '1.1rem', lineHeight: '1.8', color: '#555'}}>
                                    En tant que membre de MyCDDAM, vous bénéficiez d'un accès exclusif à une plateforme innovante qui vous permet de développer votre réseau, partager votre expertise et créer des synergies durables avec d'autres dirigeants passionnés par le développement associatif.
                                </p>
                            </div>

                            {/* Features Grid */}
                            <div className="features-grid mt-5">
                                <div className="row g-4">
                                    {/* Connecter */}
                                    <div className="col-md-6">
                                        <div className="feature-card p-4 h-100" style={{
                                            background: 'white',
                                            borderRadius: '15px',
                                            boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                                            border: '2px solid var(--primary-color)',
                                            transition: 'transform 0.3s, box-shadow 0.3s',
                                            height: '100%'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-5px)';
                                            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
                                        }}>
                                            <div className="feature-icon mb-3">
                                                <i className="fas fa-user-friends fa-3x" style={{color: 'var(--primary-color)'}}></i>
                                            </div>
                                            <h3 className="mb-3" style={{color: 'var(--primary-color)'}}>Connecter</h3>
                                            <p style={{lineHeight: '1.8', color: '#555'}}>
                                                Élargissez votre réseau professionnel en vous connectant avec d'autres dirigeants associatifs, entrepreneurs et professionnels de divers secteurs d'activité. Créez des liens solides et nouez des relations précieuses qui peuvent conduire à des opportunités de collaboration fructueuses et à des partenariats stratégiques pour le développement de votre association.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Partager */}
                                    <div className="col-md-6">
                                        <div className="feature-card p-4 h-100" style={{
                                            background: 'white',
                                            borderRadius: '15px',
                                            boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                                            border: '2px solid var(--primary-color)',
                                            transition: 'transform 0.3s, box-shadow 0.3s',
                                            height: '100%'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-5px)';
                                            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
                                        }}>
                                            <div className="feature-icon mb-3">
                                                <i className="fas fa-share-alt fa-3x" style={{color: 'var(--primary-color)'}}></i>
                                            </div>
                                            <h3 className="mb-3" style={{color: 'var(--primary-color)'}}>Partager</h3>
                                            <p style={{lineHeight: '1.8', color: '#555'}}>
                                                Partagez vos expériences, vos connaissances et vos idées avec la communauté CDDAM. Publiez des articles, des vidéos ou des photos pour mettre en valeur votre expertise et inspirer les autres membres. Contribuez à des discussions stimulantes et approfondissez votre compréhension des défis et des opportunités dans le monde associatif marocain.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Collaborer */}
                                    <div className="col-md-6">
                                        <div className="feature-card p-4 h-100" style={{
                                            background: 'white',
                                            borderRadius: '15px',
                                            boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                                            border: '2px solid var(--primary-color)',
                                            transition: 'transform 0.3s, box-shadow 0.3s',
                                            height: '100%'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-5px)';
                                            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
                                        }}>
                                            <div className="feature-icon mb-3">
                                                <i className="fas fa-handshake fa-3x" style={{color: 'var(--primary-color)'}}></i>
                                            </div>
                                            <h3 className="mb-3" style={{color: 'var(--primary-color)'}}>Collaborer</h3>
                                            <p style={{lineHeight: '1.8', color: '#555'}}>
                                                Trouvez des partenaires associatifs, des consultants ou des experts dans votre domaine d'activité. Utilisez les fonctionnalités de recherche avancée pour identifier les profils correspondants à vos besoins spécifiques. Établissez des collaborations stratégiques qui peuvent renforcer votre association et stimuler son impact social et son développement durable.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Découvrir */}
                                    <div className="col-md-6">
                                        <div className="feature-card p-4 h-100" style={{
                                            background: 'white',
                                            borderRadius: '15px',
                                            boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                                            border: '2px solid var(--primary-color)',
                                            transition: 'transform 0.3s, box-shadow 0.3s',
                                            height: '100%'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-5px)';
                                            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
                                        }}>
                                            <div className="feature-icon mb-3">
                                                <i className="fas fa-compass fa-3x" style={{color: 'var(--primary-color)'}}></i>
                                            </div>
                                            <h3 className="mb-3" style={{color: 'var(--primary-color)'}}>Découvrir</h3>
                                            <p style={{lineHeight: '1.8', color: '#555'}}>
                                                Restez informé des événements, des conférences et des opportunités professionnelles à travers notre calendrier intégré. Explorez les ressources et les contenus pertinents pour votre secteur d'activité associatif. Soyez au courant des dernières tendances et des innovations qui façonnent le monde associatif et le développement social au Maroc.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Engager */}
                                    <div className="col-md-12">
                                        <div className="feature-card p-4" style={{
                                            background: 'white',
                                            borderRadius: '15px',
                                            boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                                            border: '2px solid var(--primary-color)',
                                            transition: 'transform 0.3s, box-shadow 0.3s'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-5px)';
                                            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
                                        }}>
                                            <div className="row align-items-center">
                                                <div className="col-md-2 text-center mb-3 mb-md-0">
                                                    <i className="fas fa-comments fa-4x" style={{color: 'var(--primary-color)'}}></i>
                                                </div>
                                                <div className="col-md-10">
                                                    <h3 className="mb-3" style={{color: 'var(--primary-color)'}}>Engager</h3>
                                                    <p style={{lineHeight: '1.8', color: '#555', margin: 0}}>
                                                        Interagissez avec d'autres membres à travers des commentaires, des likes et des messages privés. Participez à des groupes de discussion spécifiques à vos intérêts et échangez des idées avec des personnes partageant les mêmes passions pour le développement associatif. Contribuez à faire de MyCDDAM une communauté vibrante, collaborative et engagée dans la création de valeur sociale.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Security Section */}
            <section className="py-5" style={{background: 'white'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <div className="security-box p-4" style={{
                                background: 'linear-gradient(135deg, rgba(0, 129, 164, 0.1) 0%, rgba(0, 106, 135, 0.1) 100%)',
                                borderRadius: '15px',
                                border: '2px solid var(--primary-color)'
                            }}>
                                <div className="row align-items-center">
                                    <div className="col-md-2 text-center mb-3 mb-md-0">
                                        <i className="fas fa-shield-alt fa-4x" style={{color: 'var(--primary-color)'}}></i>
                                    </div>
                                    <div className="col-md-10">
                                        <h3 className="mb-3" style={{color: 'var(--primary-color)'}}>
                                            Confidentialité et sécurité
                                        </h3>
                                        <p style={{lineHeight: '1.8', color: '#555', margin: 0, fontSize: '1.1rem'}}>
                                            Chez <strong>MyCDDAM</strong>, la confidentialité et la sécurité de vos données sont nos priorités absolues. Nous veillons à ce que vos informations personnelles soient protégées et que seules les personnes autorisées aient accès à votre profil et à vos activités. Votre confiance est essentielle pour nous, et nous nous engageons à maintenir les plus hauts standards de sécurité et de protection des données.
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
                    <h2 className="section-title mb-4 text-white" style={{fontSize: '2.5rem'}}>
                        Rejoignez MyCDDAM dès aujourd'hui
                    </h2>
                    <p className="lead mb-4" style={{fontSize: '1.25rem'}}>
                        Profitez de tous les avantages offerts par notre réseau social d'affaires exclusif. Ensemble, nous renforçons notre communauté et stimulons le succès collectif des dirigeants associatifs du Maroc.
                    </p>
                    <div className="d-flex gap-3 justify-content-center flex-wrap">
                        <Link to="/packs-adhesions" className="btn btn-light btn-lg px-5 py-3 fw-bold">
                            <i className="fas fa-user-plus me-2"></i>
                            Devenir membre
                        </Link>
                        <Link to="/contact" className="btn btn-outline-light btn-lg px-5 py-3 fw-bold">
                            <i className="fas fa-envelope me-2"></i>
                            Nous contacter
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default MyCDD;
