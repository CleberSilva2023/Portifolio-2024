
let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

//FORMULÁRIO
const form = document.getElementById("formulario");
const nome = document.getElementById("nome");
const email = document.getElementById("e-mail");
const celular = document.getElementById("celular");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    alert("FROMULÁRIO ENVIADO COM SUCESSO!")
});

function checkInputUsername(){
    const nomev = nome.value;

    if(namev === "" ){
        errorInput(nome, "Preencha o NOME!")
    }else{
        const formItem = nome.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputEmail(){
    const emailValue = email.value;

    if(emailValue === ""){
        errorInput(email, "O e-mail é obrigatório!")
    }else{
        const formItem = email.parentElement;
        formItem.className = "form-content"
    }
}

function ckeckInputPassword() {
    const passwordValue = password.value; //NÃO EXISTE SENHA

    if(passwordValue === ""){
        errorInput(password, "A senha é obrigátorio.")
    }else if(passwordValue.leng < 8){
        errorInput(password, "A senha precisa ter no minimo 8 caracteres.")
    }else{
        const formItem = password.parentElement;
        formItem.className = "form-content"
    }
}

function checkForm() {
    checkInputUsername();
    checkInputEmail();
    ckeckInputPassword();

    const formItems = form.querySelector(".formulario")

    const isValid = [...formItems];

    console.log(isValid);
}

function errorInput(input,message){
    const formItem = input.pareElement;
    const textMessage = formItem.querySelector("a#erro")

    textMessage.innerText = message;

    formItem.className = "form-content error"
}


