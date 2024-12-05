
import {criarParagrafo, notSubmit} from "./element.js";



// ======================== Dinâmica para apresentação das validações ================================

const userErro = document.querySelector('.user-erro');
const password2Erro = document.querySelector('.password2-erro');
const inputUsername = document.querySelector('.input-user');
const inputpassWord1 = document.querySelector('#id_password1');
const inputPassWord2 = document.querySelector('#id_password2');
const  containerInput = document.querySelectorAll('#id_password1,#id_password2');
const button = document.querySelector('.btn-log');

const password = inputpassWord1.value;
const passwordLen = password.length; 
const weak = document.querySelector('.weak');
const medium = document.querySelector('.medium');
const strong = document.querySelector('.strong');
const containerMessage = document.querySelector('.password-strong');
const paragrafoInfor = document.querySelector('.password-strong p');
const containerCircle = document.querySelector('.strength-password');
const password2 = document.querySelector('.password2');
const passwordInvisible = document.querySelector('.password-invisible');
const passwordVisible = document.querySelector('.password-visible');



document.querySelector('.btn-log').addEventListener('click',() => {

    userErro.style.display = 'block'

    password2Erro.style.display = 'block';
    
});


document.querySelector('.user-input').addEventListener('click',() => {

    userErro.style.display = 'none';

});


containerInput.forEach( input => {
    input.addEventListener('click', () => {

        password2Erro.style.display = 'none';
       
    });
});


// ======================== Dinâmica de força de senha =========================

document.addEventListener('DOMContentLoaded', () =>{   

    inputpassWord1.type = 'password';

    inputPassWord2.type = 'password';   

});

inputpassWord1.addEventListener('input', () => {
    
    const password = inputpassWord1.value;
    const passwordLen = password.length; 
    const weak = document.querySelector('.weak');
    const medium = document.querySelector('.medium');
    const strong = document.querySelector('.strong');
    const containerMessage = document.querySelector('.password-strong');
    const paragrafoInfor = document.querySelector('.password-strong p');
    const containerCircle = document.querySelector('.strength-password');
    const password2 = document.querySelector('.password2');
    const passwordInvisible = document.querySelector('.password-invisible');
    const button = document.querySelector('button[type="submit"]')
    

    const senhaWeak = '*Senha curta necessário o mínimo de 8 caracteres.';
    const senhaMedia = '*Implemente uma letra a sua senha para torna-la mais segura.';
    const senhaStrong = '*Senha forte.'


      // tornado visível o password     
      if (password) {
        passwordInvisible.style.display = 'block';
    }else{
        passwordInvisible.style.display = 'none';
    }  


    // removendo paragrafos existentes e criando um novo.
    const paragrafo = criarParagrafo('.password-strong p');   

    if (passwordLen == 0) {
        
        containerCircle.style.display = 'none';
        containerMessage.classList.remove('visible');

    }else if (passwordLen >= 1 && passwordLen < 8) {

        button.disabled = true;

        containerCircle. style.display = 'flex';        

        weak.style.color = 'red';

        medium.style.color = 'rgb(48, 44, 44)';

        strong.style.color = 'rgb(48, 44, 44)';

        containerMessage.classList.add('visible'); 

        containerMessage.style.color = 'red';
      
        paragrafo.textContent = senhaWeak;

         containerMessage.appendChild(paragrafo);  

        
       
    }else if (passwordLen >= 8 && ! /[a-z]/.test(password)){

        button.disabled = true;

        weak.style.color = 'rgb(19, 209, 5)';

        medium.style.color = 'rgb(19, 209, 5)';

        strong.style.color = 'rgb(48, 44, 44)';
          
        containerMessage.classList.add('visible');

        containerCircle. style.display = 'flex';
        
        containerMessage.style.color = 'rgb(27, 78, 12)';       

        paragrafo.textContent = senhaMedia;

        containerMessage.appendChild(paragrafo);
        

    } else if (passwordLen >= 8 && /[a-z]/.test(password)){

        button.disabled = false;

        containerCircle. style.display = 'flex';

        weak.style.color = 'rgb(19, 209, 5)';

        medium.style.color = 'rgb(19, 209, 5)';
        
        strong.style.color = 'rgb(19, 209, 5)';

        containerMessage.classList.add('visible');

        containerMessage.style.color = 'rgb(27, 78, 12)';  
        
        paragrafo.textContent = senhaStrong;

        containerMessage.appendChild(paragrafo);  
    }

});     

passwordInvisible.addEventListener('click', () =>{
    const seePassword = document.querySelectorAll('.password-visible, .password-invisible');
    
    seePassword.forEach(see => {
        if (see == passwordInvisible){

            passwordInvisible.style.display = 'none';

            passwordVisible.style.display = 'block';

            inputpassWord1.type = 'text';

        }else{
            passwordVisible.addEventListener('click', () => {

                passwordInvisible.style.display = 'block';

                passwordVisible.style.display = 'none';

                inputpassWord1.type = 'password';


            });
            
        }
    }
    );

   
}
);


// Retirando as valiações a submisão.
document.querySelector('.btn-log').addEventListener('click', (event) => {
    const tooltip = document.querySelectorAll('.tooltip');
    const tooltipP = document.querySelectorAll('.tooltip p');
    
   
    if (tooltipP) {
            tooltip.forEach((elemento) =>{
                elemento.style.display = 'none';
            });
        
    }; 
    
});


inputpassWord1.addEventListener('click', () => {
    if (password){
        
        passwordInvisible.style.display = 'block';
        
    }
})

