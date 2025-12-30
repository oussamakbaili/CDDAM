import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Membership() {
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
                    <h1 className="display-4">Packs Adhésions</h1>
                </div>
            </section>

            <section className="py-5">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-lg-8 mx-auto text-center">
                            <h2 className="section-title mb-4">Nos Formules d'Adhésion</h2>
                            <p className="lead">Choisissez la formule qui correspond le mieux à votre profil et bénéficiez d'avantages exclusifs pour développer votre impact et renforcer votre réseau au sein du CDDAM.</p>
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
                                    <h3 className="mb-2" style={{fontSize: '1.8rem', fontWeight: 'bold'}}>Expert Particulier</h3>
                                    <p className="mb-0" style={{opacity: 0.9, fontSize: '1.1rem'}}>Acteur Dirigeants</p>
                                </div>
                                <div className="card-body" style={{padding: '30px'}}>
                                    <div className="text-center mb-4">
                                        <h2 className="text-primary mb-2" style={{fontSize: '2.5rem', fontWeight: 'bold'}}>Sur mesure</h2>
                                        <p className="text-muted">Formule personnalisée</p>
                                    </div>
                                    <ul className="list-unstyled" style={{lineHeight: '2.2'}}>
                                        <li><i className="fas fa-check-circle text-success me-3" style={{fontSize: '1.2rem'}}></i> Accès complet à l'annuaire des membres</li>
                                        <li><i className="fas fa-check-circle text-success me-3" style={{fontSize: '1.2rem'}}></i> Invitations à tous les événements (publics et exclusifs)</li>
                                        <li><i className="fas fa-check-circle text-success me-3" style={{fontSize: '1.2rem'}}></i> Accès à la plateforme MyCDDAM</li>
                                        <li><i className="fas fa-check-circle text-success me-3" style={{fontSize: '1.2rem'}}></i> Formation et ateliers gratuits</li>
                                        <li><i className="fas fa-check-circle text-success me-3" style={{fontSize: '1.2rem'}}></i> Mentorat et accompagnement personnalisé</li>
                                        <li><i className="fas fa-check-circle text-success me-3" style={{fontSize: '1.2rem'}}></i> Opportunités de networking privilégiées</li>
                                        <li><i className="fas fa-check-circle text-success me-3" style={{fontSize: '1.2rem'}}></i> Accès aux ressources et outils exclusifs</li>
                                        <li><i className="fas fa-check-circle text-success me-3" style={{fontSize: '1.2rem'}}></i> Support dédié et conseil stratégique</li>
                                    </ul>
                                </div>
                                <div className="card-footer bg-transparent text-center" style={{padding: '25px', borderTop: '2px solid #f0f0f0'}}>
                                    <button 
                                        onClick={handleExpertClick}
                                        className="btn btn-primary btn-lg w-100" 
                                        style={{padding: '12px', fontSize: '1.1rem', fontWeight: 'bold', borderRadius: '8px', cursor: 'pointer'}}
                                    >
                                        <i className="fas fa-user-plus me-2"></i>Rejoindre en tant qu'Expert
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
                                    <h3 className="mb-2" style={{fontSize: '1.8rem', fontWeight: 'bold'}}>Association</h3>
                                    <p className="mb-0" style={{opacity: 0.9, fontSize: '1.1rem'}}>Local • Régional • National</p>
                                </div>
                                <div className="card-body" style={{padding: '30px'}}>
                                    <div className="text-center mb-4">
                                        <div className="d-flex justify-content-center gap-3 mb-3">
                                            <div className="text-center">
                                                <h4 className="text-secondary mb-1" style={{fontSize: '1.8rem', fontWeight: 'bold'}}>Local</h4>
                                                <p className="text-muted small mb-0">Sur devis</p>
                                            </div>
                                            <div className="text-center border-start border-end px-3">
                                                <h4 className="text-secondary mb-1" style={{fontSize: '1.8rem', fontWeight: 'bold'}}>Régional</h4>
                                                <p className="text-muted small mb-0">Sur devis</p>
                                            </div>
                                            <div className="text-center">
                                                <h4 className="text-secondary mb-1" style={{fontSize: '1.8rem', fontWeight: 'bold'}}>National</h4>
                                                <p className="text-muted small mb-0">Sur devis</p>
                                            </div>
                                        </div>
                                        <p className="text-muted">Formule adaptée selon le périmètre</p>
                                    </div>
                                    <ul className="list-unstyled" style={{lineHeight: '2.2'}}>
                                        <li><i className="fas fa-check-circle text-success me-3" style={{fontSize: '1.2rem'}}></i> Accès complet à l'annuaire des membres</li>
                                        <li><i className="fas fa-check-circle text-success me-3" style={{fontSize: '1.2rem'}}></i> Invitations à tous les événements</li>
                                        <li><i className="fas fa-check-circle text-success me-3" style={{fontSize: '1.2rem'}}></i> Accès à la plateforme MyCDDAM</li>
                                        <li><i className="fas fa-check-circle text-success me-3" style={{fontSize: '1.2rem'}}></i> Formation et ateliers pour votre équipe</li>
                                        <li><i className="fas fa-check-circle text-success me-3" style={{fontSize: '1.2rem'}}></i> Mise en avant dans l'annuaire</li>
                                        <li><i className="fas fa-check-circle text-success me-3" style={{fontSize: '1.2rem'}}></i> Opportunités de partenariats stratégiques</li>
                                        <li><i className="fas fa-check-circle text-success me-3" style={{fontSize: '1.2rem'}}></i> Accès aux cercles d'affaires</li>
                                        <li><i className="fas fa-check-circle text-success me-3" style={{fontSize: '1.2rem'}}></i> Support dédié et accompagnement personnalisé</li>
                                    </ul>
                                </div>
                                <div className="card-footer bg-transparent text-center" style={{padding: '25px', borderTop: '2px solid #f0f0f0'}}>
                                    <button 
                                        onClick={handleAssociationClick}
                                        className="btn btn-secondary btn-lg w-100" 
                                        style={{padding: '12px', fontSize: '1.1rem', fontWeight: 'bold', borderRadius: '8px', cursor: 'pointer'}}
                                    >
                                        <i className="fas fa-handshake me-2"></i>Rejoindre en tant qu'Association
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row mt-5">
                        <div className="col-lg-8 mx-auto">
                            <div className="alert alert-info text-center" style={{borderRadius: '10px', padding: '20px'}}>
                                <i className="fas fa-info-circle me-2" style={{fontSize: '1.2rem'}}></i>
                                <strong style={{fontSize: '1.1rem'}}>Besoin d'aide pour choisir ?</strong>
                                <p className="mb-0 mt-2">Contactez-nous pour discuter de la formule la plus adaptée à votre profil et obtenir un devis personnalisé.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Membership;

