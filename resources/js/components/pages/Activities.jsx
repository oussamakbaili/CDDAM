import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Activities() {
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
            {/* Page Header */}
            <section className="page-header py-5" style={{background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%)', color: 'white'}}>
                <div className="container text-center">
                    <h1 className="display-4 mb-3">{t('activities.title')}</h1>
                </div>
            </section>

            {/* Périmètres d'activités Section */}
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <h2 className="section-title mb-4">{t('activities.perimeters')}</h2>
                            
                            <div className="perimeter-item mb-4">
                                <h3 className="mb-3" style={{color: 'var(--primary-color)', fontSize: '24px'}}>
                                    <i className="fas fa-flag me-2"></i>{t('activities.madeInMorocco')}
                                </h3>
                                <p>
                                    {t('activities.madeInMoroccoText')}
                                </p>
                            </div>

                            <div className="perimeter-item mb-4">
                                <h3 className="mb-3" style={{color: 'var(--primary-color)', fontSize: '24px'}}>
                                    <i className="fas fa-map-marked-alt me-2"></i>{t('activities.presence')}
                                </h3>
                                <p>
                                    {t('activities.presenceText')}
                                </p>
                            </div>

                            <div className="perimeter-item mb-4">
                                <h3 className="mb-3" style={{color: 'var(--primary-color)', fontSize: '24px'}}>
                                    <i className="fas fa-building me-2"></i>{t('activities.sectors')}
                                </h3>
                                <p>
                                    {t('activities.sectorsText')}
                                </p>
                            </div>

                            <div className="perimeter-conclusion mt-5 p-4" style={{background: 'rgba(0, 129, 164, 0.05)', borderRadius: '10px', borderLeft: '4px solid var(--primary-color)'}}>
                                <p className="mb-2">
                                    {t('activities.conclusion')}
                                </p>
                                <p className="mb-0">
                                    {t('activities.conclusion2')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Activités détaillées Section */}
            <section className="py-5 bg-light">
                <div className="container">
                    <h2 className="section-title text-center mb-5">{t('activities.activitiesTitle')}</h2>
                    
                    <div className="row">
                        {/* Cercles d'affaires */}
                        <div id="cercles" className="col-lg-6 mb-5">
                            <div className="activity-detail-card">
                                <div className="activity-icon-wrapper">
                                    <i className="fas fa-building"></i>
                                </div>
                                <h3 className="activity-title">{t('activities.businessCircles')}</h3>
                                <p>
                                    {t('activities.businessCirclesText')}
                                </p>
                            </div>
                        </div>

                        {/* Soirées de networking */}
                        <div id="networking" className="col-lg-6 mb-5">
                            <div className="activity-detail-card">
                                <div className="activity-icon-wrapper">
                                    <i className="fas fa-wine-glass"></i>
                                </div>
                                <h3 className="activity-title">{t('activities.networking')}</h3>
                                <p>
                                    {t('activities.networkingText')}
                                </p>
                            </div>
                        </div>

                        {/* Congrès */}
                        <div id="congres" className="col-lg-6 mb-5">
                            <div className="activity-detail-card">
                                <div className="activity-icon-wrapper">
                                    <i className="fas fa-calendar-alt"></i>
                                </div>
                                <h3 className="activity-title">{t('activities.congress')}</h3>
                                <p>
                                    {t('activities.congressText')}
                                </p>
                            </div>
                        </div>

                        {/* Les assemblées */}
                        <div id="assemblees" className="col-lg-6 mb-5">
                            <div className="activity-detail-card">
                                <div className="activity-icon-wrapper">
                                    <i className="fas fa-users"></i>
                                </div>
                                <h3 className="activity-title">{t('activities.assemblies')}</h3>
                                <p>
                                    {t('activities.assembliesText')}
                                </p>
                            </div>
                        </div>

                        {/* Événements */}
                        <div id="evenements" className="col-lg-6 mb-5">
                            <div className="activity-detail-card">
                                <div className="activity-icon-wrapper">
                                    <i className="fas fa-calendar-check"></i>
                                </div>
                                <h3 className="activity-title">{t('activities.events')}</h3>
                                <p>
                                    {t('activities.eventsText')}
                                </p>
                            </div>
                        </div>

                        {/* Forums */}
                        <div id="forums" className="col-lg-6 mb-5">
                            <div className="activity-detail-card">
                                <div className="activity-icon-wrapper">
                                    <i className="fas fa-comments"></i>
                                </div>
                                <h3 className="activity-title">{t('activities.forums')}</h3>
                                <p>
                                    {t('activities.forumsText')}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="activities-conclusion mt-5 p-4" style={{background: 'var(--white)', borderRadius: '10px', boxShadow: '0 3px 15px rgba(0,0,0,0.1)'}}>
                        <p className="mb-0" style={{fontSize: '16px', lineHeight: '1.8', color: '#555'}}>
                            {t('activities.activitiesConclusion')}
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-5">
                <div className="container text-center">
                    <h2 className="section-title mb-4">{t('activities.cta')}</h2>
                    <p className="lead mb-4">{t('activities.ctaText')}</p>
                    <Link to="/packs-adhesions" className="btn btn-primary btn-lg">{t('header.join')}</Link>
                </div>
            </section>
        </>
    );
}

export default Activities;
