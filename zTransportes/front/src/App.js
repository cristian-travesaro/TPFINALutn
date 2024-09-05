import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import NovedadesPage from './pages/NovedadesPage';
import ContactoPage from './pages/ContactoPage';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';

const App = () => {
    return (
        <Router>
            <Header />
            <Nav />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/nosotros" element={<NosotrosPage />} />
                <Route path="/novedades" element={<NovedadesPage />} />
                <Route path="/contacto" element={<ContactoPage />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
