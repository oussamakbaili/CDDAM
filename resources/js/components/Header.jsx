import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    console.log('Header component is rendering');

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
                                <span><i className="fas fa-phone"></i> +212 526 622 626</span>
                                <span><i className="fas fa-envelope"></i> contact@cdda.ma</span>
                                <span><i className="fas fa-map-marker-alt"></i> 45 Bd Bir Anzarane 1er étage N°1 - Maarif - Casablanca - Maroc</span>
                            </div>
                        </div>
                        <div className="col-md-6 text-end">
                            <div className="d-inline-flex align-items-center justify-content-end gap-3">
                                <div className="language-switcher">
                                    <a href="#" className="lang-link active">FR</a>
                                    <a href="#" className="lang-link">AR</a>
                                    <a href="#" className="lang-link">EN</a>
                                </div>
                                <div className="top-auth-links d-none d-md-inline-flex">
                                    <Link to="/admin/login" className="auth-link">
                                        <i className="fas fa-user-shield me-1"></i>
                                        Admin
                                    </Link>
                                    <Link to="/admin/login" className="auth-link">
                                        <i className="fas fa-sign-in-alt me-1"></i>
                                        Connexion
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
                                    À Propos
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
                                            Qui sommes-nous
                                        </Link>
                                    </li>
                                    <li><Link className="dropdown-item" to="/#identity">Les Instances</Link></li>
                                    <li><Link className="dropdown-item" to="/commissions">Commissions</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link 
                                    className="nav-link" 
                                    to="/activites"
                                    onMouseEnter={handleDropdownEnter}
                                    onMouseLeave={handleDropdownLeave}
                                >
                                    Activités
                                </Link>
                                <ul 
                                    className="dropdown-menu" 
                                    onMouseEnter={handleMenuEnter}
                                    onMouseLeave={handleMenuLeave}
                                >
                                    <li><Link className="dropdown-item" to="/activites/networking">Soirées de networking</Link></li>
                                    <li><Link className="dropdown-item" to="/activites/congres">Congrès</Link></li>
                                    <li><Link className="dropdown-item" to="/activites/assemblees">Les assemblées</Link></li>
                                    <li><Link className="dropdown-item" to="/activites/evenements">Événements</Link></li>
                                    <li><Link className="dropdown-item" to="/activites/forums">Forums</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/packs-adhesions">Packs Adhésions</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/mycdda">MyCDDAM</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link 
                                    className="nav-link" 
                                    to="/partenaires"
                                    onMouseEnter={handleDropdownEnter}
                                    onMouseLeave={handleDropdownLeave}
                                >
                                    Partenaires
                                </Link>
                                <ul 
                                    className="dropdown-menu" 
                                    onMouseEnter={handleMenuEnter}
                                    onMouseLeave={handleMenuLeave}
                                >
                                    <li><Link className="dropdown-item" to="/partenaires#prive">Partenaire Privé</Link></li>
                                    <li><Link className="dropdown-item" to="/partenaires#public">Partenaire Public</Link></li>
                                    <li><Link className="dropdown-item" to="/partenaires#ong">ONG Partenaire</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/temoignages">Témoignages</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/blog">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link btn-join" to="/packs-adhesions">REJOIGNEZ LE CDDAM</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
