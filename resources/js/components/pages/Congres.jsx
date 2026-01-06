import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Congres() {
    const { t } = useTranslation();
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
                    <h1 className="display-4 mb-3 fw-bold">{t('congres.title')}</h1>
                    <p className="lead mb-0">{t('congres.subtitle')}</p>
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
                                    {t('congres.introTitle')}
                                </h2>
                                <p className="lead mb-4">
                                    {t('congres.introText1')}
                                </p>
                                <p>
                                    {t('congres.introText2')}
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
                                    <h3 className="mb-3">{t('congres.featureTitle')}</h3>
                                    <p className="mb-0">
                                        {t('congres.featureText')}
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
                    <h2 className="section-title text-center mb-5">{t('congres.whyTitle')}</h2>
                    
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
                                <h4 className="mb-3">{t('congres.why1Title')}</h4>
                                <p>
                                    {t('congres.why1Text')}
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
                                <h4 className="mb-3">{t('congres.why2Title')}</h4>
                                <p>
                                    {t('congres.why2Text')}
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
                                <h4 className="mb-3">{t('congres.why3Title')}</h4>
                                <p>
                                    {t('congres.why3Text')}
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
                                <h4 className="mb-3">{t('congres.why4Title')}</h4>
                                <p>
                                    {t('congres.why4Text')}
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
                                <h4 className="mb-3">{t('congres.why5Title')}</h4>
                                <p>
                                    {t('congres.why5Text')}
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
                                <h4 className="mb-3">{t('congres.why6Title')}</h4>
                                <p>
                                    {t('congres.why6Text')}
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
                            <h2 className="section-title text-center mb-5">{t('congres.structureTitle')}</h2>
                            
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
                                                <h4 className="mb-2">{t('congres.structure1Title')}</h4>
                                                <p className="mb-0">
                                                    {t('congres.structure1Text')}
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
                                                <h4 className="mb-2">{t('congres.structure2Title')}</h4>
                                                <p className="mb-0">
                                                    {t('congres.structure2Text')}
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
                                                <h4 className="mb-2">{t('congres.structure3Title')}</h4>
                                                <p className="mb-0">
                                                    {t('congres.structure3Text')}
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
                                                <h4 className="mb-2">{t('congres.structure4Title')}</h4>
                                                <p className="mb-0">
                                                    {t('congres.structure4Text')}
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
                                                <h4 className="mb-2">{t('congres.structure5Title')}</h4>
                                                <p className="mb-0">
                                                    {t('congres.structure5Text')}
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
                                                <h4 className="mb-2">{t('congres.structure6Title')}</h4>
                                                <p className="mb-0">
                                                    {t('congres.structure6Text')}
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
                    <h2 className="section-title mb-4 text-white">{t('congres.ctaTitle')}</h2>
                    <p className="lead mb-4">
                        {t('congres.ctaText')}
                    </p>
                    <div className="d-flex gap-3 justify-content-center flex-wrap">
                        <Link to="/packs-adhesions" className="btn btn-light btn-lg px-5">
                            <i className="fas fa-user-plus me-2"></i>
                            {t('congres.becomeMember')}
                        </Link>
                        <Link to="/contact" className="btn btn-outline-light btn-lg px-5">
                            <i className="fas fa-envelope me-2"></i>
                            {t('congres.contactUs')}
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Congres;

