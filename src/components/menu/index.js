import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './menu.css';
// import ButtonLink from './buttonlink';
import Button from '../button';


function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="raulflix"/>
            </a>
            <Button as="a" className="ButtonLink" href="/">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;