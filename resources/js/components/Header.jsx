import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t, i18n: i18nInstance } = useTranslation();
    const [currentLang, setCurrentLang] = useState(i18nInstance.language || 'fr');

    console.log('Header component is rendering');

    useEffect(() => {
        // Synchroniser avec la langue de l'URL ou de Laravel
        const urlParams = new URLSearchParams(window.location.search);
        const langParam = urlParams.get('lang');
        
        // Détecter la langue depuis l'URL, le localStorage, ou la langue par défaut
        let detectedLang = langParam || localStorage.getItem('i18nextLng') || 'fr';
        
        // S'assurer que la langue est supportée
        if (!['fr', 'en', 'ar'].includes(detectedLang)) {
            detectedLang = 'fr';
        }
        
        // Si la langue détectée est différente de la langue actuelle, la changer
        if (detectedLang !== i18nInstance.language) {
            i18nInstance.changeLanguage(detectedLang);
        }

        // Mettre à jour la langue actuelle quand elle change
        const handleLanguageChanged = (lng) => {
            setCurrentLang(lng);
            // Sauvegarder dans localStorage
            localStorage.setItem('i18nextLng', lng);
            // Changer la direction du document pour l'arabe
            if (lng === 'ar') {
                document.documentElement.setAttribute('dir', 'rtl');
                document.documentElement.setAttribute('lang', 'ar');
            } else {
                document.documentElement.setAttribute('dir', 'ltr');
                document.documentElement.setAttribute('lang', lng);
            }
        };

        // Écouter les changements de langue
        i18nInstance.on('languageChanged', handleLanguageChanged);
        
        // Initialiser la direction au chargement
        handleLanguageChanged(i18nInstance.language);

        return () => {
            i18nInstance.off('languageChanged', handleLanguageChanged);
        };
    }, [i18nInstance]);

    const changeLanguage = (lng) => {
        i18nInstance.changeLanguage(lng);
        setCurrentLang(lng);
        // Sauvegarder dans localStorage
        localStorage.setItem('i18nextLng', lng);
        // Mettre à jour l'URL avec le paramètre lang sans recharger
        const url = new URL(window.location);
        url.searchParams.set('lang', lng);
        window.history.pushState({}, '', url);
        // Synchroniser avec Laravel via une requête AJAX si nécessaire
        // Pour l'instant, le changement de langue React devrait suffire
    };

    const closeAllDropdowns = (exceptElement = null) => {
        const allDropdowns = document.querySelectorAll('.dropdown-menu');
        allDropdowns.forEach((dropdown) => {
            if (dropdown !== exceptElement) {
                dropdown.classList.remove('show');
            }
        });
    };

    const handleDropdownEnter = (e) => {
        closeAllDropdowns();
        const dropdown = e.currentTarget.nextElementSibling;
        if (dropdown) {
            dropdown.classList.add('show');
        }
    };

    const handleDropdownLeave = (e) => {
        setTimeout(() => {
            const dropdown = e.currentTarget.nextElementSibling;
            if (dropdown && !dropdown.matches(':hover')) {
                dropdown.classList.remove('show');
            }
        }, 200);
    };

    const handleMenuEnter = (e) => {
        e.currentTarget.classList.add('show');
    };

    const handleMenuLeave = (e) => {
        e.currentTarget.classList.remove('show');
    };

    return (
        <header className="main-header">
            <div className="top-bar">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="contact-info">
                                <span><i className="fas fa-phone"></i> {t('common.phone')}</span>
                                <span><i className="fas fa-envelope"></i> {t('common.email')}</span>
                                <span><i className="fas fa-map-marker-alt"></i> {t('common.address')}</span>
                            </div>
                        </div>
                        <div className="col-md-6 text-end">
                            <div className="d-inline-flex align-items-center justify-content-end gap-3">
                                <div className="language-switcher">
                                    <a 
                                        href="#" 
                                        className={`lang-link ${currentLang === 'fr' ? 'active' : ''}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            changeLanguage('fr');
                                        }}
                                    >
                                        FR
                                    </a>
                                    <a 
                                        href="#" 
                                        className={`lang-link ${currentLang === 'ar' ? 'active' : ''}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            changeLanguage('ar');
                                        }}
                                    >
                                        AR
                                    </a>
                                    <a 
                                        href="#" 
                                        className={`lang-link ${currentLang === 'en' ? 'active' : ''}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            changeLanguage('en');
                                        }}
                                    >
                                        EN
                                    </a>
                                </div>
                                <div className="top-auth-links d-none d-md-inline-flex">
                                    <Link to="/admin/login" className="auth-link">
                                        <i className="fas fa-user-shield me-1"></i>
                                        {t('header.admin')}
                                    </Link>
                                    <Link to="/admin/login" className="auth-link">
                                        <i className="fas fa-sign-in-alt me-1"></i>
                                        {t('header.login')}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src="/images/logo.png" alt="Club des Dirigeants des Associations Maroc - CDDAM" className="logo-img" style={{maxHeight: '80px', height: '80px', width: 'auto'}} />
                    </Link>
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-expanded={isMenuOpen}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav" style={{display: isMenuOpen ? 'block' : 'none'}}>
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item dropdown">
                                <Link 
                                    className="nav-link" 
                                    to="/"
                                    onMouseEnter={handleDropdownEnter}
                                    onMouseLeave={handleDropdownLeave}
                                >
                                    {t('header.about')}
                                </Link>
                                <ul 
                                    className="dropdown-menu" 
                                    onMouseEnter={handleMenuEnter}
                                    onMouseLeave={handleMenuLeave}
                                >
                                    <li>
                                        <Link 
                                            className="dropdown-item" 
                                            to="/#qui-sommes-nous-content"
                                            onClick={(e) => {
                                                // Si on est déjà sur la page d'accueil, forcer le scroll
                                                if (window.location.pathname === '/') {
                                                    e.preventDefault();
                                                    const element = document.getElementById('qui-sommes-nous-content');
                                                    if (element) {
                                                        const header = document.querySelector('.main-header');
                                                        const headerHeight = header ? header.offsetHeight : 180;
                                                        const elementPosition = element.getBoundingClientRect().top;
                                                        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
                                                        window.scrollTo({
                                                            top: Math.max(0, offsetPosition),
                                                            behavior: 'smooth'
                                                        });
                                                    }
                                                    // Mettre à jour l'URL sans recharger
                                                    window.history.pushState(null, '', '/#qui-sommes-nous-content');
                                                }
                                            }}
                                        >
                                            {t('header.whoWeAre')}
                                        </Link>
                                    </li>
                                    <li><Link className="dropdown-item" to="/#identity">{t('header.instances')}</Link></li>
                                    <li><Link className="dropdown-item" to="/commissions">{t('header.commissions')}</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link 
                                    className="nav-link" 
                                    to="/activites"
                                    onMouseEnter={handleDropdownEnter}
                                    onMouseLeave={handleDropdownLeave}
                                >
                                    {t('header.activities')}
                                </Link>
                                <ul 
                                    className="dropdown-menu" 
                                    onMouseEnter={handleMenuEnter}
                                    onMouseLeave={handleMenuLeave}
                                >
                                    <li><Link className="dropdown-item" to="/activites/networking">{t('header.networking')}</Link></li>
                                    <li><Link className="dropdown-item" to="/activites/congres">{t('header.congress')}</Link></li>
                                    <li><Link className="dropdown-item" to="/activites/assemblees">{t('header.assemblies')}</Link></li>
                                    <li><Link className="dropdown-item" to="/activites/evenements">{t('header.events')}</Link></li>
                                    <li><Link className="dropdown-item" to="/activites/forums">{t('header.forums')}</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/packs-adhesions">{t('header.membership')}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/mycdda">{t('header.mycddam')}</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link 
                                    className="nav-link" 
                                    to="/partenaires"
                                    onMouseEnter={handleDropdownEnter}
                                    onMouseLeave={handleDropdownLeave}
                                >
                                    {t('header.partners')}
                                </Link>
                                <ul 
                                    className="dropdown-menu" 
                                    onMouseEnter={handleMenuEnter}
                                    onMouseLeave={handleMenuLeave}
                                >
                                    <li><Link className="dropdown-item" to="/partenaires#prive">{t('header.privatePartner')}</Link></li>
                                    <li><Link className="dropdown-item" to="/partenaires#public">{t('header.publicPartner')}</Link></li>
                                    <li><Link className="dropdown-item" to="/partenaires#ong">{t('header.ngoPartner')}</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/temoignages">{t('header.testimonials')}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/blog">{t('header.blog')}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">{t('header.contact')}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link btn-join" to="/packs-adhesions">{t('header.join')}</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
