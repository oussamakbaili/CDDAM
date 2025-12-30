import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

function Contact() {
    const [searchParams] = useSearchParams();
    const membershipType = searchParams.get('type'); // 'expert' ou 'association'
    
    const getDefaultSubject = () => {
        if (membershipType === 'expert') {
            return "Demande d'adhésion - Expert Particulier / Acteur Dirigeants";
        } else if (membershipType === 'association') {
            return "Demande d'adhésion - Association";
        }
        return '';
    };

    const getDefaultMessage = () => {
        if (membershipType === 'expert') {
            return "Bonjour,\n\nJe souhaite rejoindre le CDDAM en tant qu'Expert Particulier / Acteur Dirigeants.\n\nPourriez-vous me fournir plus d'informations sur la formule sur mesure et les modalités d'adhésion ?\n\nCordialement.";
        } else if (membershipType === 'association') {
            return "Bonjour,\n\nJe représente une association et souhaite rejoindre le CDDAM.\n\nPourriez-vous me fournir plus d'informations sur les formules d'adhésion (Local, Régional, National) et me faire parvenir un devis personnalisé ?\n\nCordialement.";
        }
        return '';
    };

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: getDefaultSubject(),
        message: getDefaultMessage()
    });
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        // Mettre à jour le formulaire si le type change
        if (membershipType) {
            setFormData(prev => ({
                ...prev,
                subject: getDefaultSubject(),
                message: getDefaultMessage()
            }));
        }
    }, [membershipType]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess(false);

        try {
            const response = await axios.post('/api/contact', formData);
            setSuccess(true);
            setFormData({ name: '', email: '', subject: '', message: '' });
            // Masquer le message de succès après 5 secondes
            setTimeout(() => {
                setSuccess(false);
            }, 5000);
        } catch (err) {
            if (err.response && err.response.data && err.response.data.message) {
                setError(err.response.data.message);
            } else {
                setError('Une erreur est survenue. Veuillez réessayer.');
            }
        }
    };

    return (
        <>
            <section className="page-header py-5" style={{background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%)', color: 'white'}}>
                <div className="container text-center">
                    <h1 className="display-4">Contact</h1>
                    {membershipType && (
                        <p className="lead mt-3" style={{fontSize: '1.2rem'}}>
                            {membershipType === 'expert' 
                                ? "Formulaire de demande d'adhésion - Expert Particulier" 
                                : "Formulaire de demande d'adhésion - Association"}
                        </p>
                    )}
                </div>
            </section>

            <section className="py-5" style={{background: '#f8f9fa'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <div className="card h-100" style={{
                                border: 'none',
                                borderRadius: '10px',
                                boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                            }}>
                                <div className="card-body" style={{padding: '40px'}}>
                                    <h3 style={{color: 'var(--primary-color)', marginBottom: '30px', fontSize: '24px', fontWeight: 'bold'}}>Informations de contact</h3>
                                    <ul className="contact-list" style={{listStyle: 'none', padding: 0}}>
                                        <li style={{marginBottom: '20px', display: 'flex', alignItems: 'flex-start'}}>
                                            <i className="fas fa-map-marker-alt" style={{color: 'var(--primary-color)', marginRight: '15px', marginTop: '5px', fontSize: '18px'}}></i>
                                            <span style={{color: '#666', fontSize: '16px', lineHeight: '1.6'}}>45 Bd Bir Anzarane 1er étage N°1 - Maarif - Casablanca - Maroc</span>
                                        </li>
                                        <li style={{marginBottom: '20px', display: 'flex', alignItems: 'flex-start'}}>
                                            <i className="fas fa-phone" style={{color: 'var(--primary-color)', marginRight: '15px', marginTop: '5px', fontSize: '18px'}}></i>
                                            <span style={{color: '#666', fontSize: '16px', lineHeight: '1.6'}}>+212 526 622 626</span>
                                        </li>
                                        <li style={{marginBottom: '20px', display: 'flex', alignItems: 'flex-start'}}>
                                            <i className="fas fa-envelope" style={{color: 'var(--primary-color)', marginRight: '15px', marginTop: '5px', fontSize: '18px'}}></i>
                                            <span style={{color: '#666', fontSize: '16px', lineHeight: '1.6'}}>contact.aiais@gmail.com</span>
                                        </li>
                                        <li style={{marginBottom: '20px', display: 'flex', alignItems: 'flex-start'}}>
                                            <i className="fas fa-clock" style={{color: 'var(--primary-color)', marginRight: '15px', marginTop: '5px', fontSize: '18px'}}></i>
                                            <span style={{color: '#666', fontSize: '16px', lineHeight: '1.6'}}>Lun - Ven : 8AM - 18PM</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="card h-100" style={{
                                border: 'none',
                                borderRadius: '10px',
                                boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                            }}>
                                <div className="card-body" style={{padding: '40px'}}>
                                    <h3 style={{color: 'var(--primary-color)', marginBottom: '30px', fontSize: '24px', fontWeight: 'bold'}}>Envoyez-nous un message</h3>
                                    {success && (
                                        <div className="alert alert-success" style={{
                                            backgroundColor: '#d4edda',
                                            border: '1px solid #c3e6cb',
                                            color: '#155724',
                                            padding: '12px 20px',
                                            borderRadius: '5px',
                                            marginBottom: '20px'
                                        }}>
                                            <i className="fas fa-check-circle me-2"></i>
                                            Votre message a été envoyé avec succès!
                                        </div>
                                    )}
                                    {error && (
                                        <div className="alert alert-danger" style={{
                                            backgroundColor: '#f8d7da',
                                            border: '1px solid #f5c6cb',
                                            color: '#721c24',
                                            padding: '12px 20px',
                                            borderRadius: '5px',
                                            marginBottom: '20px'
                                        }}>
                                            <i className="fas fa-exclamation-circle me-2"></i>
                                            {error}
                                        </div>
                                    )}
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label htmlFor="name" className="form-label" style={{fontWeight: '500', marginBottom: '8px', color: '#333'}}>Nom</label>
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                id="name" 
                                                name="name" 
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                style={{
                                                    borderRadius: '5px',
                                                    border: '1px solid #ddd',
                                                    padding: '10px 15px',
                                                    fontSize: '16px'
                                                }}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label" style={{fontWeight: '500', marginBottom: '8px', color: '#333'}}>Email</label>
                                            <input 
                                                type="email" 
                                                className="form-control" 
                                                id="email" 
                                                name="email" 
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                style={{
                                                    borderRadius: '5px',
                                                    border: '1px solid #ddd',
                                                    padding: '10px 15px',
                                                    fontSize: '16px'
                                                }}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="subject" className="form-label" style={{fontWeight: '500', marginBottom: '8px', color: '#333'}}>Sujet</label>
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                id="subject" 
                                                name="subject" 
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                                style={{
                                                    borderRadius: '5px',
                                                    border: '1px solid #ddd',
                                                    padding: '10px 15px',
                                                    fontSize: '16px'
                                                }}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="message" className="form-label" style={{fontWeight: '500', marginBottom: '8px', color: '#333'}}>Message</label>
                                            <textarea 
                                                className="form-control" 
                                                id="message" 
                                                name="message" 
                                                rows="5" 
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                style={{
                                                    borderRadius: '5px',
                                                    border: '1px solid #ddd',
                                                    padding: '10px 15px',
                                                    fontSize: '16px',
                                                    resize: 'vertical'
                                                }}
                                            ></textarea>
                                        </div>
                                        <button 
                                            type="submit" 
                                            className="btn btn-primary"
                                            style={{
                                                backgroundColor: 'var(--primary-color)',
                                                border: 'none',
                                                borderRadius: '5px',
                                                padding: '12px 30px',
                                                fontSize: '16px',
                                                fontWeight: '500',
                                                color: 'white',
                                                cursor: 'pointer',
                                                transition: 'background-color 0.3s',
                                                width: '100%'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.backgroundColor = 'var(--primary-dark)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.backgroundColor = 'var(--primary-color)';
                                            }}
                                        >
                                            Envoyer
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;

