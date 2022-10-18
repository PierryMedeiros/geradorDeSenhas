const sliderElement = document.querySelector("#slider");
const buttonElement = document.querySelector("#button");

const sizePassword = document.querySelector("#valor");
const password = document.querySelector("#password");

const containerPassword = document.querySelector("#container-password");

const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@";
let novaSenha;

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function() {
    sizePassword.innerHTML = this.value;
}

function generatePassword(){
    let pass = "";
    for(let i = 0; i < sliderElement.value; i++){
        pass += charset.charAt(Math.floor(Math.random() * charset.length))
    }

    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}

containerPassword.addEventListener('click', function(){
    alert(novaSenha);
    navigator.clipboard.writeText(novaSenha);
})

