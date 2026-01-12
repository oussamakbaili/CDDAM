import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function About() {
    const { t } = useTranslation();
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        }
    }, [location]);
    return (
        <>
            <section className="page-header py-5" style={{background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%)', color: 'white'}}>
                <div className="container text-center">
                    <h1 className="display-4">{t('about.title')}</h1>
                    <p className="lead">{t('about.subtitle')}</p>
                </div>
            </section>

            {/* Présentation Générale */}
            <section id="presentation" className="py-5">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-lg-10 mx-auto">
                            <div className="card shadow-sm border-0">
                                <div className="card-body p-5">
                                    <h2 className="section-title mb-4 text-center">{t('about.generalPresentation')}</h2>
                                    <p className="lead text-center mb-4" dangerouslySetInnerHTML={{ __html: t('about.presentationText1') }} />
                                    <p className="text-center">
                                        {t('about.presentationText2')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Objectifs */}
                    <div className="row mb-5">
                        <div className="col-lg-6 mb-4">
                            <div className="card h-100 shadow-sm">
                                <div className="card-body">
                                    <h3 className="mb-4"><i className="fas fa-bullseye text-primary me-2"></i>{t('about.globalObjective')}</h3>
                                    <p className="lead">
                                        {t('about.globalObjectiveText')}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="card h-100 shadow-sm">
                                <div className="card-body">
                                    <h3 className="mb-4"><i className="fas fa-list-check text-primary me-2"></i>{t('about.specificObjectives')}</h3>
                                    <ul className="list-unstyled">
                                        <li><i className="fas fa-check-circle text-success me-2"></i>{t('about.objective1')}</li>
                                        <li><i className="fas fa-check-circle text-success me-2"></i>{t('about.objective2')}</li>
                                        <li><i className="fas fa-check-circle text-success me-2"></i>{t('about.objective3')}</li>
                                        <li><i className="fas fa-check-circle text-success me-2"></i>{t('about.objective4')}</li>
                                        <li><i className="fas fa-check-circle text-success me-2"></i>{t('about.objective5')}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Cibles */}
                    <div className="row mb-5">
                        <div className="col-12">
                            <div className="card shadow-sm">
                                <div className="card-body p-5">
                                    <h3 className="section-title mb-4 text-center"><i className="fas fa-users text-primary me-2"></i>{t('about.targets')}</h3>
                                    <div className="row">
                                        <div className="col-md-3 col-sm-6 mb-3">
                                            <div className="text-center p-3 bg-light rounded">
                                                <i className="fas fa-user-tie fa-2x text-primary mb-3"></i>
                                                <h5>{t('about.target1')}</h5>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-6 mb-3">
                                            <div className="text-center p-3 bg-light rounded">
                                                <i className="fas fa-handshake fa-2x text-primary mb-3"></i>
                                                <h5>{t('about.target2')}</h5>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-6 mb-3">
                                            <div className="text-center p-3 bg-light rounded">
                                                <i className="fas fa-lightbulb fa-2x text-primary mb-3"></i>
                                                <h5>{t('about.target3')}</h5>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-6 mb-3">
                                            <div className="text-center p-3 bg-light rounded">
                                                <i className="fas fa-briefcase fa-2x text-primary mb-3"></i>
                                                <h5>{t('about.target4')}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Identity Section */}
            <section className="py-5 bg-light">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-lg-8 mx-auto">
                            <h2 className="section-title">{t('about.identitySection')}</h2>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <h4><i className="fas fa-gavel" style={{color: 'var(--primary-color)'}}></i> {t('about.legalFormTitle')}</h4>
                                    <p>{t('about.legalFormText')}</p>
                                </div>
                            </div>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <h4><i className="fas fa-question-circle" style={{color: 'var(--primary-color)'}}></i> {t('about.whyTitle')}</h4>
                                    <p>{t('about.whyText')}</p>
                                </div>
                            </div>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <h4><i className="fas fa-map-marked-alt" style={{color: 'var(--primary-color)'}}></i> {t('about.scopeTitle')}</h4>
                                    <ul>
                                        <li>{t('about.scope1')}</li>
                                        <li>{t('about.scope2')}</li>
                                        <li>{t('about.scope3')}</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <h4><i className="fas fa-compass" style={{color: 'var(--primary-color)'}}></i> {t('about.orientationTitle')}</h4>
                                    <p>{t('about.orientationText')}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="identity-card">
                                <h3><i className="fas fa-eye"></i> {t('about.visionTitle')}</h3>
                                <p>{t('about.visionText')}</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="identity-card">
                                <h3><i className="fas fa-bullseye"></i> {t('about.missionTitle')}</h3>
                                <ul>
                                    <li>{t('about.mission1')}</li>
                                    <li>{t('about.mission2')}</li>
                                    <li>{t('about.mission3')}</li>
                                    <li>{t('about.mission4')}</li>
                                    <li>{t('about.mission5')}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="identity-card">
                                <h3><i className="fas fa-heart"></i> {t('about.valuesTitle')}</h3>
                                <ul>
                                    <li><i className="fas fa-star text-warning me-2"></i>{t('about.value1')}</li>
                                    <li><i className="fas fa-lightbulb text-info me-2"></i>{t('about.value2')}</li>
                                    <li><i className="fas fa-eye text-primary me-2"></i>{t('about.value3')}</li>
                                    <li><i className="fas fa-hand-holding-heart text-danger me-2"></i>{t('about.value4')}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Structure Organisationnelle */}
            <section id="structure" className="py-5">
                <div className="container">
                    <h2 className="section-title text-center mb-5">{t('about.organizationalStructure')}</h2>
                    <div className="row">
                        <div className="col-md-6 col-lg-3 mb-4">
                            <div className="card h-100 text-center shadow-sm">
                                <div className="card-body">
                                    <i className="fas fa-users-cog fa-3x text-primary mb-3"></i>
                                    <h4>{t('about.structure1')}</h4>
                                    <p className="text-muted">{t('about.structure1Desc')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-4">
                            <div className="card h-100 text-center shadow-sm">
                                <div className="card-body">
                                    <i className="fas fa-building fa-3x text-primary mb-3"></i>
                                    <h4>{t('about.structure2')}</h4>
                                    <p className="text-muted">{t('about.structure2Desc')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-4">
                            <div className="card h-100 text-center shadow-sm">
                                <div className="card-body">
                                    <i className="fas fa-clipboard-list fa-3x text-primary mb-3"></i>
                                    <h4 id="commissions">{t('about.structure3')}</h4>
                                    <p className="text-muted">{t('about.structure3Desc')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-4">
                            <div className="card h-100 text-center shadow-sm">
                                <div className="card-body">
                                    <i className="fas fa-map-marked-alt fa-3x text-primary mb-3"></i>
                                    <h4>{t('about.structure4')}</h4>
                                    <p className="text-muted">{t('about.structure4Desc')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Financement */}
            <section className="py-5 bg-light">
                <div className="container">
                    <h2 className="section-title text-center mb-5">{t('about.funding')}</h2>
                    <div className="row">
                        <div className="col-md-6 col-lg-3 mb-4">
                            <div className="card h-100 border-primary">
                                <div className="card-body text-center">
                                    <i className="fas fa-money-bill-wave fa-3x text-primary mb-3"></i>
                                    <h5>{t('about.funding1')}</h5>
                                    <p className="text-muted small">{t('about.funding1Desc')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-4">
                            <div className="card h-100 border-primary">
                                <div className="card-body text-center">
                                    <i className="fas fa-handshake fa-3x text-primary mb-3"></i>
                                    <h5>{t('about.funding2')}</h5>
                                    <p className="text-muted small">{t('about.funding2Desc')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-4">
                            <div className="card h-100 border-primary">
                                <div className="card-body text-center">
                                    <i className="fas fa-gift fa-3x text-primary mb-3"></i>
                                    <h5>{t('about.funding3')}</h5>
                                    <p className="text-muted small">{t('about.funding3Desc')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-4">
                            <div className="card h-100 border-primary">
                                <div className="card-body text-center">
                                    <i className="fas fa-calendar-check fa-3x text-primary mb-3"></i>
                                    <h5>{t('about.funding4')}</h5>
                                    <p className="text-muted small">{t('about.funding4Desc')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Attendu */}
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <div className="card shadow-lg border-0">
                                <div className="card-body p-5">
                                    <h2 className="section-title text-center mb-5">{t('about.expectedImpact')}</h2>
                                    <div className="row">
                                        <div className="col-md-4 mb-4">
                                            <div className="text-center p-4">
                                                <i className="fas fa-chart-line fa-3x text-success mb-3"></i>
                                                <h4>{t('about.impact1')}</h4>
                                                <p>{t('about.impact1Desc')}</p>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-4">
                                            <div className="text-center p-4">
                                                <i className="fas fa-shield-alt fa-3x text-primary mb-3"></i>
                                                <h4>{t('about.impact2')}</h4>
                                                <p>{t('about.impact2Desc')}</p>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-4">
                                            <div className="text-center p-4">
                                                <i className="fas fa-network-wired fa-3x text-info mb-3"></i>
                                                <h4>{t('about.impact3')}</h4>
                                                <p>{t('about.impact3Desc')}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Plan de Lancement */}
            <section className="py-5 bg-light">
                <div className="container">
                    <h2 className="section-title text-center mb-5">{t('about.launchPlan')}</h2>
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <div className="timeline">
                                <div className="row mb-4">
                                    <div className="col-md-6 mb-4">
                                        <div className="card h-100 shadow-sm border-primary border-2">
                                            <div className="card-body p-4">
                                                <div className="d-flex align-items-center mb-3">
                                                    <div className="badge bg-primary rounded-circle p-3 me-3" style={{width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                                        <span className="fs-4 fw-bold">1</span>
                                                    </div>
                                                    <h4 className="mb-0">{t('about.phase1')}</h4>
                                                </div>
                                                <ul className="list-unstyled ms-5">
                                                    <li><i className="fas fa-check-circle text-success me-2"></i>{t('about.phase1Item1')}</li>
                                                    <li><i className="fas fa-check-circle text-success me-2"></i>{t('about.phase1Item2')}</li>
                                                    <li><i className="fas fa-check-circle text-success me-2"></i>{t('about.phase1Item3')}</li>
                                                    <li><i className="fas fa-check-circle text-success me-2"></i>{t('about.phase1Item4')}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <div className="card h-100 shadow-sm border-success border-2">
                                            <div className="card-body p-4">
                                                <div className="d-flex align-items-center mb-3">
                                                    <div className="badge bg-success rounded-circle p-3 me-3" style={{width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                                        <span className="fs-4 fw-bold">2</span>
                                                    </div>
                                                    <h4 className="mb-0">{t('about.phase2')}</h4>
                                                </div>
                                                <ul className="list-unstyled ms-5">
                                                    <li><i className="fas fa-check-circle text-success me-2"></i>{t('about.phase2Item1')}</li>
                                                    <li><i className="fas fa-check-circle text-success me-2"></i>{t('about.phase2Item2')}</li>
                                                    <li><i className="fas fa-check-circle text-success me-2"></i>{t('about.phase2Item3')}</li>
                                                    <li><i className="fas fa-check-circle text-success me-2"></i>{t('about.phase2Item4')}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <div className="card h-100 shadow-sm border-info border-2">
                                            <div className="card-body p-4">
                                                <div className="d-flex align-items-center mb-3">
                                                    <div className="badge bg-info rounded-circle p-3 me-3" style={{width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                                        <span className="fs-4 fw-bold">3</span>
                                                    </div>
                                                    <h4 className="mb-0">{t('about.phase3')}</h4>
                                                </div>
                                                <ul className="list-unstyled ms-5">
                                                    <li><i className="fas fa-check-circle text-success me-2"></i>{t('about.phase3Item1')}</li>
                                                    <li><i className="fas fa-check-circle text-success me-2"></i>{t('about.phase3Item2')}</li>
                                                    <li><i className="fas fa-check-circle text-success me-2"></i>{t('about.phase3Item3')}</li>
                                                    <li><i className="fas fa-check-circle text-success me-2"></i>{t('about.phase3Item4')}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <div className="card h-100 shadow-sm border-warning border-2">
                                            <div className="card-body p-4">
                                                <div className="d-flex align-items-center mb-3">
                                                    <div className="badge bg-warning rounded-circle p-3 me-3" style={{width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                                        <span className="fs-4 fw-bold">4</span>
                                                    </div>
                                                    <h4 className="mb-0">{t('about.phase4')}</h4>
                                                </div>
                                                <ul className="list-unstyled ms-5">
                                                    <li><i className="fas fa-check-circle text-success me-2"></i>{t('about.phase4Item1')}</li>
                                                    <li><i className="fas fa-check-circle text-success me-2"></i>{t('about.phase4Item2')}</li>
                                                    <li><i className="fas fa-check-circle text-success me-2"></i>{t('about.phase4Item3')}</li>
                                                    <li><i className="fas fa-check-circle text-success me-2"></i>{t('about.phase4Item4')}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;
