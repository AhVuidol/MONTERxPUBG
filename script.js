/* ==========================================
   POPUP + NHẠC
========================================== */

const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");
const joinDiscord = document.getElementById("joinDiscord");
const bgmusic = document.getElementById("bgmusic");

function playMusic() {
    if (!bgmusic) return;

    bgmusic.volume = 0.35;

    bgmusic.play().catch(() => {});
}

// Ẩn popup nếu chưa hết 2 giờ
const hideUntil = localStorage.getItem("hidePopupUntil");

if (popup && hideUntil && Date.now() < Number(hideUntil)) {
    popup.style.display = "none";
}

// Nút Đóng
if (closePopup) {
    closePopup.addEventListener("click", () => {

        playMusic();

        popup.style.display = "none";

        localStorage.setItem(
            "hidePopupUntil",
            Date.now() + 2 * 60 * 60 * 1000
        );

    });
}

// Nút Discord
if (joinDiscord) {
    joinDiscord.addEventListener("click", () => {

        playMusic();

    });
}

// Bấm nền đen để đóng
if (popup) {

    popup.addEventListener("click", (e) => {

        if (e.target === popup) {

            popup.style.display = "none";

            localStorage.setItem(
                "hidePopupUntil",
                Date.now() + 2 * 60 * 60 * 1000
            );

        }

    });

}

/* ==========================================
   LOADER
========================================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader = document.getElementById("loader");

        if (loader) {

            loader.style.display = "none";

        }

    }, 600);

});

/* ==========================================
   SEARCH GAME
========================================== */

const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const keyword = this.value.toLowerCase();

        document.querySelectorAll(".game-card").forEach(card => {

            card.style.display = card.innerText.toLowerCase().includes(keyword)
                ? "block"
                : "none";

        });

    });

}

/* ==========================================
   BACK TO TOP
========================================== */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (!backToTop) return;

    if (window.scrollY > 300) {

        backToTop.style.display = "block";

    } else {

        backToTop.style.display = "none";

    }

});

if (backToTop) {

    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/* ==========================================
   THANH TIẾN TRÌNH CUỘN
========================================== */

window.addEventListener("scroll", () => {

    const scrollBar = document.getElementById("scrollBar");

    if (!scrollBar) return;

    const winScroll = document.documentElement.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const percent = (winScroll / height) * 100;

    scrollBar.style.width = percent + "%";

});
