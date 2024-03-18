const formulario = document.getElementById("formulario");
const fistname = document.getElementById("fistname");
const lastname = document.getElementById("lastname");
const birthdate = document.getElementById("birthdate");
const country = document.getElementById("country");
const city = document.getElementById("city");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

const msgErroFormulario = document.getElementById("erro_form");

formulario.addEventListener('submit',(event)=>{
    event.preventDefault();
    if(checkFormulario() == false){
        msgErroFormulario.innerHTML = "All form fields must be filled in"
        msgErroFormulario.style.visibility = "visible";
    }else
    if(checkPassword() == false){
        msgErroFormulario.innerHTML = "Different password"
        msgErroFormulario.style.visibility = "visible";
    }else
    if(checkSizePassword() == false){
        msgErroFormulario.innerHTML = "Password must be at least 8 characters long"
        msgErroFormulario.style.visibility = "visible";
    }else if(checkEmailSaved() == true){
        msgErroFormulario.innerHTML = "This email has already been registered"
        msgErroFormulario.style.visibility = "visible";

    } else{
        saveUser();
    }
})

function checkFormulario(){
    const fname = fistname.value;
    const lname = lastname.value;
    const date = birthdate.value;
    const ct = country.value;
    const cty = city.value;
    const e_mail = email.value;
    const pass = password.value;
    const pass2 = password2.value;
    if(fname == "" && lname == "" && date == "" && ct == "" && cty == "" && e_mail == "" && pass == "" && pass2 == ""){
        return false;
    } else {
        return true;
    }
}

function checkPassword(){
    const pass = password.value;
    const pass2 = password2.value;
    if(pass === pass2){
        return true;
    } else{
        return false;
    }
}
function checkSizePassword(){
    const pass = password.value;
    if(pass.length >= 8){
        return true;
    } else{
        return false;
    }
}
function checkEmailSaved(){
    const key = email.value;
    if(localStorage.getItem(key) === null){
        return false
    } else{
        return true
    }
}
function saveUser(){
    const fname = fistname.value;
    const lname = lastname.value;
    const date = birthdate.value;
    const ct = country.value;
    const cty = city.value;
    const e_mail = email.value;
    const pass = password.value;
    const pass2 = password2.value;

    const usuario = {"fistname": fname, "lastname": lname, "birthdate": date, "country": ct, "city": cty, "email": e_mail, "password": pass, "password2": pass2};
    const key = e_mail;
    localStorage.setItem(key, JSON.stringify(usuario));
    window.location.href = "../pages/Login.html";
}
