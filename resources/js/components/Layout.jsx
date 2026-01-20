import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Chatbot from './Chatbot';

function Layout({ children }) {
    console.log('Layout component is rendering');
    
    return (
        <div className="app">
            <Header />
            <main>
                {children}
            </main>
            <Footer />
            <Chatbot />
        </div>
    );
}

export default Layout;
