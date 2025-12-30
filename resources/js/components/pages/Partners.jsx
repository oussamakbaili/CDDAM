import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Partners() {
    const { t } = useTranslation();
    const location = useLocation();
    
    // Déterminer le type de partenaire depuis l'URL hash
    const getCategoryFromHash = () => {
        const hash = location.hash.substring(1); // Enlever le #
        if (['prive', 'public', 'ong'].includes(hash)) {
            return hash;
        }
        return null;
    };

    const selectedCategory = getCategoryFromHash();

    // Descriptions spécifiques pour chaque type de partenaire
    const categoryDescriptions = {
        prive: {
            title: t('partners.privateTitle'),
            description: t('partners.privateDescription'),
            benefits: [
                t('partners.privateBenefit1'),
                t('partners.privateBenefit2'),
                t('partners.privateBenefit3'),
                t('partners.privateBenefit4'),
                t('partners.privateBenefit5')
            ]
        },
        public: {
            title: t('partners.publicTitle'),
            description: t('partners.publicDescription'),
            benefits: [
                t('partners.publicBenefit1'),
                t('partners.publicBenefit2'),
                t('partners.publicBenefit3'),
                t('partners.publicBenefit4'),
                t('partners.publicBenefit5')
            ]
        },
        ong: {
            title: t('partners.ngoTitle'),
            description: t('partners.ngoDescription'),
            benefits: [
                t('partners.ngoBenefit1'),
                t('partners.ngoBenefit2'),
                t('partners.ngoBenefit3'),
                t('partners.ngoBenefit4'),
                t('partners.ngoBenefit5')
            ]
        }
    };

    return (
        <>
            {/* Page Header */}
            <section className="page-header py-5" style={{background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%)', color: 'white'}}>
                <div className="container text-center">
                    <h1 className="display-4 mb-3">{t('partners.title')}</h1>
                    <p className="lead">{t('partners.subtitle')}</p>
                </div>
            </section>

            {/* Description Section - Générale ou spécifique selon le type */}
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <div className="partners-intro">
                                {selectedCategory && categoryDescriptions[selectedCategory] ? (
                                    // Description spécifique pour le type de partenaire sélectionné
                                    <div className="partners-description">
                                        <h2 className="section-title text-center mb-4" style={{color: 'var(--primary-color)'}}>
                                            {categoryDescriptions[selectedCategory].title}
                                        </h2>
                                        <p className="lead text-center mb-4" style={{color: '#666', fontSize: '18px', lineHeight: '1.8'}}>
                                            {categoryDescriptions[selectedCategory].description}
                                        </p>
                                        
                                        <div className="category-benefits mt-5">
                                            <h3 className="mb-4" style={{color: 'var(--primary-color)', fontSize: '24px'}}>
                                                {t('partners.benefitsTitle')} {selectedCategory === 'prive' ? t('header.privatePartner') : selectedCategory === 'public' ? t('header.publicPartner') : t('header.ngoPartner')} :
                                            </h3>
                                            <ul className="category-benefits-list" style={{listStyle: 'none', padding: 0}}>
                                                {categoryDescriptions[selectedCategory].benefits.map((benefit, index) => (
                                                    <li key={index} className="mb-3" style={{paddingLeft: '30px', position: 'relative', fontSize: '16px', lineHeight: '1.8', color: '#555'}}>
                                                        <i className="fas fa-check-circle" style={{position: 'absolute', left: 0, color: 'var(--primary-color)', fontSize: '20px'}}></i>
                                                        {benefit}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ) : (
                                    // Description générale
                                    <div className="partners-description">
                                        <h2 className="section-title text-center mb-4">{t('partners.generalTitle')}</h2>
                                        <p className="lead text-center mb-4" style={{color: '#666'}}>
                                            {t('partners.generalSubtitle')}
                                        </p>
                                        
                                        <div className="partners-description">
                                            <p>
                                                {t('partners.generalText1')}
                                            </p>
                                            
                                            <p>
                                                {t('partners.generalText2')}
                                            </p>

                                            <h3 className="mt-4 mb-3" style={{color: 'var(--primary-color)', fontSize: '24px'}}>{t('partners.whatWeOffer')}</h3>
                                            
                                            <div className="partners-benefits">
                                                <div className="benefit-item mb-3">
                                                    <h4><i className="fas fa-users text-primary me-2"></i>{t('partners.offer1')}</h4>
                                                    <p>{t('partners.offer1Text')}</p>
                                                </div>
                                                
                                                <div className="benefit-item mb-3">
                                                    <h4><i className="fas fa-bullhorn text-primary me-2"></i>{t('partners.offer2')}</h4>
                                                    <p>{t('partners.offer2Text')}</p>
                                                </div>
                                                
                                                <div className="benefit-item mb-3">
                                                    <h4><i className="fas fa-handshake text-primary me-2"></i>{t('partners.offer3')}</h4>
                                                    <p>{t('partners.offer3Text')}</p>
                                                </div>
                                                
                                                <div className="benefit-item mb-3">
                                                    <h4><i className="fas fa-heart text-primary me-2"></i>{t('partners.offer4')}</h4>
                                                    <p>{t('partners.offer4Text')}</p>
                                                </div>
                                                
                                                <div className="benefit-item mb-3">
                                                    <h4><i className="fas fa-tools text-primary me-2"></i>{t('partners.offer5')}</h4>
                                                    <p>{t('partners.offer5Text')}</p>
                                                </div>
                                            </div>

                                            <div className="partners-conclusion mt-4 p-4" style={{background: 'rgba(0, 129, 164, 0.05)', borderRadius: '10px', borderLeft: '4px solid var(--primary-color)'}}>
                                                <p className="mb-0" style={{fontSize: '18px', fontStyle: 'italic', color: '#555'}}>
                                                    <strong>{t('partners.conclusion')}</strong>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-5">
                <div className="container text-center">
                    <h2 className="section-title mb-4">{t('partners.cta')}</h2>
                    <p className="lead mb-4">{t('partners.ctaText')}</p>
                    <Link to="/contact" className="btn btn-primary btn-lg">{t('common.contactUs')}</Link>
                </div>
            </section>
        </>
    );
}

export default Partners;

