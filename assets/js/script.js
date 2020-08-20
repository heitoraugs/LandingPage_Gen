
let nome = document.querySelector('#nome')
let email = document.querySelector('#email'); 
let assunto = document.querySelector('#textoGen');
let nomeVld = false
let emailVld= false 
let txtVld= false

function validaNome(){
    let txt = document.querySelector('#txtNome')
    if(nome.value.length < 3){ 
        txt.innerHTML = 'Nome Inválido'
        txt.style.color = 'red'
    }else{
        txt.innerHTML = 'Nome válido'
        txt.style.color = 'green'
        nomeVld=true
    }
}
function validaEmail(){
    let txt = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){ 
        txtEmail.innerHTML = 'Email inválido' 
        txt.style.color = 'red'
    }else{
        txt.innerHTML ='Email válido'
        txt.style.color='green'
        emailVld=true
    }
}
function validaTexto(){
    let txt = document.querySelector('#txtTextoGen')

    if(assunto.value.length >=100){
        txtTexto.innerHTML ='Limite de carácteres ultrapassado'
        txt.style.color ='red'
        txtAssunto.style.display='block'
    }else{
        txtAssunto.style.display='none'
        txtVld=true
    }
}
function enviar(){
    if(nomeVld == true && emailVld==true && assuntoVld==true){
        alert('Formulário enviado com sucesso!')
    }else{
        alert('Preencha todos os campos do formulário!')
    }
}
