import React from 'react';

function AdminStats() {
    return (
        <div className="container-fluid">
            <div className="row mb-4">
                <div className="col-12">
                    <h2 className="mb-1">Chiffres Clés & Statistiques</h2>
                    <p className="text-muted mb-0">
                        Gérez ici les chiffres clés affichés sur la page d&apos;accueil (membres, régions, pays,
                        partenariats, événements, plateformes digitales, etc.) afin qu&apos;ils reflètent la réalité de votre
                        réseau.
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-5 mb-4">
                    <div className="card shadow-sm admin-form-card">
                        <div className="card-body">
                            <h5 className="card-title mb-3 text-primary">Prochainement : édition des chiffres clés</h5>
                            <p className="text-muted">
                                Le module permettra de modifier facilement chaque chiffre clé, avec un label, une valeur et
                                éventuellement une icône associée (membres, régions, pays, partenariats, etc.).
                            </p>
                            <ul className="small text-muted mb-0">
                                <li>Membres</li>
                                <li>Régions du Maroc</li>
                                <li>Pays</li>
                                <li>Partenariats</li>
                                <li>Cercles d&apos;affaires</li>
                                <li>Congrès internationaux</li>
                                <li>Soirées networking</li>
                                <li>Plateformes digitales</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="card shadow-sm admin-list-card">
                        <div className="card-body">
                            <h5 className="card-title mb-3">Aperçu du tableau des statistiques</h5>
                            <p className="text-muted">
                                Cette zone affichera un tableau listant tous les chiffres clés, avec la possibilité de les
                                réordonner et de les activer/désactiver. Vous pourrez ainsi adapter rapidement votre
                                communication en fonction de l&apos;évolution du réseau.
                            </p>
                            <div className="alert alert-info mb-0">
                                Module en préparation : la structure front-end est prête. Nous ajouterons bientôt le modèle
                                « stats », les migrations et les API pour une gestion en temps réel.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminStats;


