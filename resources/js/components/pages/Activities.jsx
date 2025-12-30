import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Activities() {
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
                    <h1 className="display-4 mb-3">Activités</h1>
                </div>
            </section>

            {/* Périmètres d'activités Section */}
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <h2 className="section-title mb-4">Le Club des Dirigeants – Association opère dans les périmètres suivants :</h2>
                            
                            <div className="perimeter-item mb-4">
                                <h3 className="mb-3" style={{color: 'var(--primary-color)', fontSize: '24px'}}>
                                    <i className="fas fa-flag me-2"></i>Made in Morocco
                                </h3>
                                <p>
                                    Nous soutenons et mettons en valeur les initiatives et les associations "Made in Morocco". Nous encourageons le développement et la promotion des projets associatifs locaux, contribuant ainsi à la croissance du secteur associatif et au développement social du pays.
                                </p>
                            </div>

                            <div className="perimeter-item mb-4">
                                <h3 className="mb-3" style={{color: 'var(--primary-color)', fontSize: '24px'}}>
                                    <i className="fas fa-map-marked-alt me-2"></i>Présence régionale, nationale et internationale
                                </h3>
                                <p>
                                    Nous avons une présence étendue à travers le Maroc, avec des représentations dans les douze régions du pays. Nous organisons des événements et des activités dans différentes villes afin de faciliter la participation de nos membres à travers tout le territoire national, tout en développant des connexions au niveau international.
                                </p>
                            </div>

                            <div className="perimeter-item mb-4">
                                <h3 className="mb-3" style={{color: 'var(--primary-color)', fontSize: '24px'}}>
                                    <i className="fas fa-building me-2"></i>Représentation de tous les secteurs d'activités
                                </h3>
                                <p>
                                    Notre communauté regroupe des dirigeants et des professionnels issus de divers secteurs d'activités associatives. Nous favorisons la diversité sectorielle afin de permettre des échanges et des collaborations inter-associatives enrichissantes. Quel que soit le domaine d'activité, nous offrons un espace propice à la mise en réseau et au partage d'expertises.
                                </p>
                            </div>

                            <div className="perimeter-conclusion mt-5 p-4" style={{background: 'rgba(0, 129, 164, 0.05)', borderRadius: '10px', borderLeft: '4px solid var(--primary-color)'}}>
                                <p className="mb-2">
                                    Nous sommes fiers de notre engagement à soutenir le secteur associatif marocain et à favoriser les connexions entre les dirigeants à l'échelle régionale, nationale et internationale. Notre présence étendue nous permet d'offrir des opportunités de partenariats et de collaborations dans divers secteurs, tout en contribuant au développement social et économique global.
                                </p>
                                <p className="mb-0">
                                    Le Club des Dirigeants – Association s'efforce de créer un écosystème dynamique où les associations marocaines prospèrent et où les dirigeants peuvent échanger, collaborer et se développer dans un contexte régional, national et international.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Activités détaillées Section */}
            <section className="py-5 bg-light">
                <div className="container">
                    <h2 className="section-title text-center mb-5">Activités du Club des Dirigeants – Association</h2>
                    
                    <div className="row">
                        {/* Cercles d'affaires */}
                        <div id="cercles" className="col-lg-6 mb-5">
                            <div className="activity-detail-card">
                                <div className="activity-icon-wrapper">
                                    <i className="fas fa-building"></i>
                                </div>
                                <h3 className="activity-title">Cercles d'affaires</h3>
                                <p>
                                    Les cercles d'affaires sont des rencontres régulières où les membres du Club des Dirigeants – Association, issus de différents secteurs d'activité, se réunissent pour renforcer leurs réseaux grâce à des recommandations d'affaires et des échanges stratégiques. Ces cercles offrent une plateforme propice à l'échange de contacts, de recommandations et de synergies entre les membres, favorisant ainsi le développement de leur réseau professionnel et la génération de nouvelles opportunités de collaboration inter-associative.
                                </p>
                            </div>
                        </div>

                        {/* Soirées de networking */}
                        <div id="networking" className="col-lg-6 mb-5">
                            <div className="activity-detail-card">
                                <div className="activity-icon-wrapper">
                                    <i className="fas fa-wine-glass"></i>
                                </div>
                                <h3 className="activity-title">Soirées mensuelles de networking</h3>
                                <p>
                                    Les soirées mensuelles de networking sont des événements clés du Club des Dirigeants – Association. Chaque mois, une thématique spécifique, en lien avec les préoccupations de nos membres, est abordée lors de ces soirées. Elles offrent une occasion unique aux dirigeants associatifs de se connecter, d'échanger des idées, de partager leurs expériences et de développer leur réseau professionnel. Les soirées de networking constituent un véritable catalyseur de synergies et de collaborations entre les membres du secteur associatif.
                                </p>
                            </div>
                        </div>

                        {/* Congrès */}
                        <div id="congres" className="col-lg-6 mb-5">
                            <div className="activity-detail-card">
                                <div className="activity-icon-wrapper">
                                    <i className="fas fa-calendar-alt"></i>
                                </div>
                                <h3 className="activity-title">Congrès thématiques</h3>
                                <p>
                                    Le Club des Dirigeants – Association organise régulièrement des congrès thématiques qui abordent des sujets d'actualité et d'intérêt pour la communauté des dirigeants associatifs. Ces congrès offrent l'opportunité d'approfondir des thématiques spécifiques, d'explorer de nouvelles tendances et d'acquérir des connaissances approfondies dans différents domaines du secteur associatif. Les congrès constituent des moments forts de partage d'expertise et de networking au sein du Club.
                                </p>
                            </div>
                        </div>

                        {/* Les assemblées */}
                        <div id="assemblees" className="col-lg-6 mb-5">
                            <div className="activity-detail-card">
                                <div className="activity-icon-wrapper">
                                    <i className="fas fa-users"></i>
                                </div>
                                <h3 className="activity-title">Les assemblées</h3>
                                <p>
                                    Les assemblées du Club des Dirigeants – Association sont des moments privilégiés de gouvernance et de prise de décision collective. Elles permettent aux membres de participer activement à la vie du Club, de discuter des orientations stratégiques, d'échanger sur les enjeux du secteur associatif et de contribuer au développement de la communauté. Ces assemblées renforcent la démocratie participative et la transparence au sein du Club.
                                </p>
                            </div>
                        </div>

                        {/* Événements */}
                        <div id="evenements" className="col-lg-6 mb-5">
                            <div className="activity-detail-card">
                                <div className="activity-icon-wrapper">
                                    <i className="fas fa-calendar-check"></i>
                                </div>
                                <h3 className="activity-title">Événements spéciaux</h3>
                                <p>
                                    En plus des activités régulières, le Club des Dirigeants – Association organise également des événements spéciaux tout au long de l'année. Ces événements peuvent inclure des déjeuners-débats, des dîners de gala, des voyages d'études, des rencontres informelles, des conférences spéciales ou des activités de renforcement d'équipe. Ces moments spéciaux offrent aux membres du Club des opportunités uniques de se connecter, de se divertir et de renforcer leurs relations professionnelles dans un cadre convivial et inspirant.
                                </p>
                            </div>
                        </div>

                        {/* Forums */}
                        <div id="forums" className="col-lg-6 mb-5">
                            <div className="activity-detail-card">
                                <div className="activity-icon-wrapper">
                                    <i className="fas fa-comments"></i>
                                </div>
                                <h3 className="activity-title">Forums</h3>
                                <p>
                                    Les forums du Club des Dirigeants – Association sont des espaces de dialogue et d'échange où les membres peuvent débattre de questions importantes liées au secteur associatif, partager leurs expériences et proposer des solutions innovantes aux défis sociaux. Ces forums favorisent le dialogue constructif, l'intelligence collective et la création de synergies pour répondre efficacement aux enjeux du développement social au Maroc.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="activities-conclusion mt-5 p-4" style={{background: 'var(--white)', borderRadius: '10px', boxShadow: '0 3px 15px rgba(0,0,0,0.1)'}}>
                        <p className="mb-0" style={{fontSize: '16px', lineHeight: '1.8', color: '#555'}}>
                            Ces activités variées du Club des Dirigeants – Association visent à favoriser l'échange d'expériences, le partage de connaissances, le renforcement du réseau professionnel et le développement des collaborations entre les dirigeants associatifs. Elles contribuent à créer un environnement dynamique et stimulant où les membres peuvent maximiser leurs opportunités de croissance, de développement et de réussite dans leur mission au service de la société.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-5">
                <div className="container text-center">
                    <h2 className="section-title mb-4">Rejoignez-nous et participez à nos activités</h2>
                    <p className="lead mb-4">Devenez membre du Club des Dirigeants – Association Maroc et bénéficiez d'un accès privilégié à toutes nos activités</p>
                    <Link to="/packs-adhesions" className="btn btn-primary btn-lg">REJOIGNEZ LE CDDAM</Link>
                </div>
            </section>
        </>
    );
}

export default Activities;
