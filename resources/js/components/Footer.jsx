import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

function Footer() {
    const { t } = useTranslation();
    console.log('Footer component is rendering');
    
    const [newsletterEmail, setNewsletterEmail] = useState('');
    const [newsletterStatus, setNewsletterStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleNewsletterSubmit = async (e) => {
        e.preventDefault();
        
        if (!newsletterEmail || !newsletterEmail.trim()) {
            setNewsletterStatus({
                type: 'error',
                message: t('footer.invalidEmail')
            });
            return;
        }

        setIsSubmitting(true);
        setNewsletterStatus({ type: '', message: '' });

        try {
            const response = await axios.post('/api/newsletter/subscribe', {
                email: newsletterEmail.trim()
            });

            if (response.data.success) {
                setNewsletterStatus({
                    type: 'success',
                    message: response.data.message || t('footer.subscribeSuccess')
                });
                setNewsletterEmail('');
                
                // Masquer le message après 5 secondes
                setTimeout(() => {
                    setNewsletterStatus({ type: '', message: '' });
                }, 5000);
            }
        } catch (error) {
            const errorMessage = error.response?.data?.message || t('footer.subscribeError');
            setNewsletterStatus({
                type: 'error',
                message: errorMessage
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <footer className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img src="/images/logoblancnoir.png" alt="Club des Dirigeants des Associations Maroc - CDDAM" className="footer-logo" style={{maxHeight: '100px', height: '100px', width: 'auto', marginBottom: '15px'}} />
                        <p>{t('footer.description')}</p>
                        <ul className="footer-links">
                            <li><a href="#">{t('footer.terms')}</a></li>
                            <li><a href="#">{t('footer.privacy')}</a></li>
                            <li><a href="#">{t('footer.legal')}</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>{t('footer.contactInfo')}</h5>
                        <ul className="contact-list">
                            <li><i className="fas fa-map-marker-alt"></i> {t('common.address')}</li>
                            <li><i className="fas fa-phone"></i> {t('common.phone')}</li>
                            <li><i className="fas fa-envelope"></i> {t('common.email')}</li>
                            <li><i className="fas fa-clock"></i> {t('footer.hours')}</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>{t('footer.newsletter')}</h5>
                        <p>{t('footer.newsletterDescription')}</p>
                        <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                            {newsletterStatus.message && (
                                <div 
                                    className={`alert ${newsletterStatus.type === 'success' ? 'alert-success' : 'alert-danger'}`}
                                    style={{
                                        padding: '10px 15px',
                                        marginBottom: '15px',
                                        borderRadius: '5px',
                                        fontSize: '14px',
                                        backgroundColor: newsletterStatus.type === 'success' ? '#d4edda' : '#f8d7da',
                                        border: `1px solid ${newsletterStatus.type === 'success' ? '#c3e6cb' : '#f5c6cb'}`,
                                        color: newsletterStatus.type === 'success' ? '#155724' : '#721c24'
                                    }}
                                >
                                    {newsletterStatus.type === 'success' && <i className="fas fa-check-circle me-2"></i>}
                                    {newsletterStatus.type === 'error' && <i className="fas fa-exclamation-circle me-2"></i>}
                                    {newsletterStatus.message}
                                </div>
                            )}
                            <div className="input-group">
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    placeholder={t('footer.emailPlaceholder')} 
                                    value={newsletterEmail}
                                    onChange={(e) => setNewsletterEmail(e.target.value)}
                                    disabled={isSubmitting}
                                    required
                                />
                                <button 
                                    className="btn btn-primary" 
                                    type="submit"
                                    disabled={isSubmitting}
                                    style={{
                                        opacity: isSubmitting ? 0.6 : 1,
                                        cursor: isSubmitting ? 'not-allowed' : 'pointer'
                                    }}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <i className="fas fa-spinner fa-spin me-2"></i>
                                            {t('footer.sending')}
                                        </>
                                    ) : (
                                        t('footer.subscribe')
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-12 text-center">
                        <p>&copy; {new Date().getFullYear()} <img src="/images/logoblancnoir.png" alt="CDDAM" style={{height: '20px', verticalAlign: 'middle', margin: '0 5px'}} /> {t('footer.copyright')}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
