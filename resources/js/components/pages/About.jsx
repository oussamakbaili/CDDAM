import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function About() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        }
    }, [location]);
    return (
        <>
            <section className="page-header py-5" style={{background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%)', color: 'white'}}>
                <div className="container text-center">
                    <h1 className="display-4">À Propos</h1>
                    <p className="lead">Découvrez qui nous sommes</p>
                </div>
            </section>

            {/* Présentation Générale */}
            <section id="presentation" className="py-5">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-lg-10 mx-auto">
                            <div className="card shadow-sm border-0">
                                <div className="card-body p-5">
                                    <h2 className="section-title mb-4 text-center">Présentation Générale</h2>
                                    <p className="lead text-center mb-4">
                                        Le <strong>Club des Dirigeants des Associations Maroc (CDDAM)</strong> est une structure nationale dédiée au <strong>renforcement des capacités</strong>, au <strong>réseautage</strong>, à la <strong>valorisation</strong> et à l'<strong>accompagnement</strong> des dirigeants associatifs, entrepreneurs sociaux et porteurs de projets à impact.
                                    </p>
                                    <p className="text-center">
                                        Notre mission est de créer un écosystème dynamique et professionnel qui permet aux leaders du secteur associatif marocain de développer leurs compétences, partager leurs expériences et créer des partenariats stratégiques pour maximiser leur impact social.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Objectifs */}
                    <div className="row mb-5">
                        <div className="col-lg-6 mb-4">
                            <div className="card h-100 shadow-sm">
                                <div className="card-body">
                                    <h3 className="mb-4"><i className="fas fa-bullseye text-primary me-2"></i>Objectif Global</h3>
                                    <p className="lead">
                                        Créer un réseau structuré, professionnel et dynamique permettant aux dirigeants d'associations de développer leurs compétences, partager leurs expériences et créer des partenariats.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="card h-100 shadow-sm">
                                <div className="card-body">
                                    <h3 className="mb-4"><i className="fas fa-list-check text-primary me-2"></i>Objectifs Spécifiques</h3>
                                    <ul className="list-unstyled">
                                        <li><i className="fas fa-check-circle text-success me-2"></i>Promouvoir un leadership associatif moderne</li>
                                        <li><i className="fas fa-check-circle text-success me-2"></i>Renforcer les capacités managériales</li>
                                        <li><i className="fas fa-check-circle text-success me-2"></i>Faciliter la collaboration</li>
                                        <li><i className="fas fa-check-circle text-success me-2"></i>Développer une plateforme d'échange</li>
                                        <li><i className="fas fa-check-circle text-success me-2"></i>Mettre en avant l'innovation sociale</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Cibles */}
                    <div className="row mb-5">
                        <div className="col-12">
                            <div className="card shadow-sm">
                                <div className="card-body p-5">
                                    <h3 className="section-title mb-4 text-center"><i className="fas fa-users text-primary me-2"></i>Nos Cibles</h3>
                                    <div className="row">
                                        <div className="col-md-3 col-sm-6 mb-3">
                                            <div className="text-center p-3 bg-light rounded">
                                                <i className="fas fa-user-tie fa-2x text-primary mb-3"></i>
                                                <h5>Présidents d'associations</h5>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-6 mb-3">
                                            <div className="text-center p-3 bg-light rounded">
                                                <i className="fas fa-handshake fa-2x text-primary mb-3"></i>
                                                <h5>Dirigeants d'ONG</h5>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-6 mb-3">
                                            <div className="text-center p-3 bg-light rounded">
                                                <i className="fas fa-lightbulb fa-2x text-primary mb-3"></i>
                                                <h5>Entrepreneurs sociaux</h5>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-6 mb-3">
                                            <div className="text-center p-3 bg-light rounded">
                                                <i className="fas fa-briefcase fa-2x text-primary mb-3"></i>
                                                <h5>Cadres associatifs</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Identity Section */}
            <section className="py-5 bg-light">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-lg-8 mx-auto">
                            <h2 className="section-title">Notre identité</h2>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <h4><i className="fas fa-gavel" style={{color: 'var(--primary-color)'}}></i> Forme juridique</h4>
                                    <p>Association à but non lucratif offrant des services à la communauté des dirigeants.</p>
                                </div>
                            </div>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <h4><i className="fas fa-question-circle" style={{color: 'var(--primary-color)'}}></i> Pourquoi le CDDAM?</h4>
                                    <p>Le Club des Dirigeants des Associations Maroc offre un réseau professionnel de qualité, sécurisé et efficace, disposant d'une plateforme innovante et d'un annuaire d'experts spécialisés dans le secteur associatif. Nous offrons des outils, des ressources et des opportunités de networking exclusivement dédiés aux dirigeants d'associations.</p>
                                </div>
                            </div>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <h4><i className="fas fa-map-marked-alt" style={{color: 'var(--primary-color)'}}></i> Périmètre d'activités</h4>
                                    <ul>
                                        <li>Made in Morocco.</li>
                                        <li>Présence Régionale, Nationale et Internationale</li>
                                        <li>Représentation de tous les secteurs d'activités.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <h4><i className="fas fa-compass" style={{color: 'var(--primary-color)'}}></i> Orientations</h4>
                                    <p>Aucune vocation politique ou religieuse.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="identity-card">
                                <h3><i className="fas fa-eye"></i> Vision</h3>
                                <p>Être la référence incontournable en matière de développement et de renforcement des capacités du secteur associatif marocain, en créant un écosystème d'excellence qui favorise l'innovation, la collaboration et l'impact social durable.</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="identity-card">
                                <h3><i className="fas fa-bullseye"></i> Mission</h3>
                                <ul>
                                    <li>Rassembler et connecter les dirigeants d'associations</li>
                                    <li>Renforcer les capacités organisationnelles et managériales</li>
                                    <li>Créer des opportunités de partenariats stratégiques</li>
                                    <li>Promouvoir l'excellence et l'innovation dans le secteur associatif</li>
                                    <li>Contribuer au développement durable et à l'impact social</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="identity-card">
                                <h3><i className="fas fa-heart"></i> Valeurs</h3>
                                <ul>
                                    <li><i className="fas fa-star text-warning me-2"></i>Leadership</li>
                                    <li><i className="fas fa-lightbulb text-info me-2"></i>Innovation</li>
                                    <li><i className="fas fa-eye text-primary me-2"></i>Transparence</li>
                                    <li><i className="fas fa-hand-holding-heart text-danger me-2"></i>Impact social</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Structure Organisationnelle */}
            <section id="structure" className="py-5">
                <div className="container">
                    <h2 className="section-title text-center mb-5">Structure Organisationnelle</h2>
                    <div className="row">
                        <div className="col-md-6 col-lg-3 mb-4">
                            <div className="card h-100 text-center shadow-sm">
                                <div className="card-body">
                                    <i className="fas fa-users-cog fa-3x text-primary mb-3"></i>
                                    <h4>Assemblée Générale</h4>
                                    <p className="text-muted">Organe souverain de l'association</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-4">
                            <div className="card h-100 text-center shadow-sm">
                                <div className="card-body">
                                    <i className="fas fa-building fa-3x text-primary mb-3"></i>
                                    <h4>Conseil d'Administration</h4>
                                    <p className="text-muted">Gouvernance et stratégie</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-4">
                            <div className="card h-100 text-center shadow-sm">
                                <div className="card-body">
                                    <i className="fas fa-clipboard-list fa-3x text-primary mb-3"></i>
                                    <h4 id="commissions">Commissions Thématiques</h4>
                                    <p className="text-muted">Expertise par domaine</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-4">
                            <div className="card h-100 text-center shadow-sm">
                                <div className="card-body">
                                    <i className="fas fa-map-marked-alt fa-3x text-primary mb-3"></i>
                                    <h4>Antennes Régionales</h4>
                                    <p className="text-muted">Présence territoriale</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Financement */}
            <section className="py-5 bg-light">
                <div className="container">
                    <h2 className="section-title text-center mb-5">Modèle de Financement</h2>
                    <div className="row">
                        <div className="col-md-6 col-lg-3 mb-4">
                            <div className="card h-100 border-primary">
                                <div className="card-body text-center">
                                    <i className="fas fa-money-bill-wave fa-3x text-primary mb-3"></i>
                                    <h5>Cotisations</h5>
                                    <p className="text-muted small">Membres Premium et VIP</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-4">
                            <div className="card h-100 border-primary">
                                <div className="card-body text-center">
                                    <i className="fas fa-handshake fa-3x text-primary mb-3"></i>
                                    <h5>Sponsoring</h5>
                                    <p className="text-muted small">Partenaires stratégiques</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-4">
                            <div className="card h-100 border-primary">
                                <div className="card-body text-center">
                                    <i className="fas fa-gift fa-3x text-primary mb-3"></i>
                                    <h5>Subventions</h5>
                                    <p className="text-muted small">Financements institutionnels</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-4">
                            <div className="card h-100 border-primary">
                                <div className="card-body text-center">
                                    <i className="fas fa-calendar-check fa-3x text-primary mb-3"></i>
                                    <h5>Événements Payants</h5>
                                    <p className="text-muted small">Formations et conférences</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Attendu */}
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <div className="card shadow-lg border-0">
                                <div className="card-body p-5">
                                    <h2 className="section-title text-center mb-5">Impact Attendu</h2>
                                    <div className="row">
                                        <div className="col-md-4 mb-4">
                                            <div className="text-center p-4">
                                                <i className="fas fa-chart-line fa-3x text-success mb-3"></i>
                                                <h4>Professionnalisation</h4>
                                                <p>Professionnalisation du secteur associatif marocain</p>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-4">
                                            <div className="text-center p-4">
                                                <i className="fas fa-shield-alt fa-3x text-primary mb-3"></i>
                                                <h4>Gouvernance</h4>
                                                <p>Renforcement de la gouvernance associative</p>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-4">
                                            <div className="text-center p-4">
                                                <i className="fas fa-network-wired fa-3x text-info mb-3"></i>
                                                <h4>Partenariats</h4>
                                                <p>Développement de partenariats stratégiques</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Plan de Lancement */}
            <section className="py-5 bg-light">
                <div className="container">
                    <h2 className="section-title text-center mb-5">Plan de Lancement</h2>
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <div className="timeline">
                                <div className="row mb-4">
                                    <div className="col-md-6 mb-4">
                                        <div className="card h-100 shadow-sm border-primary border-2">
                                            <div className="card-body p-4">
                                                <div className="d-flex align-items-center mb-3">
                                                    <div className="badge bg-primary rounded-circle p-3 me-3" style={{width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                                        <span className="fs-4 fw-bold">1</span>
                                                    </div>
                                                    <h4 className="mb-0">Phase 1: Préparation</h4>
                                                </div>
                                                <ul className="list-unstyled ms-5">
                                                    <li><i className="fas fa-check-circle text-success me-2"></i>Structuration juridique</li>
                                                    <li><i className="fas fa-check-circle text-success me-2"></i>Définition de la stratégie</li>
                                                    <li><i className="fas fa-check-circle text-success me-2"></i>Mise en place de l'équipe</li>
                                                    <li><i className="fas fa-check-circle text-success me-2"></i>Développement de la plateforme</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <div className="card h-100 shadow-sm border-success border-2">
                                            <div className="card-body p-4">
                                                <div className="d-flex align-items-center mb-3">
                                                    <div className="badge bg-success rounded-circle p-3 me-3" style={{width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                                        <span className="fs-4 fw-bold">2</span>
                                                    </div>
                                                    <h4 className="mb-0">Phase 2: Lancement Officiel</h4>
                                                </div>
                                                <ul className="list-unstyled ms-5">
                                                    <li><i className="fas fa-check-circle text-success me-2"></i>Cérémonie d'inauguration</li>
                                                    <li><i className="fas fa-check-circle text-success me-2"></i>Campagne de communication</li>
                                                    <li><i className="fas fa-check-circle text-success me-2"></i>Recrutement des premiers membres</li>
                                                    <li><i className="fas fa-check-circle text-success me-2"></i>Premiers événements</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <div className="card h-100 shadow-sm border-info border-2">
                                            <div className="card-body p-4">
                                                <div className="d-flex align-items-center mb-3">
                                                    <div className="badge bg-info rounded-circle p-3 me-3" style={{width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                                        <span className="fs-4 fw-bold">3</span>
                                                    </div>
                                                    <h4 className="mb-0">Phase 3: Déploiement</h4>
                                                </div>
                                                <ul className="list-unstyled ms-5">
                                                    <li><i className="fas fa-check-circle text-success me-2"></i>Mise en place des commissions</li>
                                                    <li><i className="fas fa-check-circle text-success me-2"></i>Programmes de formation</li>
                                                    <li><i className="fas fa-check-circle text-success me-2"></i>Activation des antennes régionales</li>
                                                    <li><i className="fas fa-check-circle text-success me-2"></i>Développement des partenariats</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <div className="card h-100 shadow-sm border-warning border-2">
                                            <div className="card-body p-4">
                                                <div className="d-flex align-items-center mb-3">
                                                    <div className="badge bg-warning rounded-circle p-3 me-3" style={{width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                                        <span className="fs-4 fw-bold">4</span>
                                                    </div>
                                                    <h4 className="mb-0">Phase 4: Expansion</h4>
                                                </div>
                                                <ul className="list-unstyled ms-5">
                                                    <li><i className="fas fa-check-circle text-success me-2"></i>Élargissement du réseau</li>
                                                    <li><i className="fas fa-check-circle text-success me-2"></i>Internationalisation</li>
                                                    <li><i className="fas fa-check-circle text-success me-2"></i>Innovation continue</li>
                                                    <li><i className="fas fa-check-circle text-success me-2"></i>Impact mesurable</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;
