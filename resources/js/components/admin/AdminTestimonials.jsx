import React from 'react';

function AdminTestimonials() {
    return (
        <div className="container-fluid">
            <div className="row mb-4">
                <div className="col-12">
                    <h2 className="mb-1">Gestion des Témoignages</h2>
                    <p className="text-muted mb-0">
                        Bientôt, vous pourrez gérer ici tous les témoignages affichés sur la page d&apos;accueil du CDDAM :
                        ajout, modification, suppression et ordre d&apos;affichage.
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-5 mb-4">
                    <div className="card shadow-sm admin-form-card">
                        <div className="card-body">
                            <h5 className="card-title mb-3 text-primary">Prochainement : formulaire de témoignage</h5>
                            <p className="text-muted">
                                Le futur formulaire vous permettra de saisir le nom du membre, sa fonction, le contenu du
                                témoignage et la note (nombre d&apos;étoiles). Vous pourrez également choisir s&apos;il est
                                affiché ou non sur le site.
                            </p>
                            <ul className="small text-muted mb-0">
                                <li>Nom et fonction du membre</li>
                                <li>Texte du témoignage</li>
                                <li>Note (1 à 5 étoiles)</li>
                                <li>Ordre d&apos;affichage</li>
                                <li>Statut : actif / masqué</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="card shadow-sm admin-list-card">
                        <div className="card-body">
                            <h5 className="card-title mb-3">Aperçu de la liste des témoignages</h5>
                            <p className="text-muted">
                                Cette zone affichera prochainement la liste des témoignages, avec la possibilité de les
                                réordonner et de les filtrer par type de membre (Premium, VIP, etc.).
                            </p>
                            <div className="alert alert-info mb-0">
                                Module en préparation : la structure d&apos;admin est prête, il reste à connecter cette page
                                aux API et à la base de données.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminTestimonials;


