
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

    checkInputUsername();
});

function checkInputUsername(){
    const nomev = nome.value;

    if(namev === "" ){
        errorInput(nome, "Preencha o NOME!")
    }else{
        const formItem = nome.parentElement;
        formItem.classList = "form-content"
    }
}

function errorInput(input,message){
    const formItem = input.pareElement;
    const textMessage = formItem.querySelector("#erro")

    textMessage.innerText = message;

    formItem.className = "form-content error"
}