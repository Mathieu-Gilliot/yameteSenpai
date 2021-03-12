
const loggedIn = async () => {

    const token = await sessionStorage.getItem('token');
    const options = {
        mode: "cors",
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Authorization': `bearer ${token} `
        }
    }
    const reponse = await fetch('http://localhost:3001/user');
    if(reponse.status == 401){
        alert('Vous devez être connecté pour pouvoir accéder à cette page');
        setTimeout(()=>{
            window.location.href = '/connexion';
        },6000)
    }else if(reponse.ok){
        const data = reponse.json();
        return data.message;
    }else{
        alert('Une erreur est survenue');
    }
}



export default loggedIn;