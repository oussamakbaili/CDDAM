import React from 'react';

function AdminDashboard() {
    // Ces chiffres seront plus tard récupérés dynamiquement via l'API
    const fakeStats = {
        members: 6000,
        eventsPerYear: 60,
        partners: 100,
        activities: 6,
    };

    const shortcuts = [
        {
            icon: 'bolt',
            label: 'Gérer les activités',
            description: 'Mettre à jour les formations, networking, conférences, etc.',
            link: '/admin/activities',
        },
        {
            icon: 'comment-dots',
            label: 'Témoignages',
            description: 'Ajouter les retours d’expérience des membres.',
            link: '/admin/testimonials',
        },
        {
            icon: 'handshake',
            label: 'Partenaires',
            description: 'Mettre en avant vos partenaires stratégiques.',
            link: '/admin/partners',
        },
        {
            icon: 'chart-line',
            label: 'Chiffres clés',
            description: 'Actualiser les statistiques visibles sur la page d’accueil.',
            link: '/admin/stats',
        },
    ];

    return (
        <div className="container-fluid">
            {/* Hero */}
            <div className="admin-hero mb-4 p-4 p-md-5 rounded-3">
                <div className="row align-items-center">
                    <div className="col-lg-7 mb-3 mb-lg-0">
                        <h2 className="mb-3 text-white fw-bold">Bienvenue dans l&apos;interface d&apos;administration du CDDAM</h2>
                        <p className="text-white-50 mb-0">
                            Pilotez l&apos;ensemble du contenu du site : activités, témoignages, partenaires, chiffres clés et
                            pages. Tout est centralisé dans un espace moderne et sécurisé.
                        </p>
                    </div>
                    <div className="col-lg-5">
                        <div className="row g-3">
                            <div className="col-6">
                                <div className="admin-hero-stat text-center p-3 rounded">
                                    <div className="admin-hero-stat-label">Membres</div>
                                    <div className="admin-hero-stat-value">{fakeStats.members.toLocaleString()}+</div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="admin-hero-stat text-center p-3 rounded">
                                    <div className="admin-hero-stat-label">Événements / an</div>
                                    <div className="admin-hero-stat-value">{fakeStats.eventsPerYear}+</div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="admin-hero-stat text-center p-3 rounded">
                                    <div className="admin-hero-stat-label">Partenaires</div>
                                    <div className="admin-hero-stat-value">{fakeStats.partners}+</div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="admin-hero-stat text-center p-3 rounded">
                                    <div className="admin-hero-stat-label">Types d&apos;activités</div>
                                    <div className="admin-hero-stat-value">{fakeStats.activities}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Shortcuts */}
            <div className="row g-3 mb-4">
                {shortcuts.map((item) => (
                    <div key={item.label} className="col-md-6 col-xl-3">
                        <a href={item.link} className="text-decoration-none">
                            <div className="card admin-shortcut-card h-100 shadow-sm">
                                <div className="card-body d-flex align-items-start">
                                    <div className="admin-shortcut-icon me-3">
                                        <i className={`fas fa-${item.icon}`}></i>
                                    </div>
                                    <div>
                                        <h6 className="mb-1 text-dark">{item.label}</h6>
                                        <p className="small text-muted mb-0">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>

            {/* Info blocks */}
            <div className="row">
                <div className="col-lg-6 mb-3">
                    <div className="card shadow-sm h-100">
                        <div className="card-body">
                            <h5 className="card-title mb-3">Prochaines étapes</h5>
                            <ul className="mb-0">
                                <li>Connecter ce dashboard à l&apos;API Laravel et à la base de données (en cours).</li>
                                <li>Finaliser la gestion des activités (CRUD) dans l&apos;administration.</li>
                                <li>Ajouter la gestion des témoignages, partenaires et chiffres clés.</li>
                                <li>Sécuriser l&apos;accès via Laravel Sanctum et des rôles avancés si nécessaire.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 mb-3">
                    <div className="card shadow-sm h-100">
                        <div className="card-body">
                            <h5 className="card-title mb-3">Informations importantes</h5>
                            <p className="mb-2">
                                Pour activer l&apos;authentification réelle côté serveur, il faudra :
                            </p>
                            <ol className="mb-3">
                                <li>Configurer une base de données dans le fichier <code>.env</code>.</li>
                                <li>Exécuter les migrations Laravel (<code>php artisan migrate</code>).</li>
                                <li>Mettre en place les routes API admin avec Laravel Sanctum (déjà partiellement fait).</li>
                                <li>Relier ce front d&apos;administration aux endpoints API pour chaque module.</li>
                            </ol>
                            <p className="small text-muted mb-0">
                                Ce tableau de bord est conçu pour évoluer : nous pourrons y ajouter des graphiques,
                                des indicateurs temps réel et des notifications selon vos besoins.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;


