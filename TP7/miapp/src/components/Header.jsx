import React from 'react';
import { Link, useLocation } from 'react-router-dom';
export default function Header() {

    const location = useLocation();
    const getLinkStyle = (path) => ({

        color: location.pathname === path ? '#ffffff' : '#888888',
        textDecoration: 'none',
        fontSize: '0.85rem',
        fontWeight: '500',
        fontFamily: '"Inter", system-ui, sans-serif',
        transition: 'color 0.2s ease'

    });

    return (

        <nav style={{ backgroundColor: '#000000',padding: '0 40px',height: '65px',display: 'flex',justifyContent: 'space-between',alignItems: 'center',borderBottom: '1px solid #222'}}>
        <div style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight:'600', letterSpacing: '-0.5px', fontFamily: '"Inter", system-ui,sans-serif' }}>
        LENGUAJES.IV
        </div>

        <div style={{ display: 'flex', gap: '30px' }}>
            <Link to="/" style={getLinkStyle('/')}>Inicio</Link>
            <Link to="/acerca" style={getLinkStyle('/acerca')}>Acerca</Link>
            <Link to="/contacto" style={getLinkStyle('/contacto')}>Contacto</Link>
            <Link to="/proyecto" style={getLinkStyle('/proyecto')}>Proyecto Blob</Link>
        </div>
        </nav>

);

}