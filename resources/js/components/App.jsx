import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';
import Activities from './pages/Activities';
import NetworkingEvenings from './pages/NetworkingEvenings';
import Congres from './pages/Congres';
import Assemblees from './pages/Assemblees';
import Evenements from './pages/Evenements';
import Forums from './pages/Forums';
import Partners from './pages/Partners';
import Testimonials from './pages/Testimonials';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Membership from './pages/Membership';
import MyCDDA from './pages/MyCDD';
import Commissions from './pages/Commissions';
import PartnerDetail from './pages/PartnerDetail';
import AdminLogin from './admin/AdminLogin';
import AdminLayout from './admin/AdminLayout';
import { AdminAuthProvider } from './admin/AdminAuthContext';

function App() {
    console.log('App component is rendering');
    
    return (
        <AdminAuthProvider>
            <Routes>
                {/* Routes publiques avec le layout principal */}
                <Route
                    path="/*"
                    element={
                        <Layout>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/a-propos" element={<About />} />
                                <Route path="/activites" element={<Activities />} />
                                <Route path="/activites/networking" element={<NetworkingEvenings />} />
                                <Route path="/activites/congres" element={<Congres />} />
                                <Route path="/activites/assemblees" element={<Assemblees />} />
                                <Route path="/activites/evenements" element={<Evenements />} />
                                <Route path="/activites/forums" element={<Forums />} />
                                <Route path="/partenaires" element={<Partners />} />
                                <Route path="/temoignages" element={<Testimonials />} />
                                <Route path="/blog" element={<Blog />} />
                                <Route path="/contact" element={<Contact />} />
                                <Route path="/packs-adhesions" element={<Membership />} />
                                <Route path="/mycdda" element={<MyCDDA />} />
                                <Route path="/commissions" element={<Commissions />} />
                                <Route path="/partenaires/:slug" element={<PartnerDetail />} />
                            </Routes>
                        </Layout>
                    }
                />

                {/* Auth admin + dashboard */}
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/admin/*" element={<AdminLayout />} />
            </Routes>
        </AdminAuthProvider>
    );
}

export default App;
