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
                                    Gouvernance transparente et participative
                                </h2>
                                <p className="lead mb-4">
                                    Les assemblées du CDDAM sont des moments privilégiés de gouvernance démocratique où chaque membre a la parole et participe activement à la vie et au développement du Club. Ces instances de décision collective garantissent la transparence, la représentativité et l'engagement de tous.
                                </p>
                                <p>
                                    À travers nos assemblées générales ordinaires et extraordinaires, nous créons un espace de dialogue constructif où les orientations stratégiques sont définies, les décisions importantes sont prises collectivement, et où chaque voix compte dans la construction de l'avenir du CDDAM.
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
                                    <h3 className="mb-3">Démocratie participative</h3>
                                    <p className="mb-0">
                                        Un système de gouvernance où chaque membre peut exprimer son opinion, proposer des initiatives et participer aux décisions qui façonnent l'avenir du CDDAM.
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
                    <h2 className="section-title text-center mb-5">Types d'assemblées</h2>
                    
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
                                        <h3 className="mb-3">Assemblée Générale Ordinaire (AGO)</h3>
                                        <p className="mb-3">
                                            L'Assemblée Générale Ordinaire se tient annuellement et constitue le moment clé de la vie du CDDAM. Elle permet de :
                                        </p>
                                        <ul style={{listStyle: 'none', padding: 0}}>
                                            <li className="mb-2">
                                                <i className="fas fa-check-circle me-2" style={{color: 'var(--primary-color)'}}></i>
                                                Approuver les rapports d'activité et financier de l'exercice écoulé
                                            </li>
                                            <li className="mb-2">
                                                <i className="fas fa-check-circle me-2" style={{color: 'var(--primary-color)'}}></i>
                                                Définir les orientations stratégiques pour l'année à venir
                                            </li>
                                            <li className="mb-2">
                                                <i className="fas fa-check-circle me-2" style={{color: 'var(--primary-color)'}}></i>
                                                Élire ou renouveler les membres du Bureau Exécutif
                                            </li>
                                            <li className="mb-2">
                                                <i className="fas fa-check-circle me-2" style={{color: 'var(--primary-color)'}}></i>
                                                Adopter le budget prévisionnel
                                            </li>
                                            <li>
                                                <i className="fas fa-check-circle me-2" style={{color: 'var(--primary-color)'}}></i>
                                                Décider sur toute question à l'ordre du jour
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
                                        <h3 className="mb-3">Assemblée Générale Extraordinaire (AGE)</h3>
                                        <p className="mb-3">
                                            L'Assemblée Générale Extraordinaire peut être convoquée à tout moment pour traiter des questions urgentes ou importantes, notamment :
                                        </p>
                                        <ul style={{listStyle: 'none', padding: 0}}>
                                            <li className="mb-2">
                                                <i className="fas fa-check-circle me-2" style={{color: 'var(--primary-color)'}}></i>
                                                Modification des statuts du CDDAM
                                            </li>
                                            <li className="mb-2">
                                                <i className="fas fa-check-circle me-2" style={{color: 'var(--primary-color)'}}></i>
                                                Décisions stratégiques majeures
                                            </li>
                                            <li className="mb-2">
                                                <i className="fas fa-check-circle me-2" style={{color: 'var(--primary-color)'}}></i>
                                                Questions urgentes nécessitant l'approbation de l'assemblée
                                            </li>
                                            <li>
                                                <i className="fas fa-check-circle me-2" style={{color: 'var(--primary-color)'}}></i>
                                                Dissolution ou fusion (si applicable)
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
                    <h2 className="section-title text-center mb-5">Le processus démocratique</h2>
                    
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
                                            <h4 className="mb-2">Convocation</h4>
                                            <p className="mb-0">
                                                Tous les membres sont convoqués par écrit au moins 15 jours avant la date de l'assemblée, avec l'ordre du jour détaillé et tous les documents nécessaires pour prendre des décisions éclairées.
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
                                            <h4 className="mb-2">Présentation et débat</h4>
                                            <p className="mb-0">
                                                Le Bureau Exécutif présente les rapports, les projets et les propositions. Chaque membre a l'opportunité de poser des questions, d'exprimer son avis et de proposer des amendements dans un esprit de dialogue constructif.
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
                                            <h4 className="mb-2">Vote et décision</h4>
                                            <p className="mb-0">
                                                Les décisions sont prises à la majorité des voix des membres présents ou représentés. Chaque membre dispose d'une voix, garantissant ainsi l'égalité et la démocratie dans le processus décisionnel.
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
                                            <h4 className="mb-2">Suivi et transparence</h4>
                                            <p className="mb-0">
                                                Les décisions prises sont consignées dans un procès-verbal détaillé, communiqué à tous les membres. Un suivi régulier est assuré pour garantir la mise en œuvre effective des résolutions adoptées.
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
                    <h2 className="section-title text-center mb-5">Les valeurs de nos assemblées</h2>
                    
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-3">
                            <div className="value-card text-center p-4 h-100" style={{
                                background: 'var(--white)',
                                borderRadius: '10px',
                                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                                height: '100%'
                            }}>
                                <i className="fas fa-eye fa-3x mb-3" style={{color: 'var(--primary-color)'}}></i>
                                <h5 className="mb-3">Transparence</h5>
                                <p className="mb-0">
                                    Toutes les informations sont communiquées clairement et en amont pour permettre une participation éclairée de tous les membres.
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
                                <h5 className="mb-3">Représentativité</h5>
                                <p className="mb-0">
                                    Tous les membres, quelle que soit leur région ou leur secteur, ont une voix égale dans les décisions du CDDAM.
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
                                <h5 className="mb-3">Dialogue</h5>
                                <p className="mb-0">
                                    Un espace d'échange respectueux où chaque opinion est écoutée et où le débat constructif est encouragé.
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
                                <h5 className="mb-3">Engagement</h5>
                                <p className="mb-0">
                                    Chaque membre est encouragé à participer activement et à contribuer au développement et à la réussite du CDDAM.
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
                    <h2 className="section-title mb-4 text-white">Participez à la gouvernance du CDDAM</h2>
                    <p className="lead mb-4">
                        Votre voix compte ! Rejoignez-nous et participez activement aux décisions qui façonnent l'avenir du Club des Dirigeants – Association.
                    </p>
                    <div className="d-flex gap-3 justify-content-center flex-wrap">
                        <Link to="/packs-adhesions" className="btn btn-light btn-lg px-5">
                            <i className="fas fa-user-plus me-2"></i>
                            Devenir membre
                        </Link>
                        <Link to="/contact" className="btn btn-outline-light btn-lg px-5">
                            <i className="fas fa-envelope me-2"></i>
                            Nous contacter
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Assemblees;

