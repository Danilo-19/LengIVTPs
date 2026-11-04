import React from 'react';

export const pageStyle = {
    backgroundColor: '#000000',
    color: '#ededed',
    minHeight: 'calc(100vh - 65px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: '"Inter", system-ui, sans-serif'
};

const contentStyle = {
    maxWidth: '600px',
    textAlign: 'center',
    padding: '0 30px'
};

const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: '700',
    letterSpacing: '-3px',
    marginBottom: '15px',
    color: '#ffffff'
};

const textStyle = {
    color: '#888888',
    fontSize: '1.05rem',
    lineHeight: '1.6'
};

export default function Inicio() {
    return (
        <div style={pageStyle}>
            <div style={contentStyle}>
                <h1 style={titleStyle}>Inicio</h1>
                <p style={textStyle}>
                Bienvenido. Navegá por las pestañas superiores para explorar
                el sistema.
                </p>
            </div>
        </div>
    );
}



