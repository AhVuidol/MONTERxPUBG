/* =====================================================
   MONTERxPUBG — script.js
===================================================== */
document.addEventListener("DOMContentLoaded", () => {
  /* ---------- LOADER ---------- */
  const loader = document.getElementById("loader");
  window.addEventListener("load", () => {
    if (loader) loader.style.display = "none";
  });

  /* ---------- POPUP + NHẠC NỀN ---------- */
  const popup      = document.getElementById("popup");
  const closePopup = document.getElementById("closePopup");
  const bgmusic     = document.getElementById("bgmusic");

  const POPUP_STORAGE_KEY = "monterxpubg_popup_last_closed";
  const POPUP_COOLDOWN_MS = 2 * 60 * 60 * 1000; // 2 giờ

  function getLastClosed() {
    try {
      const v = localStorage.getItem(POPUP_STORAGE_KEY);
      return v ? parseInt(v, 10) : null;
    } catch (e) {
      return null;
    }
  }

  function setLastClosed() {
    try {
      localStorage.setItem(POPUP_STORAGE_KEY, Date.now().toString());
    } catch (e) {
      /* localStorage không khả dụng, bỏ qua */
    }
  }

  function shouldShowPopup() {
    const last = getLastClosed();
    if (!last) return true;
    return Date.now() - last >= POPUP_COOLDOWN_MS;
  }

  function playMusic() {
    if (!bgmusic) return;
    bgmusic.volume = 0.35;
    bgmusic.play().catch(() => {
      /* trình duyệt chặn autoplay, sẽ phát khi người dùng tương tác */
    });
  }

  function showPopup() {
    if (!popup) return;
    popup.style.display = "flex";
    document.body.classList.add("no-scroll");
  }

  function hidePopup() {
    if (!popup) return;
    popup.style.display = "none";
    document.body.classList.remove("no-scroll");
  }

  function enterSite() {
    hidePopup();
    setLastClosed();
    playMusic();
  }

  if (popup) {
    if (shouldShowPopup()) {
      showPopup();
    } else {
      hidePopup();
      playMusic();
    }
  }

  if (closePopup) {
    closePopup.addEventListener("click", enterSite);
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
