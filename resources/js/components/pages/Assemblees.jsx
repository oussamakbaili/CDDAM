import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Assemblees() {
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
                    <h1 className="display-4 mb-3 fw-bold">{t('assemblies.title')}</h1>
                    <p className="lead mb-0">{t('assemblies.subtitle')}</p>
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
                                    <i className="fas fa-users-cog me-3"></i>
                                    {t('assemblies.governance')}
                                </h2>
                                <p className="lead mb-4">
                                    {t('assemblies.governanceText1')}
                                </p>
                                <p>
                                    {t('assemblies.governanceText2')}
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
                                    <i className="fas fa-balance-scale fa-4x mb-3" style={{color: 'var(--primary-color)'}}></i>
                                    <h3 className="mb-3">{t('assemblies.participatoryDemocracy')}</h3>
                                    <p className="mb-0">
                                        {t('assemblies.participatoryDemocracyText')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Types of Assemblies Section */}
            <section className="py-5 bg-light">
                <div className="container">
                    <h2 className="section-title text-center mb-5">{t('assemblies.types')}</h2>
                    
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="assembly-type-card p-4 h-100" style={{
                                background: 'var(--white)',
                                borderRadius: '15px',
                                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                                border: '2px solid var(--primary-color)',
                                height: '100%'
                            }}>
                                <div className="d-flex align-items-start mb-3">
                                    <div className="assembly-icon me-4" style={{
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
                                        <i className="fas fa-calendar-alt"></i>
                                    </div>
                                    <div>
                                        <h3 className="mb-3">{t('assemblies.ordinary')}</h3>
                                        <p className="mb-3">
                                            {t('assemblies.ordinaryText')}
                                        </p>
                                        <ul style={{listStyle: 'none', padding: 0}}>
                                            <li className="mb-2">
                                                <i className="fas fa-check-circle me-2" style={{color: 'var(--primary-color)'}}></i>
                                                {t('assemblies.ordinaryItem1')}
                                            </li>
                                            <li className="mb-2">
                                                <i className="fas fa-check-circle me-2" style={{color: 'var(--primary-color)'}}></i>
                                                {t('assemblies.ordinaryItem2')}
                                            </li>
                                            <li className="mb-2">
                                                <i className="fas fa-check-circle me-2" style={{color: 'var(--primary-color)'}}></i>
                                                {t('assemblies.ordinaryItem3')}
                                            </li>
                                            <li className="mb-2">
                                                <i className="fas fa-check-circle me-2" style={{color: 'var(--primary-color)'}}></i>
                                                {t('assemblies.ordinaryItem4')}
                                            </li>
                                            <li>
                                                <i className="fas fa-check-circle me-2" style={{color: 'var(--primary-color)'}}></i>
                                                {t('assemblies.ordinaryItem5')}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="assembly-type-card p-4 h-100" style={{
                                background: 'var(--white)',
                                borderRadius: '15px',
                                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                                border: '2px solid var(--primary-color)',
                                height: '100%'
                            }}>
                                <div className="d-flex align-items-start mb-3">
                                    <div className="assembly-icon me-4" style={{
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
                                        <i className="fas fa-exclamation-circle"></i>
                                    </div>
                                    <div>
                                        <h3 className="mb-3">{t('assemblies.extraordinary')}</h3>
                                        <p className="mb-3">
                                            {t('assemblies.extraordinaryText')}
                                        </p>
                                        <ul style={{listStyle: 'none', padding: 0}}>
                                            <li className="mb-2">
                                                <i className="fas fa-check-circle me-2" style={{color: 'var(--primary-color)'}}></i>
                                                {t('assemblies.extraordinaryItem1')}
                                            </li>
                                            <li className="mb-2">
                                                <i className="fas fa-check-circle me-2" style={{color: 'var(--primary-color)'}}></i>
                                                {t('assemblies.extraordinaryItem2')}
                                            </li>
                                            <li className="mb-2">
                                                <i className="fas fa-check-circle me-2" style={{color: 'var(--primary-color)'}}></i>
                                                {t('assemblies.extraordinaryItem3')}
                                            </li>
                                            <li>
                                                <i className="fas fa-check-circle me-2" style={{color: 'var(--primary-color)'}}></i>
                                                {t('assemblies.extraordinaryItem4')}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-5">
                <div className="container">
                    <h2 className="section-title text-center mb-5">{t('assemblies.processTitle')}</h2>
                    
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <div className="process-timeline">
                                <div className="process-step mb-5">
                                    <div className="row align-items-center">
                                        <div className="col-md-2 text-center mb-3 mb-md-0">
                                            <div className="step-number" style={{
                                                width: '70px',
                                                height: '70px',
                                                borderRadius: '50%',
                                                background: 'var(--primary-color)',
                                                color: 'white',
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '28px',
                                                fontWeight: 'bold'
                                            }}>1</div>
                                        </div>
                                        <div className="col-md-10">
                                            <h4 className="mb-2">{t('assemblies.process1Title')}</h4>
                                            <p className="mb-0">
                                                {t('assemblies.process1Text')}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="process-step mb-5">
                                    <div className="row align-items-center">
                                        <div className="col-md-2 text-center mb-3 mb-md-0">
                                            <div className="step-number" style={{
                                                width: '70px',
                                                height: '70px',
                                                borderRadius: '50%',
                                                background: 'var(--primary-color)',
                                                color: 'white',
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '28px',
                                                fontWeight: 'bold'
                                            }}>2</div>
                                        </div>
                                        <div className="col-md-10">
                                            <h4 className="mb-2">{t('assemblies.process2Title')}</h4>
                                            <p className="mb-0">
                                                {t('assemblies.process2Text')}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="process-step mb-5">
                                    <div className="row align-items-center">
                                        <div className="col-md-2 text-center mb-3 mb-md-0">
                                            <div className="step-number" style={{
                                                width: '70px',
                                                height: '70px',
                                                borderRadius: '50%',
                                                background: 'var(--primary-color)',
                                                color: 'white',
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '28px',
                                                fontWeight: 'bold'
                                            }}>3</div>
                                        </div>
                                        <div className="col-md-10">
                                            <h4 className="mb-2">{t('assemblies.process3Title')}</h4>
                                            <p className="mb-0">
                                                {t('assemblies.process3Text')}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="process-step">
                                    <div className="row align-items-center">
                                        <div className="col-md-2 text-center mb-3 mb-md-0">
                                            <div className="step-number" style={{
                                                width: '70px',
                                                height: '70px',
                                                borderRadius: '50%',
                                                background: 'var(--primary-color)',
                                                color: 'white',
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '28px',
                                                fontWeight: 'bold'
                                            }}>4</div>
                                        </div>
                                        <div className="col-md-10">
                                            <h4 className="mb-2">{t('assemblies.process4Title')}</h4>
                                            <p className="mb-0">
                                                {t('assemblies.process4Text')}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-5 bg-light">
                <div className="container">
                    <h2 className="section-title text-center mb-5">{t('assemblies.valuesTitle')}</h2>
                    
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-3">
                            <div className="value-card text-center p-4 h-100" style={{
                                background: 'var(--white)',
                                borderRadius: '10px',
                                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                                height: '100%'
                            }}>
                                <i className="fas fa-eye fa-3x mb-3" style={{color: 'var(--primary-color)'}}></i>
                                <h5 className="mb-3">{t('assemblies.value1Title')}</h5>
                                <p className="mb-0">
                                    {t('assemblies.value1Text')}
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3">
                            <div className="value-card text-center p-4 h-100" style={{
                                background: 'var(--white)',
                                borderRadius: '10px',
                                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                                height: '100%'
                            }}>
                                <i className="fas fa-user-friends fa-3x mb-3" style={{color: 'var(--primary-color)'}}></i>
                                <h5 className="mb-3">{t('assemblies.value2Title')}</h5>
                                <p className="mb-0">
                                    {t('assemblies.value2Text')}
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3">
                            <div className="value-card text-center p-4 h-100" style={{
                                background: 'var(--white)',
                                borderRadius: '10px',
                                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                                height: '100%'
                            }}>
                                <i className="fas fa-comments fa-3x mb-3" style={{color: 'var(--primary-color)'}}></i>
                                <h5 className="mb-3">{t('assemblies.value3Title')}</h5>
                                <p className="mb-0">
                                    {t('assemblies.value3Text')}
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3">
                            <div className="value-card text-center p-4 h-100" style={{
                                background: 'var(--white)',
                                borderRadius: '10px',
                                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                                height: '100%'
                            }}>
                                <i className="fas fa-handshake fa-3x mb-3" style={{color: 'var(--primary-color)'}}></i>
                                <h5 className="mb-3">{t('assemblies.value4Title')}</h5>
                                <p className="mb-0">
                                    {t('assemblies.value4Text')}
                                </p>
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
                    <h2 className="section-title mb-4 text-white">{t('assemblies.ctaTitle')}</h2>
                    <p className="lead mb-4">
                        {t('assemblies.ctaText')}
                    </p>
                    <div className="d-flex gap-3 justify-content-center flex-wrap">
                        <Link to="/packs-adhesions" className="btn btn-light btn-lg px-5">
                            <i className="fas fa-user-plus me-2"></i>
                            {t('assemblies.becomeMember')}
                        </Link>
                        <Link to="/contact" className="btn btn-outline-light btn-lg px-5">
                            <i className="fas fa-envelope me-2"></i>
                            {t('assemblies.contactUs')}
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Assemblees;

