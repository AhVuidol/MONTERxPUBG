/*==========================
POPUP 2 GIỜ
==========================*/

const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

// Kiểm tra thời gian
const hideUntil = localStorage.getItem("hidePopupUntil");

if (hideUntil && Date.now() < Number(hideUntil)) {
    popup.style.display = "none";
}

// Đóng popup trong 2 giờ
closePopup.addEventListener("click", () => {

    popup.style.display = "none";

    const twoHours = Date.now() + (2 * 60 * 60 * 1000);

    localStorage.setItem("hidePopupUntil", twoHours);

});

// Bấm ra ngoài để đóng trong 2 giờ
popup.addEventListener("click", (e) => {

    if (e.target === popup) {

        popup.style.display = "none";

        const twoHours = Date.now() + (2 * 60 * 60 * 1000);

        localStorage.setItem("hidePopupUntil", twoHours);

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
