import React from 'react';

function AdminPartners() {
    return (
        <div className="container-fluid">
            <div className="row mb-4">
                <div className="col-12">
                    <h2 className="mb-1">Gestion des Partenaires</h2>
                    <p className="text-muted mb-0">
                        Administrez les partenaires affichés sur la page publique : catégories, logos, liens et ordre
                        d&apos;affichage. Valorisez vos collaborations stratégiques au sein du CDDAM.
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-5 mb-4">
                    <div className="card shadow-sm admin-form-card">
                        <div className="card-body">
                            <h5 className="card-title mb-3 text-primary">Prochainement : ajout de partenaires</h5>
                            <p className="text-muted">
                                Vous pourrez bientôt ajouter de nouveaux partenaires, définir leur catégorie, leur logo,
                                leur lien vers le site web et leur niveau de visibilité (Standard, Premium, VIP, etc.).
                            </p>
                            <ul className="small text-muted mb-0">
                                <li>Nom et catégorie du partenaire</li>
                                <li>Logo (upload d&apos;image)</li>
                                <li>Lien vers le site ou la page partenaire</li>
                                <li>Ordre d&apos;affichage sur la page publique</li>
                                <li>Activation / désactivation rapide</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="card shadow-sm admin-list-card">
                        <div className="card-body">
                            <h5 className="card-title mb-3">Aperçu du futur listing partenaires</h5>
                            <p className="text-muted">
                                Cette zone affichera un tableau des partenaires avec leurs logos, catégories et liens.
                                Vous pourrez filtrer par type de partenaire et réorganiser l&apos;ordre d&apos;affichage.
                            </p>
                            <div className="alert alert-info mb-0">
                                Module en préparation : la prochaine étape sera de connecter cette interface à la base de
                                données et aux API pour une gestion centralisée et dynamique de vos partenaires.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminPartners;


