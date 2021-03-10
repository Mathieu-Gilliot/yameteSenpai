import React from 'react' ;
import Sidebar from '../sidebar/sidebar';


const Profil = () => {      

    return(
        <div>
            <Sidebar></Sidebar>

            <div className="box">
                <h1>Yamete Senpai</h1>

                <div className="frame paragraphe">
                    <p> Prénom : <span></span></p>
                    <p> Nom : <span></span></p>
                    <p> Téléphone : <span></span></p>
                </div>
                
            </div>
        </div>
    
    )
    
}

export default Profil