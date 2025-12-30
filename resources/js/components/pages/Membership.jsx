import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Membership() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleExpertClick = () => {
        // Rediriger vers la page de contact avec un paramètre
        navigate('/contact?type=expert');
    };

    const handleAssociationClick = () => {
        // Rediriger vers la page de contact avec un paramètre
        navigate('/contact?type=association');
    };
    return (
        <>
            <section className="page-header py-5" style={{background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%)', color: 'white'}}>
                <div className="container text-center">
                    <h1 className="display-4">{t('membership.title')}</h1>
                </div>
            </section>

            <section className="py-5">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-lg-8 mx-auto text-center">
                            <h2 className="section-title mb-4">{t('membership.formulas')}</h2>
                            <p className="lead">{t('membership.formulasText')}</p>
                        </div>
                    </div>
                    
                    <div className="row justify-content-center">
                        {/* Pack 1 : Expert particulier / Acteur dirigeants */}
                        <div className="col-lg-5 col-md-6 mb-4">
                            <div className="card h-100 shadow-lg membership-card border-primary" style={{borderWidth: '3px', borderRadius: '15px'}}>
                                <div className="card-header bg-primary text-white text-center position-relative" style={{borderRadius: '12px 12px 0 0', padding: '25px'}}>
                                    <div className="mb-3">
                                        <i className="fas fa-user-tie fa-3x mb-3"></i>
                                    </div>
                                    <h3 className="mb-2" style={{fontSize: '1.8rem', fontWeight: 'bold'}}>{t('membership.expert')}</h3>
                                    <p className="mb-0" style={{opacity: 0.9, fontSize: '1.1rem'}}>{t('membership.expertSubtitle')}</p>
                                </div>
                                <div className="card-body" style={{padding: '30px'}}>
                                    <div className="text-center mb-4">
                                        <h2 className="text-primary mb-2" style={{fontSize: '2.5rem', fontWeight: 'bold'}}>{t('membership.custom')}</h2>
                                        <p className="text-muted">{t('membership.customDesc')}</p>
                                    </div>
                                    <ul className="list-unstyled" style={{lineHeight: '2.2'}}>
                                        <li><i className="fas fa-check-circle text-success me-3" style={{fontSize: '1.2rem'}}></i> {t('membership.expertBenefit1')}</li>
                                        <li><i className="fas fa-check-circle text-success me-3" style={{fontSize: '1.2rem'}}></i> {t('membership.expertBenefit2')}</li>
                                        <li><i className="fas fa-check-circle text-success me-3" style={{fontSize: '1.2rem'}}></i> {t('membership.expertBenefit3')}</li>
                                        <li><i className="fas fa-check-circle text-success me-3" style={{fontSize: '1.2rem'}}></i> {t('membership.expertBenefit4')}</li>
                                        <li><i className="fas fa-check-circle text-success me-3" style={{fontSize: '1.2rem'}}></i> {t('membership.expertBenefit5')}</li>
                                        <li><i className="fas fa-check-circle text-success me-3" style={{fontSize: '1.2rem'}}></i> {t('membership.expertBenefit6')}</li>
                                        <li><i className="fas fa-check-circle text-success me-3" style={{fontSize: '1.2rem'}}></i> {t('membership.expertBenefit7')}</li>
                                        <li><i className="fas fa-check-circle text-success me-3" style={{fontSize: '1.2rem'}}></i> {t('membership.expertBenefit8')}</li>
                                    </ul>
                                </div>
                                <div className="card-footer bg-transparent text-center" style={{padding: '25px', borderTop: '2px solid #f0f0f0'}}>
                                    <button 
                                        onClick={handleExpertClick}
                                        className="btn btn-primary btn-lg w-100" 
                                        style={{padding: '12px', fontSize: '1.1rem', fontWeight: 'bold', borderRadius: '8px', cursor: 'pointer'}}
                                    >
                                        <i className="fas fa-user-plus me-2"></i>{t('membership.joinExpert')}
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        {/* Pack 2 : Association */}
                        <div className="col-lg-5 col-md-6 mb-4">
                            <div className="card h-100 shadow-lg membership-card border-secondary" style={{borderWidth: '3px', borderRadius: '15px'}}>
                                <div className="card-header bg-secondary text-white text-center position-relative" style={{borderRadius: '12px 12px 0 0', padding: '25px'}}>
                                    <div className="mb-3">
                                        <i className="fas fa-building fa-3x mb-3"></i>
                                    </div>
                                    <h3 className="mb-2" style={{fontSize: '1.8rem', fontWeight: 'bold'}}>{t('membership.association')}</h3>
                                    <p className="mb-0" style={{opacity: 0.9, fontSize: '1.1rem'}}>{t('membership.associationSubtitle')}</p>
                                </div>
                                <div className="card-body" style={{padding: '30px'}}>
                                    <div className="text-center mb-4">
                                        <div className="d-flex justify-content-center gap-3 mb-3">
                                            <div className="text-center">
                                                <h4 className="text-secondary mb-1" style={{fontSize: '1.8rem', fontWeight: 'bold'}}>{t('membership.local')}</h4>
                                                <p className="text-muted small mb-0">{t('membership.quote')}</p>
                                            </div>
                                            <div className="text-center border-start border-end px-3">
                                                <h4 className="text-secondary mb-1" style={{fontSize: '1.8rem', fontWeight: 'bold'}}>{t('membership.regional')}</h4>
                                                <p className="text-muted small mb-0">{t('membership.quote')}</p>
                                            </div>
                                            <div className="text-center">
                                                <h4 className="text-secondary mb-1" style={{fontSize: '1.8rem', fontWeight: 'bold'}}>{t('membership.national')}</h4>
                                                <p className="text-muted small mb-0">{t('membership.quote')}</p>
                                            </div>
                                        </div>
                                        <p className="text-muted">{t('membership.formulaAdapted')}</p>
                                    </div>
                                    <ul className="list-unstyled" style={{lineHeight: '2.2'}}>
                                        <li><i className="fas fa-check-circle text-success me-3" style={{fontSize: '1.2rem'}}></i> {t('membership.associationBenefit1')}</li>
                                        <li><i className="fas fa-check-circle text-success me-3" style={{fontSize: '1.2rem'}}></i> {t('membership.associationBenefit2')}</li>
                                        <li><i className="fas fa-check-circle text-success me-3" style={{fontSize: '1.2rem'}}></i> {t('membership.associationBenefit3')}</li>
                                        <li><i className="fas fa-check-circle text-success me-3" style={{fontSize: '1.2rem'}}></i> {t('membership.associationBenefit4')}</li>
                                        <li><i className="fas fa-check-circle text-success me-3" style={{fontSize: '1.2rem'}}></i> {t('membership.associationBenefit5')}</li>
                                        <li><i className="fas fa-check-circle text-success me-3" style={{fontSize: '1.2rem'}}></i> {t('membership.associationBenefit6')}</li>
                                        <li><i className="fas fa-check-circle text-success me-3" style={{fontSize: '1.2rem'}}></i> {t('membership.associationBenefit7')}</li>
                                        <li><i className="fas fa-check-circle text-success me-3" style={{fontSize: '1.2rem'}}></i> {t('membership.associationBenefit8')}</li>
                                    </ul>
                                </div>
                                <div className="card-footer bg-transparent text-center" style={{padding: '25px', borderTop: '2px solid #f0f0f0'}}>
                                    <button 
                                        onClick={handleAssociationClick}
                                        className="btn btn-secondary btn-lg w-100" 
                                        style={{padding: '12px', fontSize: '1.1rem', fontWeight: 'bold', borderRadius: '8px', cursor: 'pointer'}}
                                    >
                                        <i className="fas fa-handshake me-2"></i>{t('membership.joinAssociation')}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row mt-5">
                        <div className="col-lg-8 mx-auto">
                            <div className="alert alert-info text-center" style={{borderRadius: '10px', padding: '20px'}}>
                                <i className="fas fa-info-circle me-2" style={{fontSize: '1.2rem'}}></i>
                                <strong style={{fontSize: '1.1rem'}}>{t('membership.help')}</strong>
                                <p className="mb-0 mt-2">{t('membership.helpText')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Membership;

