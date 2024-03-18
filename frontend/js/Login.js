const formulario = document.getElementById("formulario");
const inputUser = document.getElementById("input_user");
const inputPassword = document.getElementById("input_password")

const msg = document.getElementById("message");
const iconUser = document.getElementById("icon_user");
const iconPassword = document.getElementById("icon_password")

formulario.addEventListener('submit', (event) =>{
    event.preventDefault();
    if( checkUsername() == false || checkPassword() == false){
        msg.style.visibility = "visible";
        inputUser.style.border = "1px solid #e9b425"
        inputPassword.style.border = "1px solid #e9b425"
    }else{
        logar();
    }
    
})
inputUser.addEventListener('focus', function() {
    inputUser.classList.remove("input_form");
    inputUser.classList.add("input_icon_user");
    iconUser.style.display = "none";
    
})
inputUser.addEventListener('blur', function(){
    if(checkUsername() == false){
        inputUser.classList.remove("input_icon_user");
        inputUser.classList.add("input_form");
        iconUser.style.display = "inline";
    }
})
inputPassword.addEventListener('focus', function() {
    inputPassword.classList.remove("input_form");
    inputPassword.classList.add("input_icon_password");
    iconPassword.style.display = "none";
    
})
inputPassword.addEventListener('blur', function(){
    if(checkPassword() == false){
        inputPassword.classList.remove("input_icon_password");
        inputPassword.classList.add("input_form");
        iconPassword.style.display = "inline";
    }
})
function checkUsername(){
    const user = inputUser.value
    if(user == ""){
        return false
    }else{
        return true
    }
}
function checkPassword(){
    const password = inputPassword.value
    if(password == ""){
        return false
    }else{
        return true
    }
}

function logar(){
    const key = inputUser.value
    const password = inputPassword.value
    var user
    if(localStorage.getItem(key) === null){
        msg.style.visibility = "visible";
        inputUser.style.border = "1px solid #e9b425"
    }else{
        user = JSON.parse(localStorage.getItem(key));
        console.log(user.password)
        if(user.password === password){
            window.location.href = "../pages/Home.html?city="+encodeURIComponent(JSON.stringify(user.city));
            
        }else{
            msg.style.visibility = "visible";
            inputPassword.style.border = "1px solid #e9b425"
        }
    }
}
function mudarPage(){
    window.location.href = "../pages/Register.html";
}