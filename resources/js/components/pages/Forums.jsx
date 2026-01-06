import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Forums() {
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
                    <h1 className="display-4 mb-3 fw-bold">{t('forums.title')}</h1>
                    <p className="lead mb-0">{t('forums.subtitle')}</p>
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
                                    <i className="fas fa-comments me-3"></i>
                                    {t('forums.introTitle')}
                                </h2>
                                <p className="lead mb-4">
                                    {t('forums.introText1')}
                                </p>
                                <p>
                                    {t('forums.introText2')}
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
                                    <i className="fas fa-brain fa-4x mb-3" style={{color: 'var(--primary-color)'}}></i>
                                    <h3 className="mb-3">{t('forums.featureTitle')}</h3>
                                    <p className="mb-0">
                                        {t('forums.featureText')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Forum Types Section */}
            <section className="py-5 bg-light">
                <div className="container">
                    <h2 className="section-title text-center mb-5">{t('forums.typesTitle')}</h2>
                    
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="forum-type-card p-4 h-100" style={{
                                background: 'var(--white)',
                                borderRadius: '15px',
                                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                                border: '2px solid var(--primary-color)',
                                height: '100%'
                            }}>
                                <div className="d-flex align-items-start mb-3">
                                    <div className="forum-icon me-4" style={{
                                        width: '80px',
                                        height: '80px',
                                        borderRadius: '50%',
                                        background: 'var(--primary-color)',
                                        color: 'white',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '32px',
                                        flexShrink: 0
                                    }}>
                                        <i className="fas fa-chart-line"></i>
                                    </div>
                                    <div>
                                        <h3 className="mb-3">{t('forums.type1Title')}</h3>
                                        <p className="mb-3">
                                            {t('forums.type1Text')}
                                        </p>
                                        <ul style={{listStyle: 'none', padding: 0}}>
                                            <li className="mb-2">
                                                <i className="fas fa-check-circle me-2" style={{color: 'var(--primary-color)'}}></i>
                                                {t('forums.type1Item1')}
                                            </li>
                                            <li className="mb-2">
                                                <i className="fas fa-check-circle me-2" style={{color: 'var(--primary-color)'}}></i>
                                                {t('forums.type1Item2')}
                                            </li>
                                            <li className="mb-2">
                                                <i className="fas fa-check-circle me-2" style={{color: 'var(--primary-color)'}}></i>
                                                {t('forums.type1Item3')}
                                            </li>
                                            <li className="mb-2">
                                                <i className="fas fa-check-circle me-2" style={{color: 'var(--primary-color)'}}></i>
                                                {t('forums.type1Item4')}
                                            </li>
                                            <li>
                                                <i className="fas fa-check-circle me-2" style={{color: 'var(--primary-color)'}}></i>
                                                {t('forums.type1Item5')}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="forum-type-card p-4 h-100" style={{
                                background: 'var(--white)',
                                borderRadius: '15px',
                                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                                border: '2px solid var(--primary-color)',
                                height: '100%'
                            }}>
                                <div className="d-flex align-items-start mb-3">
                                    <div className="forum-icon me-4" style={{
                                        width: '80px',
                                        height: '80px',
                                        borderRadius: '50%',
                                        background: 'var(--primary-color)',
                                        color: 'white',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '32px',
                                        flexShrink: 0
                                    }}>
                                        <i className="fas fa-lightbulb"></i>
                                    </div>
                                    <div>
                                        <h3 className="mb-3">{t('forums.type2Title')}</h3>
                                        <p className="mb-3">
                                            {t('forums.type2Text')}
                                        </p>
                                        <ul style={{listStyle: 'none', padding: 0}}>
                                            <li className="mb-2">
                                                <i className="fas fa-check-circle me-2" style={{color: 'var(--primary-color)'}}></i>
                                                {t('forums.type2Item1')}
                                            </li>
                                            <li className="mb-2">
                                                <i className="fas fa-check-circle me-2" style={{color: 'var(--primary-color)'}}></i>
                                                {t('forums.type2Item2')}
                                            </li>
                                            <li className="mb-2">
                                                <i className="fas fa-check-circle me-2" style={{color: 'var(--primary-color)'}}></i>
                                                {t('forums.type2Item3')}
                                            </li>
                                            <li>
                                                <i className="fas fa-check-circle me-2" style={{color: 'var(--primary-color)'}}></i>
                                                {t('forums.type2Item4')}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="forum-type-card p-4 h-100" style={{
                                background: 'var(--white)',
                                borderRadius: '15px',
                                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                                border: '2px solid var(--primary-color)',
                                height: '100%'
                            }}>
                                <div className="d-flex align-items-start mb-3">
                                    <div className="forum-icon me-4" style={{
                                        width: '80px',
                                        height: '80px',
                                        borderRadius: '50%',
                                        background: 'var(--primary-color)',
                                        color: 'white',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '32px',
                                        flexShrink: 0
                                    }}>
                                        <i className="fas fa-handshake"></i>
                                    </div>
                                    <div>
                                        <h3 className="mb-3">{t('forums.type3Title')}</h3>
                                        <p className="mb-3">
                                            {t('forums.type3Text')}
                                        </p>
                                        <ul style={{listStyle: 'none', padding: 0}}>
                                            <li className="mb-2">
                                                <i className="fas fa-check-circle me-2" style={{color: 'var(--primary-color)'}}></i>
                                                {t('forums.type3Item1')}
                                            </li>
                                            <li className="mb-2">
                                                <i className="fas fa-check-circle me-2" style={{color: 'var(--primary-color)'}}></i>
                                                {t('forums.type3Item2')}
                                            </li>
                                            <li>
                                                <i className="fas fa-check-circle me-2" style={{color: 'var(--primary-color)'}}></i>
                                                {t('forums.type3Item3')}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="forum-type-card p-4 h-100" style={{
                                background: 'var(--white)',
                                borderRadius: '15px',
                                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                                border: '2px solid var(--primary-color)',
                                height: '100%'
                            }}>
                                <div className="d-flex align-items-start mb-3">
                                    <div className="forum-icon me-4" style={{
                                        width: '80px',
                                        height: '80px',
                                        borderRadius: '50%',
                                        background: 'var(--primary-color)',
                                        color: 'white',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '32px',
                                        flexShrink: 0
                                    }}>
                                        <i className="fas fa-gavel"></i>
                                    </div>
                                    <div>
                                        <h3 className="mb-3">{t('forums.type4Title')}</h3>
                                        <p className="mb-3">
                                            {t('forums.type4Text')}
                                        </p>
                                        <ul style={{listStyle: 'none', padding: 0}}>
                                            <li className="mb-2">
                                                <i className="fas fa-check-circle me-2" style={{color: 'var(--primary-color)'}}></i>
                                                {t('forums.type4Item1')}
                                            </li>
                                            <li className="mb-2">
                                                <i className="fas fa-check-circle me-2" style={{color: 'var(--primary-color)'}}></i>
                                                {t('forums.type4Item2')}
                                            </li>
                                            <li>
                                                <i className="fas fa-check-circle me-2" style={{color: 'var(--primary-color)'}}></i>
                                                {t('forums.type4Item3')}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Methodology Section */}
            <section className="py-5">
                <div className="container">
                    <h2 className="section-title text-center mb-5">{t('forums.methodologyTitle')}</h2>
                    
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-3">
                            <div className="methodology-card text-center p-4 h-100" style={{
                                background: 'var(--white)',
                                borderRadius: '10px',
                                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                                border: '2px solid var(--primary-color)',
                                height: '100%'
                            }}>
                                <div className="method-icon mb-3">
                                    <i className="fas fa-user-friends fa-3x" style={{color: 'var(--primary-color)'}}></i>
                                </div>
                                <h5 className="mb-3">{t('forums.method1Title')}</h5>
                                <p className="mb-0">
                                    {t('forums.method1Text')}
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3">
                            <div className="methodology-card text-center p-4 h-100" style={{
                                background: 'var(--white)',
                                borderRadius: '10px',
                                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                                border: '2px solid var(--primary-color)',
                                height: '100%'
                            }}>
                                <div className="method-icon mb-3">
                                    <i className="fas fa-comments fa-3x" style={{color: 'var(--primary-color)'}}></i>
                                </div>
                                <h5 className="mb-3">{t('forums.method2Title')}</h5>
                                <p className="mb-0">
                                    {t('forums.method2Text')}
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3">
                            <div className="methodology-card text-center p-4 h-100" style={{
                                background: 'var(--white)',
                                borderRadius: '10px',
                                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                                border: '2px solid var(--primary-color)',
                                height: '100%'
                            }}>
                                <div className="method-icon mb-3">
                                    <i className="fas fa-tasks fa-3x" style={{color: 'var(--primary-color)'}}></i>
                                </div>
                                <h5 className="mb-3">{t('forums.method3Title')}</h5>
                                <p className="mb-0">
                                    {t('forums.method3Text')}
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3">
                            <div className="methodology-card text-center p-4 h-100" style={{
                                background: 'var(--white)',
                                borderRadius: '10px',
                                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                                border: '2px solid var(--primary-color)',
                                height: '100%'
                            }}>
                                <div className="method-icon mb-3">
                                    <i className="fas fa-file-alt fa-3x" style={{color: 'var(--primary-color)'}}></i>
                                </div>
                                <h5 className="mb-3">{t('forums.method4Title')}</h5>
                                <p className="mb-0">
                                    {t('forums.method4Text')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Section */}
            <section className="py-5 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <h2 className="section-title text-center mb-5">{t('forums.impactTitle')}</h2>
                            
                            <div className="impact-box p-4" style={{
                                background: 'var(--white)',
                                borderRadius: '15px',
                                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                                borderLeft: '5px solid var(--primary-color)'
                            }}>
                                <p className="lead mb-4">
                                    {t('forums.impactText')}
                                </p>
                                
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="d-flex align-items-start">
                                            <i className="fas fa-check-circle fa-2x me-3 mt-1" style={{color: 'var(--primary-color)'}}></i>
                                            <div>
                                                <h6 className="mb-2">{t('forums.impact1Title')}</h6>
                                                <p className="mb-0 small">
                                                    {t('forums.impact1Text')}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="d-flex align-items-start">
                                            <i className="fas fa-check-circle fa-2x me-3 mt-1" style={{color: 'var(--primary-color)'}}></i>
                                            <div>
                                                <h6 className="mb-2">{t('forums.impact2Title')}</h6>
                                                <p className="mb-0 small">
                                                    {t('forums.impact2Text')}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="d-flex align-items-start">
                                            <i className="fas fa-check-circle fa-2x me-3 mt-1" style={{color: 'var(--primary-color)'}}></i>
                                            <div>
                                                <h6 className="mb-2">{t('forums.impact3Title')}</h6>
                                                <p className="mb-0 small">
                                                    {t('forums.impact3Text')}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="d-flex align-items-start">
                                            <i className="fas fa-check-circle fa-2x me-3 mt-1" style={{color: 'var(--primary-color)'}}></i>
                                            <div>
                                                <h6 className="mb-2">{t('forums.impact4Title')}</h6>
                                                <p className="mb-0 small">
                                                    {t('forums.impact4Text')}
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
                    <h2 className="section-title mb-4 text-white">{t('forums.ctaTitle')}</h2>
                    <p className="lead mb-4">
                        {t('forums.ctaText')}
                    </p>
                    <div className="d-flex gap-3 justify-content-center flex-wrap">
                        <Link to="/packs-adhesions" className="btn btn-light btn-lg px-5">
                            <i className="fas fa-user-plus me-2"></i>
                            {t('forums.becomeMember')}
                        </Link>
                        <Link to="/contact" className="btn btn-outline-light btn-lg px-5">
                            <i className="fas fa-envelope me-2"></i>
                            {t('forums.contactUs')}
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Forums;

