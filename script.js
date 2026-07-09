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
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 600);
});
/* ===========================
   SEARCH GAME
=========================== */

const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const keyword = this.value.toLowerCase();

        const cards = document.querySelectorAll(".game-card");

        cards.forEach(card => {

            const text = card.innerText.toLowerCase();

            if (text.includes(keyword)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}
/* ===========================
   BACK TO TOP
=========================== */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        backToTop.style.display = "block";

    } else {

        backToTop.style.display = "none";

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
window.addEventListener("scroll",()=>{

    const winScroll=
        document.documentElement.scrollTop;

    const height=
        document.documentElement.scrollHeight-
        document.documentElement.clientHeight;

    const scrolled=(winScroll/height)*100;

    document.getElementById("scrollBar").style.width=scrolled+"%";

});
const music=document.getElementById("bgMusic");

if(music){

music.volume=0.35;

music.play().catch(()=>{});

}
