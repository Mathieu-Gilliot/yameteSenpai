
import React from 'react' ;
import Sidebar from '../sidebar/sidebar';

import DatePickerExample  from '../calendar/calendar';

// import img from '../../images/mass1.jpg';
// import manu from '../../images/manu.jpeg';
// import bean from '../../images/bean.jpeg';
// import brigitte from '../../images/brigitte.jpeg';
// import clara from '../../images/clara.jpeg';
// import isabelle from '../../images/isabelle.jpeg';

const Commande = () => {      

   
return(

    <div>
        <Sidebar></Sidebar>

            <div className="box">
                <h1>Yamete Senpai</h1>
                
{/* FAUT-IL METTRE SOUS FORM OU PAS?  */}

                <h3>Vous souhaitez prendre rendez-vous ?</h3>
            <div className="input-commandes"> 
                <input type="checkbox" id="toggle" />
	            <label for="toggle">Chez nous</label>

                <input type="checkbox" id="toggle2" />
	            <label for="toggle2">Chez vous</label>
            </div>

                <h3>Pour le :</h3>
                <div className="calendar"> 
                <DatePickerExample></DatePickerExample>
                </div>

                <h3>Avec :</h3>
            <div className="input-commandes">
                <input type="checkbox" id="toggle3" />
	            <label for="toggle3">Manu</label>

                <input type="checkbox" id="toggle4" />
	            <label for="toggle4">Clara</label>

                <input type="checkbox" id="toggle5" />
	            <label for="toggle5">Bean</label>

                <input type="checkbox" id="toggle6" />
	            <label for="toggle6">Brigitte</label>

                <input type="checkbox" id="toggle7" />
	            <label for="toggle7">Isabelle</label>
            </div>

                <h3>Je choisis le soin que je souhaite :</h3>
            <div className="input-commandes">
                <input type="checkbox" id="toggle8" />
	            <label for="toggle8">Visage</label>

                <input type="checkbox" id="toggle10" />
	            <label for="toggle10">Thaï</label>

                <input type="checkbox" id="toggle10" />
	            <label for="toggle10">Oriental</label>

                <input type="checkbox" id="toggle11" />
	            <label for="toggle11">Shiatsu</label>
            </div>
.
            <div className="justepourlemargindefinquimetabasselesboules">
                <button type="">Annuler</button>
                <button type="">Je Valide</button>
            </div>



        </div>
    </div>
    
    )
    
}

export default Commande

