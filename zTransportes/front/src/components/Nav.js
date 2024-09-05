import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/nav.css'

const Nav = (props) => {
    return (
        <nav>
            <div className="holder">
                <ul>
                    <li><NavLink to="/" className={({ isActive }) => isActive ? "activo" : ""}>Home</NavLink></li>
                    <li><NavLink to="/nosotros" className={({ isActive }) => isActive ? "activo" : ""}>Nosotros</NavLink></li>
                    <li><NavLink to="/novedades" className={({ isActive }) => isActive ? "activo" : ""}>Novedades</NavLink></li>
                    <li><NavLink to="/contacto" className={({ isActive }) => isActive ? "activo" : ""}>Contacto</NavLink></li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;