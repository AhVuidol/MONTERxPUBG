/*==========================
MONTERxPUBG
==========================*/

const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

closePopup.addEventListener("click", () => {

    popup.style.display = "none";

    localStorage.setItem("popupClosed", "true");

});

window.addEventListener("load", () => {

    if(localStorage.getItem("popupClosed") === "true"){

        popup.style.display = "none";

    }

});
/*==========================
BUTTON EFFECT
==========================*/

document.querySelectorAll(".buttons a").forEach(button=>{

button.addEventListener("click",()=>{

button.style.transform="scale(.96)";

setTimeout(()=>{

button.style.transform="scale(1)";

},120);

});

});
/*==========================
CARD EFFECT
==========================*/

document.querySelectorAll(".game-card").forEach(card=>{

card.addEventListener("click",()=>{

card.style.transition=".2s";

card.style.transform="translateY(-3px)";

setTimeout(()=>{

card.style.transform="translateY(0)";

},150);

});

});
/*==========================
SMOOTH
==========================*/

document.documentElement.style.scrollBehavior="smooth";
