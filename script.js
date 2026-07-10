/* =====================================================
   MONTERxPUBG — script.js
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ---------- LOADER ---------- */
  const loader = document.getElementById("loader");

  window.addEventListener("load", () => {
    if (loader) loader.style.display = "none";
  });

  /* ---------- POPUP + NHAC NEN ---------- */
  const popup = document.getElementById("popup");
  const popupX = document.getElementById("popupX");
  const closePopup = document.getElementById("closePopup");
  const hidePopup = document.getElementById("hidePopup");
  const bgmusic = document.getElementById("bgmusic");

  const HIDE_KEY = "monterxpubg_hidePopupUntil";

  function playMusic() {
    if (!bgmusic) return;
    bgmusic.volume = 0.35;
    bgmusic.play().catch(() => {
      /* trình duyệt chặn autoplay, sẽ phát khi người dùng tương tác */
    });
  }

  function enterSite() {
    if (popup) popup.style.display = "none";
    playMusic();
  }

  // Nếu popup đang trong thời gian bị ẩn thì bỏ qua
  const hideUntil = Number(localStorage.getItem(HIDE_KEY) || 0);
  if (popup && Date.now() < hideUntil) {
    popup.style.display = "none";
    playMusic();
  }

  if (closePopup) {
    closePopup.addEventListener("click", enterSite);
  }

  if (popupX) {
    popupX.addEventListener("click", enterSite);
  }

  if (hidePopup) {
    hidePopup.addEventListener("click", () => {
      localStorage.setItem(HIDE_KEY, Date.now() + 60 * 60 * 1000); // 1 giờ
      enterSite();
    });
  }

  /* ---------- BACK TO TOP ---------- */
  const backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (!backToTop) return;
    if (window.scrollY > 300) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  });

  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

});
