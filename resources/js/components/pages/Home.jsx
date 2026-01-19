import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Home() {
    const { t } = useTranslation();
    console.log('Home component is rendering');
    const location = useLocation();
    
    const [openCategories, setOpenCategories] = useState({
        prive: true,
        public: false,
        ong: false
    });

    const [openIdentityCards, setOpenIdentityCards] = useState({
        vision: false,
        mission: false,
        valeurs: false,
        objectifs: false,
        charte: false,
        formeJuridique: false,
        pourquoi: false,
        perimetre: false,
        orientation: false
    });

    const [scrollDirection, setScrollDirection] = useState(1); // 1 pour descendre, -1 pour monter
    const scrollContainerRef = useRef(null);

    const toggleCategory = (category) => {
        setOpenCategories(prev => ({
            ...prev,
            [category]: !prev[category]
        }));
    };

    const toggleIdentityCard = (cardId) => {
        setOpenIdentityCards(prev => ({
            ...prev,
            [cardId]: !prev[cardId]
        }));
    };

    // Animation de scroll automatique
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        let scrollPosition = 0;
        const scrollSpeed = 0.5; // Vitesse de défilement
        let animationFrameId;

        const animate = () => {
            const maxScroll = container.scrollHeight - container.clientHeight;
            
            if (maxScroll <= 0) return; // Pas besoin de scroll si le contenu tient dans le conteneur

            scrollPosition += scrollSpeed * scrollDirection;

            // Inverser la direction quand on atteint les limites
            if (scrollPosition >= maxScroll) {
                scrollPosition = maxScroll;
                setScrollDirection(-1);
            } else if (scrollPosition <= 0) {
                scrollPosition = 0;
                setScrollDirection(1);
            }

            container.scrollTop = scrollPosition;
            animationFrameId = requestAnimationFrame(animate);
        };

        // Démarrer l'animation après un court délai
        const startDelay = setTimeout(() => {
            animationFrameId = requestAnimationFrame(animate);
        }, 1000);

        return () => {
            clearTimeout(startDelay);
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, [scrollDirection]);

    // Gérer le scroll vers l'ancre dans l'URL
    useEffect(() => {
        if (location.hash) {
            // Attendre que le DOM soit complètement chargé et rendu
            const scrollToElement = () => {
                const hash = location.hash.substring(1); // Enlever le #
                const element = document.getElementById(hash);
                if (element) {
                    // Calculer la position en tenant compte du header fixe
                    const header = document.querySelector('.main-header');
                    const headerHeight = header ? header.offsetHeight : 180;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

                    window.scrollTo({
                        top: Math.max(0, offsetPosition),
                        behavior: 'smooth'
                    });
                }
            };

            // Essayer immédiatement
            scrollToElement();
            
            // Réessayer après un court délai pour s'assurer que le DOM est prêt
            setTimeout(scrollToElement, 100);
            setTimeout(scrollToElement, 300);
        }
    }, [location.hash]);

    return (
        <>
            {/* Hero Section avec logo animé occupant toute la largeur de la zone grise */}
            <section className="hero-section hero-section-video">
                <video
                    src="/images/logo%20annimer.mp4"
                    className="hero-logo-tree hero-video-full"
                    autoPlay
                    muted
                    playsInline
                />
            </section>

            {/* Mot du Président Section */}
            <section className="president-message-section py-5">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        {/* Contenu du Message */}
                        <div className="col-lg-8 col-md-7 order-lg-1 order-2">
                            <div className="president-message-content">
                                <div className="president-message-header">
                                    <h2 className="president-message-title">
                                        <i className="fas fa-quote-left"></i>
                                        {t('home.presidentMessageTitle')}
                                    </h2>
                                    <div className="president-message-divider"></div>
                                </div>

                                <div className="president-message-text">
                                    <p className="president-intro">
                                        {t('home.presidentMessageIntro')}
                                        {t('home.presidentMessageIntroBold') && t('home.presidentMessageIntroBold').trim() !== '' && (
                                            <strong>{t('home.presidentMessageIntroBold')}</strong>
                                        )}
                                    </p>

                                    <p>
                                        {t('home.presidentMessageP1')}
                                    </p>

                                    <p>
                                        {t('home.presidentMessageP2')}
                                    </p>

                                    <p>
                                        {t('home.presidentMessageP3')}
                                    </p>

                                    <p className="president-highlight">
                                        <strong>{t('home.presidentMessageHighlight')}</strong>
                                    </p>

                                    <div className="president-ambition">
                                        <h3 className="president-ambition-title">
                                            <i className="fas fa-bullseye"></i>
                                            {t('home.presidentMessageAmbitionTitle')}
                                        </h3>
                                        <ul className="president-ambition-list">
                                            <li>
                                                <i className="fas fa-check-circle"></i>
                                                <span>{t('home.presidentMessageAmbition1')}</span>
                                            </li>
                                            <li>
                                                <i className="fas fa-check-circle"></i>
                                                <span>{t('home.presidentMessageAmbition2')}</span>
                                            </li>
                                            <li>
                                                <i className="fas fa-check-circle"></i>
                                                <span>{t('home.presidentMessageAmbition3')}</span>
                                            </li>
                                            <li>
                                                <i className="fas fa-check-circle"></i>
                                                <span>{t('home.presidentMessageAmbition4')}</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <p>
                                        {t('home.presidentMessageP4')}
                                    </p>

                                    <p>
                                        {t('home.presidentMessageP5')}
                                    </p>

                                    <p className="president-invitation">
                                        <strong>{t('home.presidentMessageInvitation')}</strong>
                                    </p>

                                    <div className="president-signature">
                                        <p className="president-name">{t('home.presidentName')}</p>
                                        <p className="president-role">{t('home.presidentRole')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Image du Président */}
                        <div className="col-lg-4 col-md-5 order-lg-2 order-1">
                            <div className="president-image-wrapper">
                                <div className="president-image-glow"></div>
                                <img
                                    src="/images/president.jpeg"
                                    alt={`${t('home.presidentName')} - ${t('home.presidentRole')}`}
                                    className="president-image"
                                />
                                <div className="president-image-overlay"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Royal Quote Section */}
            <section className="royal-quote-section py-5">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        {/* Citation Royale */}
                        <div className="col-lg-7 col-md-6 order-lg-1 order-2">
                            <div className="royal-quote-content">
                                <div className="royal-quote-header">
                                    <div className="royal-quote-title-wrapper">
                                        <h2 className="royal-quote-title">
                                            {t('home.royalQuoteTitle')}
                                        </h2>
                                        <div className="royal-quote-divider"></div>
                                    </div>
                                </div>

                                <div className="royal-quote-source">
                                    <p className="royal-quote-source-text">
                                        <i className="fas fa-quote-left"></i>
                                        {t('home.royalQuoteSource')}
                                    </p>
                                </div>

                                <div className="royal-quote-text-wrapper">
                                    <div className="royal-quote-text">
                                        <p className="royal-quote-main-text">
                                            {t('home.royalQuoteText')}
                                        </p>
                                    </div>
                                </div>

                                <div className="royal-quote-footer">
                                    <div className="royal-quote-date">
                                        <i className="fas fa-calendar-alt"></i>
                                        <span>{t('home.royalQuoteDate')}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Image du Roi */}
                        <div className="col-lg-5 col-md-6 order-lg-2 order-1">
                            <div className="royal-image-wrapper">
                                <div className="royal-image-glow"></div>
                                <img
                                    src="/images/image.png"
                                    alt={t('home.royalQuoteTitle')}
                                    className="royal-image"
                                />
                                <div className="royal-image-overlay"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Welcome Section - Design moderne et professionnel */}
            <section className="welcome-section py-5">
                <div className="container">
                    <div className="row g-4">
                        {/* Colonne gauche : Logo avec design premium */}
                        <div className="col-lg-4 col-md-12">
                            <div className="welcome-brand-showcase">
                                <div className="welcome-logo-container">
                                    <div className="welcome-logo-glow"></div>
                                    <img
                                        src="/images/description.png"
                                        alt={t('home.brandTitle')}
                                        className="welcome-logo-main"
                                    />
                                </div>
                                <h1 className="welcome-brand-title">
                                    {t('home.brandTitle')}
                                </h1>
                                <div className="welcome-brand-divider"></div>
                                <p className="welcome-brand-tagline">
                                    {t('home.tagline')}
                                </p>
                            </div>
                        </div>

                        {/* Colonne droite : Contenu avec design élégant */}
                        <div className="col-lg-8 col-md-12">
                            <div 
                                ref={scrollContainerRef}
                                id="qui-sommes-nous-content"
                                className="welcome-content-elegant"
                            >
                                <div className="welcome-intro-block">
                                    <p className="welcome-intro-text" dangerouslySetInnerHTML={{ __html: t('home.welcomeText') }} />
                                </div>

                                <div className="welcome-content-body">
                                    <p>{t('home.communityText')}</p>

                                    <p>{t('home.clubDescription')}</p>

                                    <div className="welcome-benefits-card">
                                        <h3 className="welcome-benefits-title">
                                            <i className="fas fa-star"></i>
                                            {t('home.exclusiveBenefits')}
                                        </h3>
                                        <ul className="welcome-benefits-list-modern">
                                            <li>
                                                <i className="fas fa-check-circle"></i>
                                                <span>{t('home.benefit1')}</span>
                                            </li>
                                            <li>
                                                <i className="fas fa-check-circle"></i>
                                                <span>{t('home.benefit2')}</span>
                                            </li>
                                            <li>
                                                <i className="fas fa-check-circle"></i>
                                                <span>{t('home.benefit3')}</span>
                                            </li>
                                            <li>
                                                <i className="fas fa-check-circle"></i>
                                                <span>{t('home.benefit4')}</span>
                                            </li>
                                            <li>
                                                <i className="fas fa-check-circle"></i>
                                                <span>{t('home.benefit5')}</span>
                                            </li>
                                            <li>
                                                <i className="fas fa-check-circle"></i>
                                                <span>{t('home.benefit6')}</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <p>{t('home.communityValues')}</p>

                                    <p>{t('home.joinText')}</p>

                                    <div className="welcome-cta-block">
                                        <p className="welcome-cta-text">
                                            <strong>{t('home.welcomeMessage')}</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Trois icônes avec design moderne */}
                    <div className="row mt-5 g-4">
                        <div className="col-md-4">
                            <div className="welcome-feature-card">
                                <div className="welcome-feature-icon">
                                    <i className="fas fa-file-alt"></i>
                                </div>
                                <h4 className="welcome-feature-title">{t('home.regulation')}</h4>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="welcome-feature-card">
                                <div className="welcome-feature-icon">
                                    <i className="fas fa-file-contract"></i>
                                </div>
                                <h4 className="welcome-feature-title">{t('home.charter')}</h4>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="welcome-feature-card">
                                <div className="welcome-feature-icon">
                                    <i className="fas fa-handshake"></i>
                                </div>
                                <h4 className="welcome-feature-title">{t('home.commitment')}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Identity Section */}
            <section id="identity" className="identity-section py-5 bg-light">
                <div className="container">
                    <div className="row">
                        {/* Vision */}
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className={`identity-card ${openIdentityCards.vision ? 'open' : ''}`}>
                                <div 
                                    className="identity-icon-circle-wrapper"
                                    onClick={() => toggleIdentityCard('vision')}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <div className="identity-icon-circle">
                                        <i className="fas fa-eye"></i>
                                    </div>
                                    <div className="identity-toggle-icon">
                                        <i className={`fas fa-chevron-${openIdentityCards.vision ? 'up' : 'down'}`}></i>
                                    </div>
                                </div>
                                <h3>{t('home.vision')}</h3>
                                {openIdentityCards.vision && (
                                    <div className="identity-card-content">
                                        <p>
                                            {t('home.visionText')}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Mission */}
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className={`identity-card ${openIdentityCards.mission ? 'open' : ''}`}>
                                <div 
                                    className="identity-icon-circle-wrapper"
                                    onClick={() => toggleIdentityCard('mission')}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <div className="identity-icon-circle">
                                        <i className="fas fa-users"></i>
                                    </div>
                                    <div className="identity-toggle-icon">
                                        <i className={`fas fa-chevron-${openIdentityCards.mission ? 'up' : 'down'}`}></i>
                                    </div>
                                </div>
                                <h3>{t('home.mission')}</h3>
                                {openIdentityCards.mission && (
                                    <div className="identity-card-content">
                                        <p>
                                            {t('home.missionText')}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Valeurs du Club */}
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className={`identity-card ${openIdentityCards.valeurs ? 'open' : ''}`}>
                                <div 
                                    className="identity-icon-circle-wrapper"
                                    onClick={() => toggleIdentityCard('valeurs')}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <div className="identity-icon-circle">
                                        <i className="fas fa-heart"></i>
                                    </div>
                                    <div className="identity-toggle-icon">
                                        <i className={`fas fa-chevron-${openIdentityCards.valeurs ? 'up' : 'down'}`}></i>
                                    </div>
                                </div>
                                <h3>{t('home.valuesTitle')}</h3>
                                {openIdentityCards.valeurs && (
                                    <div className="identity-card-content">
                                        <ul className="identity-list">
                                            <li>
                                                <strong>{t('home.value1Title')}</strong>
                                                <p>{t('home.value1Text')}</p>
                                            </li>
                                            <li>
                                                <strong>{t('home.value2Title')}</strong>
                                                <p>{t('home.value2Text')}</p>
                                            </li>
                                            <li>
                                                <strong>{t('home.value3Title')}</strong>
                                                <p>{t('home.value3Text')}</p>
                                            </li>
                                            <li>
                                                <strong>{t('home.value4Title')}</strong>
                                                <p>{t('home.value4Text')}</p>
                                            </li>
                                            <li>
                                                <strong>{t('home.value5Title')}</strong>
                                                <p>{t('home.value5Text')}</p>
                                            </li>
                                            <li>
                                                <strong>{t('home.value6Title')}</strong>
                                                <p>{t('home.value6Text')}</p>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Objectifs Stratégiques du Club */}
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className={`identity-card ${openIdentityCards.objectifs ? 'open' : ''}`}>
                                <div 
                                    className="identity-icon-circle-wrapper"
                                    onClick={() => toggleIdentityCard('objectifs')}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <div className="identity-icon-circle">
                                        <i className="fas fa-globe"></i>
                                    </div>
                                    <div className="identity-toggle-icon">
                                        <i className={`fas fa-chevron-${openIdentityCards.objectifs ? 'up' : 'down'}`}></i>
                                    </div>
                                </div>
                                <h3>{t('home.objectivesTitle')}</h3>
                                {openIdentityCards.objectifs && (
                                    <div className="identity-card-content">
                                        <ul className="identity-list">
                                            <li>
                                                <strong>{t('home.objective1Title')}</strong>
                                                <p>{t('home.objective1Text')}</p>
                                            </li>
                                            <li>
                                                <strong>{t('home.objective2Title')}</strong>
                                                <p>{t('home.objective2Text')}</p>
                                            </li>
                                            <li>
                                                <strong>{t('home.objective3Title')}</strong>
                                                <p>{t('home.objective3Text')}</p>
                                            </li>
                                            <li>
                                                <strong>{t('home.objective4Title')}</strong>
                                                <p>{t('home.objective4Text')}</p>
                                            </li>
                                            <li>
                                                <strong>{t('home.objective5Title')}</strong>
                                                <p>{t('home.objective5Text')}</p>
                                            </li>
                                            <li>
                                                <strong>{t('home.objective6Title')}</strong>
                                                <p>{t('home.objective6Text')}</p>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Charte du Membre du Club */}
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className={`identity-card ${openIdentityCards.charte ? 'open' : ''}`}>
                                <div 
                                    className="identity-icon-circle-wrapper"
                                    onClick={() => toggleIdentityCard('charte')}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <div className="identity-icon-circle">
                                        <i className="fas fa-balance-scale"></i>
                                    </div>
                                    <div className="identity-toggle-icon">
                                        <i className={`fas fa-chevron-${openIdentityCards.charte ? 'up' : 'down'}`}></i>
                                    </div>
                                </div>
                                <h3>{t('home.charterTitle')}</h3>
                                {openIdentityCards.charte && (
                                    <div className="identity-card-content">
                                        <p>{t('home.charterIntro')}</p>
                                        <ul className="identity-list">
                                            <li>
                                                <strong>{t('home.charter1Title')}</strong>
                                                <p>{t('home.charter1Text')}</p>
                                            </li>
                                            <li>
                                                <strong>{t('home.charter2Title')}</strong>
                                                <p>{t('home.charter2Text')}</p>
                                            </li>
                                            <li>
                                                <strong>{t('home.charter3Title')}</strong>
                                                <p>{t('home.charter3Text')}</p>
                                            </li>
                                            <li>
                                                <strong>{t('home.charter4Title')}</strong>
                                                <p>{t('home.charter4Text')}</p>
                                            </li>
                                            <li>
                                                <strong>{t('home.charter5Title')}</strong>
                                                <p>{t('home.charter5Text')}</p>
                                            </li>
                                            <li>
                                                <strong>{t('home.charter6Title')}</strong>
                                                <p>{t('home.charter6Text')}</p>
                                            </li>
                                            <li>
                                                <strong>{t('home.charter7Title')}</strong>
                                                <p>{t('home.charter7Text')}</p>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Notre Identité Section */}
            <section className="notre-identite-section py-5">
                <div className="container">
                    <h2 className="section-title text-center mb-5">{t('home.identitySectionTitle')}</h2>
                    <div className="row">
                        {/* Forme juridique */}
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className={`identite-card text-center ${openIdentityCards.formeJuridique ? 'open' : ''}`}>
                                <div 
                                    className="identite-icon-circle"
                                    onClick={() => toggleIdentityCard('formeJuridique')}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <i className="fas fa-balance-scale"></i>
                                    <div className="identite-toggle-icon">
                                        <i className={`fas fa-chevron-${openIdentityCards.formeJuridique ? 'up' : 'down'}`}></i>
                                    </div>
                                </div>
                                <h3 className="identite-card-title">{t('home.identityLegalFormTitle')}</h3>
                                {openIdentityCards.formeJuridique && (
                                    <div className="identite-card-content">
                                        <p className="identite-card-text">
                                            {t('home.identityLegalFormText')}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Pourquoi le CDDAM ? */}
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className={`identite-card text-center ${openIdentityCards.pourquoi ? 'open' : ''}`}>
                                <div 
                                    className="identite-icon-circle"
                                    onClick={() => toggleIdentityCard('pourquoi')}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <i className="fas fa-users"></i>
                                    <div className="identite-toggle-icon">
                                        <i className={`fas fa-chevron-${openIdentityCards.pourquoi ? 'up' : 'down'}`}></i>
                                    </div>
                                </div>
                                <h3 className="identite-card-title">{t('home.identityWhyTitle')}</h3>
                                {openIdentityCards.pourquoi && (
                                    <div className="identite-card-content">
                                        <p className="identite-card-text">
                                            {t('home.identityWhyText')}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Périmètre d'activités */}
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className={`identite-card text-center ${openIdentityCards.perimetre ? 'open' : ''}`}>
                                <div 
                                    className="identite-icon-circle"
                                    onClick={() => toggleIdentityCard('perimetre')}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <i className="fas fa-globe-americas"></i>
                                    <div className="identite-toggle-icon">
                                        <i className={`fas fa-chevron-${openIdentityCards.perimetre ? 'up' : 'down'}`}></i>
                                    </div>
                                </div>
                                <h3 className="identite-card-title">{t('home.identityScopeTitle')}</h3>
                                {openIdentityCards.perimetre && (
                                    <div className="identite-card-content">
                                        <p className="identite-card-text mb-3">
                                            {t('home.identityScopeText')}
                                        </p>
                                        <ul className="identite-activities-list">
                                            <li><strong>{t('home.identityScope1')}</strong></li>
                                            <li><strong>{t('home.identityScope2')}</strong></li>
                                            <li><strong>{t('home.identityScope3')}</strong></li>
                                            <li><strong>{t('home.identityScope4')}</strong></li>
                                            <li><strong>{t('home.identityScope5')}</strong></li>
                                            <li><strong>{t('home.identityScope6')}</strong></li>
                                            <li><strong>{t('home.identityScope7')}</strong></li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Orientation du CDDAM */}
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className={`identite-card text-center ${openIdentityCards.orientation ? 'open' : ''}`}>
                                <div 
                                    className="identite-icon-circle"
                                    onClick={() => toggleIdentityCard('orientation')}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <i className="fas fa-lightbulb"></i>
                                    <div className="identite-toggle-icon">
                                        <i className={`fas fa-chevron-${openIdentityCards.orientation ? 'up' : 'down'}`}></i>
                                    </div>
                                </div>
                                <h3 className="identite-card-title">{t('home.identityOrientationTitle')}</h3>
                                {openIdentityCards.orientation && (
                                    <div className="identite-card-content">
                                        <p className="identite-card-text mb-3">
                                            {t('home.identityOrientationText')}
                                        </p>
                                        <ul className="identite-orientations-list">
                                            <li><strong>{t('home.identityOrientation1')}</strong></li>
                                            <li><strong>{t('home.identityOrientation2')}</strong></li>
                                            <li><strong>{t('home.identityOrientation3')}</strong></li>
                                            <li><strong>{t('home.identityOrientation4')}</strong></li>
                                            <li><strong>{t('home.identityOrientation5')}</strong></li>
                                            <li><strong>{t('home.identityOrientation6')}</strong></li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section - Objectifs 2026/2030 */}
            <section className="stats-section py-5 bg-light">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="section-title mb-2">{t('home.statsTitle')}</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                            <div className="stat-card text-center">
                                <div className="stat-icon-circle">
                                    <i className="fas fa-users"></i>
                                </div>
                                <h3 className="stat-number" style={{color: 'var(--primary-color)'}}>+500</h3>
                                <p className="stat-label">{t('home.stat1')}</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                            <div className="stat-card text-center">
                                <div className="stat-icon-circle">
                                    <i className="fas fa-map-marked-alt"></i>
                                </div>
                                <h3 className="stat-number" style={{color: 'var(--primary-color)'}}>12</h3>
                                <p className="stat-label">{t('home.stat2')}</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                            <div className="stat-card text-center">
                                <div className="stat-icon-circle">
                                    <i className="fas fa-handshake"></i>
                                </div>
                                <h3 className="stat-number" style={{color: 'var(--primary-color)'}}>+100</h3>
                                <p className="stat-label">{t('home.stat3')}</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                            <div className="stat-card text-center">
                                <div className="stat-icon-circle">
                                    <i className="fas fa-building"></i>
                                </div>
                                <h3 className="stat-number" style={{color: 'var(--primary-color)'}}>12</h3>
                                <p className="stat-label">{t('home.stat4')}</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                            <div className="stat-card text-center">
                                <div className="stat-icon-circle">
                                    <i className="fas fa-calendar-check"></i>
                                </div>
                                <h3 className="stat-number" style={{color: 'var(--primary-color)'}}>5</h3>
                                <p className="stat-label">{t('home.stat5')}</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                            <div className="stat-card text-center">
                                <div className="stat-icon-circle">
                                    <i className="fas fa-wine-glass"></i>
                                </div>
                                <h3 className="stat-number" style={{color: 'var(--primary-color)'}}>8</h3>
                                <p className="stat-label">{t('home.stat6')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Actualités Section */}
            <section className="actualites-section py-5">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center mb-5">
                        <h2 className="section-title mb-0">{t('home.newsTitle')}</h2>
                        <Link to="/blog" className="btn btn-outline-primary">
                            {t('home.allNews')}
                        </Link>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="empty-actualites text-center py-5">
                                <i className="fas fa-newspaper" style={{fontSize: '64px', color: '#ccc', marginBottom: '20px'}}></i>
                                <p className="text-muted" style={{fontSize: '18px'}}>{t('home.noNews')}</p>
                                <p className="text-muted">{t('home.noNewsText')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nos Partenaires Section */}
            <section className="partenaires-section py-5">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="section-title">{t('home.partnersTitle')}</h2>
                        <p className="lead text-muted">{t('home.partnersSubtitle')}</p>
                    </div>
                    
                    {/* Partenaire Privé */}
                    <div className="partenaire-category mb-4">
                        <div 
                            className="partenaire-category-header" 
                            onClick={() => toggleCategory('prive')}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="partenaire-category-icon">
                                <i className="fas fa-briefcase"></i>
                            </div>
                            <h3 className="partenaire-category-title">{t('home.privatePartner')}</h3>
                            <div className={`partenaire-toggle-icon ${openCategories.prive ? 'open' : ''}`}>
                                <i className="fas fa-chevron-down"></i>
                            </div>
                        </div>
                        <div className={`partenaire-category-content ${openCategories.prive ? 'open' : ''}`}>
                            <div className="row g-4">
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <Link to="/partenaires/omecs" style={{textDecoration: 'none', color: 'inherit'}}>
                                        <div className="partenaire-card" style={{cursor: 'pointer', transition: 'transform 0.3s'}}>
                                            <div className="partenaire-logo-container">
                                                <div className="partenaire-logo-wrapper">
                                                    <img 
                                                        src="/images/omecs.jpg" 
                                                        alt={`OMECS - ${t('home.omecsDescription')}`}
                                                        className="partenaire-logo"
                                                    />
                                                </div>
                                            </div>
                                            <div className="partenaire-info">
                                                <h4 className="partenaire-name">OMECS</h4>
                                                <p className="partenaire-description">{t('home.omecsDescription')}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Partenaire Public */}
                    <div className="partenaire-category mb-4">
                        <div 
                            className="partenaire-category-header" 
                            onClick={() => toggleCategory('public')}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="partenaire-category-icon">
                                <i className="fas fa-landmark"></i>
                            </div>
                            <h3 className="partenaire-category-title">{t('home.publicPartner')}</h3>
                            <div className={`partenaire-toggle-icon ${openCategories.public ? 'open' : ''}`}>
                                <i className="fas fa-chevron-down"></i>
                    </div>
                </div>
                        <div className={`partenaire-category-content ${openCategories.public ? 'open' : ''}`}>
                    <div className="row">
                                <div className="col-12">
                                    <div className="empty-partenaires">
                                        <div className="empty-partenaires-icon">
                                            <i className="fas fa-building"></i>
                                        </div>
                                        <p className="empty-partenaires-text">{t('home.noPublicPartner')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ONG Partenaire */}
                    <div className="partenaire-category">
                        <div 
                            className="partenaire-category-header" 
                            onClick={() => toggleCategory('ong')}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="partenaire-category-icon">
                                <i className="fas fa-hands-helping"></i>
                            </div>
                            <h3 className="partenaire-category-title">{t('home.ngoPartner')}</h3>
                            <div className={`partenaire-toggle-icon ${openCategories.ong ? 'open' : ''}`}>
                                <i className="fas fa-chevron-down"></i>
                            </div>
                        </div>
                        <div className={`partenaire-category-content ${openCategories.ong ? 'open' : ''}`}>
                            <div className="row">
                                <div className="col-12">
                                    <div className="empty-partenaires">
                                        <div className="empty-partenaires-icon">
                                            <i className="fas fa-hands-helping"></i>
                                        </div>
                                        <p className="empty-partenaires-text">{t('home.noNgoPartner')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section py-5">
                <div className="container text-center">
                    <h2 className="section-title mb-4">{t('home.ctaTitle')}</h2>
                    <p className="lead mb-4">{t('home.ctaText')}</p>
                    <Link to="/packs-adhesions" className="btn btn-primary btn-lg">{t('header.join')}</Link>
                </div>
            </section>
        </>
    );
}

export default Home;
