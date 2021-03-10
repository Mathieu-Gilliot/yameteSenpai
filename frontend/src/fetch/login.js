import { add } from "date-fns";


const login = ()=>{
   const btn = document.querySelector('#btn_co');

   btn.addEventListener('click', async(e) =>{
        e.preventDefault();

        const mail = document.querySelector('#mail');
        const password = document.querySelector('#password');

        const user = {
            email : mail.value,
            password : password.value
        };

        const options ={
            method : 'POST',
            headers : {
                'Content-type': 'application/json; charset=UTF-8',
                'Access-Control-Allow-Origin' : "http://localhost:3001"
            },
            body : JSON.stringify(user),
            mode : 'cors'  
        };

        const reponse =  await fetch('http://localhost:3001', options);

        console.log(reponse)

})
}
export default login