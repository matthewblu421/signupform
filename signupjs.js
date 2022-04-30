let check = function (){
    let passw = (document.getElementById('password'));
    let passwconfirm = (document.getElementById('confirmpassword'));
    if (passw.value != passwconfirm.value) {
        passw.classList.add("error");
        passwconfirm.classList.add("error");
        document.querySelector(".pwmatch").textContent = "* Passwords do not match";
    }
    if (passw.value === passwconfirm.value) {
        passw.classList.replace("error", "reginput");
        passwconfirm.classList.replace("error", "reginput");
        document.querySelector(".pwmatch").textContent = "";
    }    
}