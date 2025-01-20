        
const navbarPopUp = document.getElementById("navbar");
const clickableMainmenu = document.getElementById("main-menu-logo-filled");


clickableMainmenu.addEventListener("click" , navbarPopUpfun);
function navbarPopUpfun () {
    if (navbarPopUp.style.display === "block") {
        navbarPopUp.style.display = "none";
    }
    else {
        navbarPopUp.style.display = "block";
    }

}
