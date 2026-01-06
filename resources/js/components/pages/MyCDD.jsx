import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function MyCDD() {
    const { t } = useTranslation();
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
                                    {t('mycdd.title')}<br />
                                    <span style={{fontSize: '0.9em'}}>{t('mycdd.subtitle')}</span>
                                </h1>
                                <p className="lead mb-4" style={{fontSize: '1.2rem'}}>
                                    {t('mycdd.description')}
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
                                    {t('header.join')}
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
                                    {t('mycdd.welcome')}
                                </h2>
                                <p className="lead mb-4" style={{fontSize: '1.25rem', lineHeight: '1.8'}} dangerouslySetInnerHTML={{ __html: t('mycdd.welcomeText1') }} />
                                <p style={{fontSize: '1.1rem', lineHeight: '1.8', color: '#555'}}>
                                    {t('mycdd.welcomeText2')}
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
                                            <h3 className="mb-3" style={{color: 'var(--primary-color)'}}>{t('mycdd.connect')}</h3>
                                            <p style={{lineHeight: '1.8', color: '#555'}}>
                                                {t('mycdd.connectText')}
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
                                            <h3 className="mb-3" style={{color: 'var(--primary-color)'}}>{t('mycdd.share')}</h3>
                                            <p style={{lineHeight: '1.8', color: '#555'}}>
                                                {t('mycdd.shareText')}
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
                                            <h3 className="mb-3" style={{color: 'var(--primary-color)'}}>{t('mycdd.collaborate')}</h3>
                                            <p style={{lineHeight: '1.8', color: '#555'}}>
                                                {t('mycdd.collaborateText')}
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
                                            <h3 className="mb-3" style={{color: 'var(--primary-color)'}}>{t('mycdd.discover')}</h3>
                                            <p style={{lineHeight: '1.8', color: '#555'}}>
                                                {t('mycdd.discoverText')}
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
                                                    <h3 className="mb-3" style={{color: 'var(--primary-color)'}}>{t('mycdd.engage')}</h3>
                                                    <p style={{lineHeight: '1.8', color: '#555', margin: 0}}>
                                                        {t('mycdd.engageText')}
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
                                            {t('mycdd.securityTitle')}
                                        </h3>
                                        <p style={{lineHeight: '1.8', color: '#555', margin: 0, fontSize: '1.1rem'}} dangerouslySetInnerHTML={{ __html: t('mycdd.securityText') }} />
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
                        {t('mycdd.ctaTitle')}
                    </h2>
                    <p className="lead mb-4" style={{fontSize: '1.25rem'}}>
                        {t('mycdd.ctaText')}
                    </p>
                    <div className="d-flex gap-3 justify-content-center flex-wrap">
                        <Link to="/packs-adhesions" className="btn btn-light btn-lg px-5 py-3 fw-bold">
                            <i className="fas fa-user-plus me-2"></i>
                            {t('mycdd.becomeMember')}
                        </Link>
                        <Link to="/contact" className="btn btn-outline-light btn-lg px-5 py-3 fw-bold">
                            <i className="fas fa-envelope me-2"></i>
                            {t('mycdd.contactUs')}
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default MyCDD;
