/* ==========================
   MONTERxPUBG V2
========================== */

const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");
const okPopup = document.getElementById("okPopup");
const hideBtn = document.querySelector(".hide-btn");
const search = document.getElementById("search");
const cards = document.querySelectorAll(".item");

/* ==========================
   POPUP
========================== */

function hidePopup(){
    popup.style.opacity = "0";

    setTimeout(()=>{
        popup.style.display = "none";
    },250);
}

closePopup.addEventListener("click",hidePopup);
okPopup.addEventListener("click",hidePopup);

/* ==========================
   ẨN 1 GIỜ
========================== */

hideBtn.addEventListener("click",()=>{

    const oneHour = Date.now() + (60*60*1000);

    localStorage.setItem(
        "popupHideUntil",
        oneHour
    );

    hidePopup();

});

const popupTime = localStorage.getItem("popupHideUntil");

if(popupTime){

    if(Date.now() < Number(popupTime)){

        popup.style.display="none";

    }

}

/* ==========================
   SEARCH
========================== */

search.addEventListener("input",()=>{

    const value = search.value.toLowerCase();

    cards.forEach(card=>{

        const text = card.innerText.toLowerCase();

        if(text.includes(value)){

            card.style.display="flex";

        }else{

            card.style.display="none";

        }

    });

});

/* ==========================
   CARD EFFECT
========================== */

cards.forEach(card=>{

    card.addEventListener("click",()=>{

        card.style.transform="scale(.97)";

        setTimeout(()=>{

            card.style.transform="scale(1)";

        },120);

    });

});

/* ==========================
   LOADING
========================== */

window.addEventListener("load",()=>{

    document.body.style.opacity="0";

    setTimeout(()=>{

        document.body.style.transition=".4s";

        document.body.style.opacity="1";

    },80);

});

/* ==========================
   HEADER SHADOW
========================== */

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>10){

        header.style.boxShadow="0 8px 20px rgba(0,0,0,.08)";

    }else{

        header.style.boxShadow="none";

    }

});

/* ==========================
   SEARCH FOCUS
========================== */

search.addEventListener("focus",()=>{

    search.parentElement.style.transform="scale(1.01)";

});

search.addEventListener("blur",()=>{

    search.parentElement.style.transform="scale(1)";

});

/* ==========================
   FADE CARD
========================== */

cards.forEach((card,index)=>{

    card.style.opacity="0";

    card.style.transform="translateY(20px)";

    setTimeout(()=>{

        card.style.transition=".35s";

        card.style.opacity="1";

        card.style.transform="translateY(0)";

    },index*80);

});
