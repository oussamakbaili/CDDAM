import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Evenements() {
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
                    <h1 className="display-4 mb-3 fw-bold">{t('events.title')}</h1>
                    <p className="lead mb-0">{t('events.subtitle')}</p>
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
                                    {t('events.introTitle')}
                                </h2>
                                <p className="lead mb-4">
                                    {t('events.introText1')}
                                </p>
                                <p>
                                    {t('events.introText2')}
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
                                    <h3 className="mb-3">{t('events.featureTitle')}</h3>
                                    <p className="mb-0">
                                        {t('events.featureText')}
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
                    <h2 className="section-title text-center mb-5">{t('events.typesTitle')}</h2>
                    
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
                                <h4 className="mb-3 text-center">{t('events.type1Title')}</h4>
                                <p className="mb-0">
                                    {t('events.type1Text')}
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
                                <h4 className="mb-3 text-center">{t('events.type2Title')}</h4>
                                <p className="mb-0">
                                    {t('events.type2Text')}
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
                                <h4 className="mb-3 text-center">{t('events.type3Title')}</h4>
                                <p className="mb-0">
                                    {t('events.type3Text')}
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
                                <h4 className="mb-3 text-center">{t('events.type4Title')}</h4>
                                <p className="mb-0">
                                    {t('events.type4Text')}
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
                                <h4 className="mb-3 text-center">{t('events.type5Title')}</h4>
                                <p className="mb-0">
                                    {t('events.type5Text')}
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
                                <h4 className="mb-3 text-center">{t('events.type6Title')}</h4>
                                <p className="mb-0">
                                    {t('events.type6Text')}
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
                                <h4 className="mb-3 text-center">{t('events.type7Title')}</h4>
                                <p className="mb-0">
                                    {t('events.type7Text')}
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
                                <h4 className="mb-3 text-center">{t('events.type8Title')}</h4>
                                <p className="mb-0">
                                    {t('events.type8Text')}
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
                                <h4 className="mb-3 text-center">{t('events.type9Title')}</h4>
                                <p className="mb-0">
                                    {t('events.type9Text')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-5">
                <div className="container">
                    <h2 className="section-title text-center mb-5">{t('events.benefitsTitle')}</h2>
                    
                    <div className="row g-4">
                        <div className="col-md-6">
                            <div className="benefit-item d-flex align-items-start p-3" style={{
                                background: 'rgba(0, 129, 164, 0.05)',
                                borderRadius: '10px',
                                borderLeft: '4px solid var(--primary-color)'
                            }}>
                                <i className="fas fa-check-circle fa-2x me-3 mt-1" style={{color: 'var(--primary-color)'}}></i>
                                <div>
                                    <h5 className="mb-2">{t('events.benefit1Title')}</h5>
                                    <p className="mb-0">
                                        {t('events.benefit1Text')}
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
                                    <h5 className="mb-2">{t('events.benefit2Title')}</h5>
                                    <p className="mb-0">
                                        {t('events.benefit2Text')}
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
                                    <h5 className="mb-2">{t('events.benefit3Title')}</h5>
                                    <p className="mb-0">
                                        {t('events.benefit3Text')}
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
                                    <h5 className="mb-2">{t('events.benefit4Title')}</h5>
                                    <p className="mb-0">
                                        {t('events.benefit4Text')}
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
                    <h2 className="section-title mb-4 text-white">{t('events.ctaTitle')}</h2>
                    <p className="lead mb-4">
                        {t('events.ctaText')}
                    </p>
                    <div className="d-flex gap-3 justify-content-center flex-wrap">
                        <Link to="/packs-adhesions" className="btn btn-light btn-lg px-5">
                            <i className="fas fa-user-plus me-2"></i>
                            {t('events.becomeMember')}
                        </Link>
                        <Link to="/contact" className="btn btn-outline-light btn-lg px-5">
                            <i className="fas fa-envelope me-2"></i>
                            {t('events.contactUs')}
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Evenements;

