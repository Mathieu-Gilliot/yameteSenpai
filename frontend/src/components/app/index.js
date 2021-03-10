
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Accueil from '../landing/landing';
import Inscription from '../inscription/inscription';
import Connexion from '../connexion/login';
import Contact from '../contact/contact';
import Formules from '../formules/formules';
import Etabli from '../etabli/etabli';
import Commande from '../commande/commande';
import Profil from '../profil/profil';



function App() {
  return (
    <Router>
    
      <Switch>

      <Route exact path="/" component={Accueil} />

      <Route path="/inscription" component={Inscription} />
      <Route path="/connexion" component={Connexion} />

      <Route path="/contact" component={Contact} />
      <Route path="/formules" component={Formules} />
      <Route path="/etablissement" component={Etabli} />
      <Route path="/commander" component={Commande} />

      <Route path="/profil" component={Profil} isPrivate />
     
  

      </Switch>
      
    </Router>

  );
}

export default App;
