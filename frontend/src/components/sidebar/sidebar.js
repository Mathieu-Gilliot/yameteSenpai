import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import styles from '../../App.css'

class Sidebar extends React.Component {

  showSettings (event) {
    event.preventDefault();
 
  }

  render () {

    return (
      <Menu>
        <a id="home" className="menu-item" href="/">Accueil</a>
        <a id="connexion" className="menu-item" href="/connexion">Connexion</a>
        <a id="inscription" className="menu-item" href="/inscription">Inscription</a>
        <a id="contact" className="menu-item" href="/contact" >Nous contacter</a>
        <a id="formules" className="menu-item" href="/formules">Nos formules</a>
        <a id="etabli" className="menu-item" href="/etablissement">Notre etablissement</a>
        <a id="commande" className="menu-item" href="/commander">Prendre rendez-vous</a>

      </Menu>
    );
  }
}

export default Sidebar;