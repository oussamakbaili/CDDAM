import React from 'react';

function AdminPages() {
    return (
        <div className="container-fluid">
            <div className="row mb-4">
                <div className="col-12">
                    <h2 className="mb-1">Contenu des Pages</h2>
                    <p className="text-muted mb-0">
                        Cette section permettra de gérer les textes et visuels des pages principales : Accueil, À propos,
                        Activités, Packs adhésions, MyCDDAM, Contact, etc. Objectif : un site 100% dynamique, sans modifier
                        le code.
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-5 mb-4">
                    <div className="card shadow-sm admin-form-card">
                        <div className="card-body">
                            <h5 className="card-title mb-3 text-primary">Prochainement : éditeur de contenu</h5>
                            <p className="text-muted">
                                Nous ajouterons un système de gestion de contenu (CMS) simplifié avec un éditeur de texte
                                riche pour chaque section : titres, sous-titres, paragraphes, boutons, etc.
                            </p>
                            <ul className="small text-muted mb-0">
                                <li>Contenu de la page d&apos;accueil (hero, sections, CTA)</li>
                                <li>Texte des pages À propos et Activités</li>
                                <li>Descriptifs des packs d&apos;adhésion</li>
                                <li>Contenu de MyCDDAM et Contact</li>
                                <li>Gestion multilingue possible à terme (FR / AR / EN)</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="card shadow-sm admin-list-card">
                        <div className="card-body">
                            <h5 className="card-title mb-3">Vue d&apos;ensemble des pages</h5>
                            <p className="text-muted">
                                Cette zone affichera la liste des pages avec un statut indiquant si le contenu est à jour.
                                Un clic sur une page ouvrira l&apos;éditeur correspondant.
                            </p>
                            <div className="alert alert-info mb-0">
                                Module en préparation : la structure de navigation est prête. Nous connecterons cette
                                interface à un modèle « pages » et à des API pour enregistrer les contenus.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminPages;


