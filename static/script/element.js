
export const paragrafoTest = 'Oi elements.js';



const elements = {
    passwordInvisible : document.querySelector('passwor-strog p'),
    passwordVisible: document.querySelector('.password-visible'),
};
export default elements;

export function criarParagrafo(seletor){

    const paragrafoInfor = document.querySelector(seletor);

    if (paragrafoInfor){

        paragrafoInfor.remove();            
    
    }
    const novoParagrafo = document.createElement('p');
        
    return novoParagrafo;
    
};