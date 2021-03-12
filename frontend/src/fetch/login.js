


const login = ()=>{
   const btn = document.querySelector('#btn_co');
   const myForm = document.querySelector('#form_co')
   myForm.addEventListener('keydown',(event)=>{
       if(event.keyCode == 13){
           event.preventDefault();
       }
   })
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
                'Content-type': 'application/json; charset=UTF-8'

            },
            body : JSON.stringify(user),
            mode : 'cors'
        };

        const reponse =  await fetch('http://localhost:3001', options);
        if(reponse){
            const data = await reponse.json();
            if(reponse.ok){
                sessionStorage.setItem('token',data.message.accessToken);
            }else{
                alert(data.message);
            }
        }else{
           alert('Oups! Le serveur ne répond pas')
        }


})
}
export default login