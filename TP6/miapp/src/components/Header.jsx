import React from 'react';
import './Header.css';


const Header = () => {

    const hola = () => {
        alert("Hola!");
        
    };

    return (
        <header>
            <h1>logo grupo</h1>
            <nav>
                <a href="#inicio">inicio</a>
                <a href="#">proyecto</a>
                <a href="#">acerca de nosotros</a>
            </nav>
            <button onClick={hola}>Saludar 1</button>
            <button onClick={hola}>Saludar 2</button>
        </header>
    
);

};

export default Header;