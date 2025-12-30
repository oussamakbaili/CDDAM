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
                                        alt="Le Club des Dirigeants des Associations Maroc"
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
                                <h3>Valeurs du Club</h3>
                                {openIdentityCards.valeurs && (
                                    <div className="identity-card-content">
                                        <ul className="identity-list">
                                            <li>
                                                <strong>Leadership responsable</strong>
                                                <p>Promouvoir une gouvernance éthique, transparente et orientée vers l'intérêt général.</p>
                                            </li>
                                            <li>
                                                <strong>Engagement citoyen</strong>
                                                <p>Agir avec conviction et mettre l'humain au centre de toutes les initiatives.</p>
                                            </li>
                                            <li>
                                                <strong>Solidarité &amp; coopération</strong>
                                                <p>Encourager le partage, le soutien mutuel et les partenariats entre associations.</p>
                                            </li>
                                            <li>
                                                <strong>Innovation sociale</strong>
                                                <p>Stimuler la créativité et les nouvelles approches pour répondre efficacement aux défis sociétaux.</p>
                                            </li>
                                            <li>
                                                <strong>Excellence &amp; professionnalisation</strong>
                                                <p>Développer des pratiques associatives modernes, rigoureuses et performantes.</p>
                                            </li>
                                            <li>
                                                <strong>Respect &amp; intégrité</strong>
                                                <p>Garantir un climat de confiance, d'écoute et de respect mutuel entre les membres.</p>
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
                                <h3>Objectifs stratégiques du Club</h3>
                                {openIdentityCards.objectifs && (
                                    <div className="identity-card-content">
                                        <ul className="identity-list">
                                            <li>
                                                <strong>Renforcer les compétences des dirigeants associatifs</strong>
                                                <p>À travers des formations, ateliers, masterclass, mentorat et accompagnement spécialisé.</p>
                                            </li>
                                            <li>
                                                <strong>Structurer et professionnaliser les associations marocaines</strong>
                                                <p>En favorisant les bonnes pratiques, la gouvernance et la performance organisationnelle.</p>
                                            </li>
                                            <li>
                                                <strong>Créer un réseau national solide et actif</strong>
                                                <p>Pour faciliter les partenariats, les collaborations et les synergies inter-associatives.</p>
                                            </li>
                                            <li>
                                                <strong>Promouvoir l'innovation sociale et la transformation positive</strong>
                                                <p>Encourager les projets innovants et l'impact social durable.</p>
                                            </li>
                                            <li>
                                                <strong>Valoriser le rôle des dirigeants associatifs</strong>
                                                <p>Faire reconnaître les leaders du secteur comme acteurs stratégiques du progrès social.</p>
                                            </li>
                                            <li>
                                                <strong>Mettre à disposition des outils, ressources et plateformes d'échange</strong>
                                                <p>Articles, guides, groupes d'échange, documentation, networking…</p>
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
                                <h3>Charte du membre du Club</h3>
                                {openIdentityCards.charte && (
                                    <div className="identity-card-content">
                                        <p>Chaque membre du Club des Dirigeants des Associations Maroc s'engage à :</p>
                                        <ul className="identity-list">
                                            <li>
                                                <strong>Agir avec éthique et intégrité</strong>
                                                <p>Respecter les lois, les bonnes pratiques associatives et les valeurs du club.</p>
                                            </li>
                                            <li>
                                                <strong>Adopter une attitude collaborative</strong>
                                                <p>Partager son expérience, soutenir les autres membres et promouvoir la coopération.</p>
                                            </li>
                                            <li>
                                                <strong>Participer activement à la vie du Club</strong>
                                                <p>Assister aux activités, contribuer aux échanges et représenter positivement le club.</p>
                                            </li>
                                            <li>
                                                <strong>Respecter la confidentialité des échanges</strong>
                                                <p>Protéger les données, informations sensibles ou discussions internes.</p>
                                            </li>
                                            <li>
                                                <strong>Promouvoir la bonne gouvernance au sein de son association</strong>
                                                <p>Transparence, responsabilité, efficacité et engagement citoyen.</p>
                                            </li>
                                            <li>
                                                <strong>Encourager l'innovation et l'amélioration continue</strong>
                                                <p>Proposer des idées, expérimenter de nouvelles pratiques et valoriser les initiatives.</p>
                                            </li>
                                            <li>
                                                <strong>Agir dans l'intérêt général et le développement social du Maroc</strong>
                                                <p>Mettre son leadership au service de la communauté et du progrès social.</p>
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
                    <h2 className="section-title text-center mb-5">Notre identité</h2>
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
                                <h3 className="identite-card-title">Forme juridique</h3>
                                {openIdentityCards.formeJuridique && (
                                    <div className="identite-card-content">
                                        <p className="identite-card-text">
                                            Association à but non lucratif offrant des services à la communauté des dirigeants.
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
                                <h3 className="identite-card-title">Pourquoi le CDDAM ?</h3>
                                {openIdentityCards.pourquoi && (
                                    <div className="identite-card-content">
                                        <p className="identite-card-text">
                                            Le Club des Dirigeants des Associations Maroc (CDDAM) est né d'un besoin réel et urgent : accompagner la transformation du secteur associatif marocain, renforcer ses leaders, et faire émerger une nouvelle génération de dirigeants engagés, compétents et responsables.
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
                                <h3 className="identite-card-title">Périmètre d'activités</h3>
                                {openIdentityCards.perimetre && (
                                    <div className="identite-card-content">
                                        <p className="identite-card-text mb-3">
                                            Le CDDAM intervient dans un ensemble d'actions destinées à renforcer les compétences, le réseau et l'impact des dirigeants associatifs. Ses activités couvrent les domaines suivants :
                                        </p>
                                        <ul className="identite-activities-list">
                                            <li><strong>Formation &amp; Renforcement des Capacités</strong> : Ateliers pratiques, séminaires, masterclass, programmes de leadership associatif, formations en gouvernance, gestion de projets, communication, mobilisation des ressources…</li>
                                            <li><strong>Networking &amp; Échanges Professionnels</strong> : Rencontres entre dirigeants, événements thématiques, groupes de discussion, cercles sectoriels, déjeuners et cafés-rencontres professionnels.</li>
                                            <li><strong>Accompagnement &amp; Mentorat</strong> : Coaching individuel, sessions d'accompagnement collectif, mise en relation avec experts et partenaires, partage de bonnes pratiques.</li>
                                            <li><strong>Production de Ressources</strong> : Guides et outils pratiques, articles, études, analyses, notes méthodologiques, plateforme documentaire en ligne, bibliothèque numérique.</li>
                                            <li><strong>Innovation &amp; Initiatives Sociales</strong> : Incubation d'idées de projets associatifs, appui à la structuration de projets à impact, création de synergies inter-associatives, soutien aux initiatives citoyennes innovantes.</li>
                                            <li><strong>Plaidoyer &amp; Représentation</strong> : Participation aux consultations et débats publics, défense des intérêts du secteur associatif, contribution à l'amélioration des politiques sociales, représentation auprès des institutions et partenaires.</li>
                                            <li><strong>Animation de la Communauté</strong> : Groupes régionaux du club, activités inter-associations, engagement des membres dans des actions sociales, renforcement de l'esprit d'entraide et de solidarité.</li>
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
                                <h3 className="identite-card-title">Orientation du CDDAM</h3>
                                {openIdentityCards.orientation && (
                                    <div className="identite-card-content">
                                        <p className="identite-card-text mb-3">
                                            Le CDDAM s'oriente vers la professionnalisation, la coopération et l'impact social durable. Son action est guidée par une volonté de :
                                        </p>
                                        <ul className="identite-orientations-list">
                                            <li><strong>Renforcer le leadership associatif</strong> : Accompagner les dirigeants pour améliorer leurs compétences, leur vision stratégique et leur capacité d'action.</li>
                                            <li><strong>Promouvoir une gouvernance moderne et éthique</strong> : Encourager la transparence, la responsabilité, la bonne gestion et la crédibilité au sein des associations.</li>
                                            <li><strong>Favoriser la collaboration inter-associative</strong> : Créer des ponts entre les organisations pour faciliter les partenariats, les synergies et les projets communs.</li>
                                            <li><strong>Impulser l'innovation sociale</strong> : Stimuler de nouvelles approches, outils et solutions pour répondre aux besoins sociaux de manière efficace.</li>
                                            <li><strong>Soutenir le développement territorial et citoyen</strong> : Aligner les actions du club sur les priorités nationales et régionales, en plaçant l'intérêt général au centre.</li>
                                            <li><strong>Valoriser le rôle des dirigeants associatifs</strong> : Faire reconnaître les leaders associatifs comme des acteurs essentiels du progrès social au Maroc.</li>
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
                        <h2 className="section-title mb-2">Chiffres clé - Objectifs (2026/2030)</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                            <div className="stat-card text-center">
                                <div className="stat-icon-circle">
                                    <i className="fas fa-users"></i>
                                </div>
                                <h3 className="stat-number" style={{color: 'var(--primary-color)'}}>+500</h3>
                                <p className="stat-label">Membres</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                            <div className="stat-card text-center">
                                <div className="stat-icon-circle">
                                    <i className="fas fa-map-marked-alt"></i>
                                </div>
                                <h3 className="stat-number" style={{color: 'var(--primary-color)'}}>12</h3>
                                <p className="stat-label">Régions du Maroc</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                            <div className="stat-card text-center">
                                <div className="stat-icon-circle">
                                    <i className="fas fa-handshake"></i>
                                </div>
                                <h3 className="stat-number" style={{color: 'var(--primary-color)'}}>+100</h3>
                                <p className="stat-label">Partenariats</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                            <div className="stat-card text-center">
                                <div className="stat-icon-circle">
                                    <i className="fas fa-building"></i>
                                </div>
                                <h3 className="stat-number" style={{color: 'var(--primary-color)'}}>12</h3>
                                <p className="stat-label">Cercles d'affaires</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                            <div className="stat-card text-center">
                                <div className="stat-icon-circle">
                                    <i className="fas fa-calendar-check"></i>
                                </div>
                                <h3 className="stat-number" style={{color: 'var(--primary-color)'}}>5</h3>
                                <p className="stat-label">Participation en congrès</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                            <div className="stat-card text-center">
                                <div className="stat-icon-circle">
                                    <i className="fas fa-wine-glass"></i>
                                </div>
                                <h3 className="stat-number" style={{color: 'var(--primary-color)'}}>8</h3>
                                <p className="stat-label">Soirée networking</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Actualités Section */}
            <section className="actualites-section py-5">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center mb-5">
                        <h2 className="section-title mb-0">Actualités</h2>
                        <Link to="/blog" className="btn btn-outline-primary">
                            Toutes les actualités
                        </Link>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="empty-actualites text-center py-5">
                                <i className="fas fa-newspaper" style={{fontSize: '64px', color: '#ccc', marginBottom: '20px'}}></i>
                                <p className="text-muted" style={{fontSize: '18px'}}>Aucune actualité pour le moment</p>
                                <p className="text-muted">Les actualités seront bientôt disponibles.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nos Partenaires Section */}
            <section className="partenaires-section py-5">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="section-title">Nos partenaires</h2>
                        <p className="lead text-muted">Des partenariats stratégiques pour renforcer notre impact</p>
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
                            <h3 className="partenaire-category-title">Partenaire Privé</h3>
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
                                                        alt="OMECS - Observatoire Marocain des Études et Conseils Sociaux" 
                                                        className="partenaire-logo"
                                                    />
                                                </div>
                                            </div>
                                            <div className="partenaire-info">
                                                <h4 className="partenaire-name">OMECS</h4>
                                                <p className="partenaire-description">Observatoire Marocain des Études et Conseils Sociaux</p>
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
                            <h3 className="partenaire-category-title">Partenaire Public</h3>
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
                                        <p className="empty-partenaires-text">Aucun partenaire public pour le moment</p>
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
                            <h3 className="partenaire-category-title">ONG Partenaire</h3>
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
                                        <p className="empty-partenaires-text">Aucune ONG partenaire pour le moment</p>
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
                    <h2 className="section-title mb-4">Prêt à nous rejoindre ?</h2>
                    <p className="lead mb-4">Rejoignez le Club des Dirigeants des Associations Maroc et intégrez un réseau d'excellence dédié au développement du secteur associatif marocain</p>
                    <Link to="/packs-adhesions" className="btn btn-primary btn-lg">REJOIGNEZ LE CDDAM</Link>
                </div>
            </section>
        </>
    );
}

export default Home;
