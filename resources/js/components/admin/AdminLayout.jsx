import React from 'react';
import { Link, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useAdminAuth } from './AdminAuthContext';
import AdminDashboard from './AdminDashboard';
import AdminActivities from './AdminActivities';
import AdminTestimonials from './AdminTestimonials';
import AdminPartners from './AdminPartners';
import AdminStats from './AdminStats';
import AdminPages from './AdminPages';

function AdminLayout() {
    const { isAuthenticated, logout } = useAdminAuth();
    const location = useLocation();

    if (!isAuthenticated) {
        return <Navigate to="/admin/login" replace />;
    }

    return (
        <div className="admin-layout d-flex">
            <aside className="admin-sidebar d-flex flex-column p-3">
                <div className="admin-brand mb-4 text-center">
                    <div className="admin-logo mb-2">
                        <img
                            src="/images/logo.png"
                            alt="CDDAM Admin"
                            className="admin-logo-img"
                        />
                    </div>
                    <div>
                        <span className="admin-logo-title d-block">CDDAM Admin</span>
                        <div className="admin-logo-subtitle">Gestion du site</div>
                    </div>
                </div>
                <nav className="admin-nav flex-grow-1">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link
                                className={`nav-link admin-nav-link ${location.pathname === '/admin' ? 'active' : ''}`}
                                to="/admin"
                            >
                                <i className="fas fa-home me-2"></i>
                                Dashboard
                            </Link>
                        </li>
                        <li className="nav-item mt-3">
                            <div className="admin-nav-section-title text-uppercase">Contenus</div>
                            <Link
                                className={`nav-link admin-nav-link ${location.pathname.startsWith('/admin/activities') ? 'active' : ''}`}
                                to="/admin/activities"
                            >
                                <i className="fas fa-bolt me-2"></i>
                                Activités
                            </Link>
                            <Link
                                className={`nav-link admin-nav-link ${location.pathname.startsWith('/admin/testimonials') ? 'active' : ''}`}
                                to="/admin/testimonials"
                            >
                                <i className="fas fa-comment-dots me-2"></i>
                                Témoignages
                            </Link>
                            <Link
                                className={`nav-link admin-nav-link ${location.pathname.startsWith('/admin/partners') ? 'active' : ''}`}
                                to="/admin/partners"
                            >
                                <i className="fas fa-handshake me-2"></i>
                                Partenaires
                            </Link>
                            <Link
                                className={`nav-link admin-nav-link ${location.pathname.startsWith('/admin/stats') ? 'active' : ''}`}
                                to="/admin/stats"
                            >
                                <i className="fas fa-chart-line me-2"></i>
                                Chiffres clés
                            </Link>
                            <Link
                                className={`nav-link admin-nav-link ${location.pathname.startsWith('/admin/pages') ? 'active' : ''}`}
                                to="/admin/pages"
                            >
                                <i className="fas fa-file-alt me-2"></i>
                                Pages & contenus
                            </Link>
                        </li>
                    </ul>
                </nav>
                <button className="btn btn-secondary admin-logout-btn mt-3" onClick={logout}>
                    <i className="fas fa-sign-out-alt me-2"></i>Déconnexion
                </button>
            </aside>
            <main className="admin-main flex-grow-1 d-flex flex-column">
                <header className="admin-header d-flex justify-content-between align-items-center">
                    <div>
                        <h5 className="mb-0">Tableau de bord administrateur</h5>
                        <small className="text-muted">Pilotage global du site CDDAM</small>
                    </div>
                    <Link to="/" className="btn btn-outline-primary btn-sm">
                        <i className="fas fa-globe me-2"></i>Voir le site public
                    </Link>
                </header>
                <section className="admin-content flex-grow-1">
                    <Routes>
                        <Route index element={<AdminDashboard />} />
                        <Route path="activities" element={<AdminActivities />} />
                        <Route path="testimonials" element={<AdminTestimonials />} />
                        <Route path="partners" element={<AdminPartners />} />
                        <Route path="stats" element={<AdminStats />} />
                        <Route path="pages" element={<AdminPages />} />
                    </Routes>
                </section>
            </main>
        </div>
    );
}

export default AdminLayout;

