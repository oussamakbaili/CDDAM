import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
    console.log('Layout component is rendering');
    
    return (
        <div className="app">
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default Layout;
