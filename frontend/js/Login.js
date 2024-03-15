const inputUser = document.getElementById("input_user");
const inputPassword = document.getElementById("input_password")
const iconUser = document.getElementById("icon_user");
const iconPassword = document.getElementById("icon_password")
function mudarPage(){
    window.location.href = "../pages/Register.html";
}
inputUser.addEventListener('focus', function() {
    inputUser.classList.remove("input_form");
    inputUser.classList.add("input_icon_user");
    iconUser.style.display = "none";

})
inputUser.addEventListener('blur', function(){
    inputUser.classList.remove("input_icon_user");
    inputUser.classList.add("input_form");
    iconUser.style.display = "inline";
})
inputPassword.addEventListener('focus', function() {
    inputPassword.classList.remove("input_form");
    inputPassword.classList.add("input_icon_password");
    iconPassword.style.display = "none";

})
inputPassword.addEventListener('blur', function(){
    inputPassword.classList.remove("input_icon_password");
    inputPassword.classList.add("input_form");
    iconPassword.style.display = "inline";
})