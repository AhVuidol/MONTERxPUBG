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
    bgmusic.loop = true;
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
/* ========= DOWNLOAD POPUP ========= */

const downloadPopup = document.getElementById("downloadPopup");
const continueDownload = document.getElementById("continueDownload");
const cancelDownload = document.getElementById("cancelDownload");
const downloadTitle = document.querySelector(".download-version");
const downloadMessage = document.getElementById("downloadMessage");

let currentLink = "";

document.querySelectorAll(".install,.key,.ipa,.apk64,.apk32,.tipa").forEach(btn=>{

    btn.addEventListener("click",function(e){

        e.preventDefault();

        currentLink = this.href;

        if(this.classList.contains("install")){

            downloadTitle.innerHTML="LINK TRỰC TIẾP";

            downloadMessage.innerHTML=`
            Nếu Link Trực Tiếp Cài Lỗi<br><br>
            Hãy Cài Link iPA
            `;

        }

        if(this.classList.contains("key")){

            downloadTitle.innerHTML="LẤY KEY";

            downloadMessage.innerHTML=`
            Key Free 24h<br><br>
            Hết Key Cứ Quay Lại Web Lấy
            `;

        }

        if(this.classList.contains("ipa")){

            downloadTitle.innerHTML="LINK IPA";

            downloadMessage.innerHTML=`
            Cài Đúng iPA<br><br>
            Và Lấy Đúng Key Của Game
            `;

        }
if(this.classList.contains("apk64")){

    downloadTitle.innerHTML="APK 64BIT";

    downloadMessage.innerHTML=`
    Nếu Máy Không Hỗ Trợ 64Bit<br><br>
    Hãy Tải Thử 32Bit.
    `;

}

if(this.classList.contains("apk32")){

    downloadTitle.innerHTML="APK 32BIT";

    downloadMessage.innerHTML=`
    Nếu Máy Hỗ Trợ 64Bit<br><br>
    Khuyên Dùng Apk 64Bit<br><br>
    Nếu Chơi 32Bit Có Thể Bị Giật Lag
    `;

}

if(this.classList.contains("tipa")){

    downloadTitle.innerHTML="TIPA";

    downloadMessage.innerHTML=`
    Sau Khi Tải Xong<br><br>
    Hãy Cài Đặt Bằng TrollStore
    `;

}
        downloadPopup.style.display="flex";

    });

});

continueDownload.onclick=()=>{

    window.open(currentLink,"_blank");

    downloadPopup.style.display="none";

}

cancelDownload.onclick=()=>{

    downloadPopup.style.display="none";

}

downloadPopup.onclick=(e)=>{

    if(e.target===downloadPopup){

        downloadPopup.style.display="none";

    }

}
