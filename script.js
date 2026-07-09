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
window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},600);

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
