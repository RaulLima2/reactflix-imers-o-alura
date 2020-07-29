import React from 'react';
import Logo from '../../assets/img/Logo.png';
import {Link} from 'react-router-dom';
import './menu.css';
// import ButtonLink from './buttonlink';
import Button from '../button';


function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="raulflix"/>
            </Link>
            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;