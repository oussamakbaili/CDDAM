import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Footer() {
    console.log('Footer component is rendering');
    
    const [newsletterEmail, setNewsletterEmail] = useState('');
    const [newsletterStatus, setNewsletterStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleNewsletterSubmit = async (e) => {
        e.preventDefault();
        
        if (!newsletterEmail || !newsletterEmail.trim()) {
            setNewsletterStatus({
                type: 'error',
                message: 'Veuillez entrer une adresse email valide.'
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
                    message: response.data.message || 'Merci! Vous êtes maintenant abonné à notre newsletter.'
                });
                setNewsletterEmail('');
                
                // Masquer le message après 5 secondes
                setTimeout(() => {
                    setNewsletterStatus({ type: '', message: '' });
                }, 5000);
            }
        } catch (error) {
            const errorMessage = error.response?.data?.message || 'Une erreur est survenue. Veuillez réessayer.';
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
                        <p>Le Club des Dirigeants des Associations Maroc (CDDAM) est la référence en matière de développement du secteur associatif marocain. Nous rassemblons les dirigeants visionnaires, catalysons l'innovation sociale, créons des opportunités de partenariats stratégiques et offrons un espace d'excellence où le leadership se nourrit de l'expérience partagée, de l'apprentissage continu et de la collaboration durable.</p>
                        <ul className="footer-links">
                            <li><a href="#">Conditions d'Utilisation</a></li>
                            <li><a href="#">Politique de confidentialité</a></li>
                            <li><a href="#">Mentions Légales</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Contact Info</h5>
                        <ul className="contact-list">
                            <li><i className="fas fa-map-marker-alt"></i> 45 Bd Bir Anzarane 1er étage N°1 - Maarif - Casablanca</li>
                            <li><i className="fas fa-phone"></i> +212 526 622 626</li>
                            <li><i className="fas fa-envelope"></i> contact.aiais@gmail.com</li>
                            <li><i className="fas fa-clock"></i> Lun - Ven : 8AM - 18PM</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Newsletter</h5>
                        <p>Restez au courant de nos dernières nouvelles.</p>
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
                                    placeholder="Votre email" 
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
                                            Envoi...
                                        </>
                                    ) : (
                                        'S\'abonner'
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-12 text-center">
                        <p>&copy; {new Date().getFullYear()} <img src="/images/logoblancnoir.png" alt="CDDAM" style={{height: '20px', verticalAlign: 'middle', margin: '0 5px'}} /> Club des Dirigeants des Associations Maroc - Tous Droits Réservés.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
