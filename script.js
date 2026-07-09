/* ===================================
   MONTERxPUBG
=================================== */

const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");
const okPopup = document.getElementById("okPopup");
const hidePopup = document.getElementById("hidePopup");
const search = document.getElementById("search");

function closeWindow(){

    popup.style.opacity="0";

    setTimeout(()=>{

        popup.style.display="none";

    },250);

}

closePopup.addEventListener("click",closeWindow);

okPopup.addEventListener("click",closeWindow);

/* ==========================
ẨN 1 GIỜ
========================== */

hidePopup.addEventListener("click",()=>{

    const oneHour = Date.now()+3600000;

    localStorage.setItem("popupTime",oneHour);

    closeWindow();

});

const popupTime = localStorage.getItem("popupTime");

if(popupTime){

    if(Date.now()<Number(popupTime)){

        popup.style.display="none";

    }

}

/* ==========================
SEARCH
========================== */

const cards=document.querySelectorAll(".card");

search.addEventListener("input",()=>{

    const value=search.value.toLowerCase();

    cards.forEach(card=>{

        const text=card.innerText.toLowerCase();

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

        card.style.transform="scale(.98)";

        setTimeout(()=>{

            card.style.transform="scale(1)";

        },120);

    });

});

/* ==========================
HEADER SHADOW
========================== */

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>5){

        header.style.boxShadow="0 6px 20px rgba(0,0,0,.08)";

    }else{

        header.style.boxShadow="none";

    }

});

/* ==========================
SEARCH EFFECT
========================== */

search.addEventListener("focus",()=>{

    search.style.boxShadow="0 0 0 3px rgba(10,132,255,.12)";

});

search.addEventListener("blur",()=>{

    search.style.boxShadow="0 2px 10px rgba(0,0,0,.05)";

});

/* ==========================
FADE IN
========================== */

cards.forEach((card,index)=>{

    card.style.opacity="0";

    card.style.transform="translateY(18px)";

    setTimeout(()=>{

        card.style.transition=".35s";

        card.style.opacity="1";

        card.style.transform="translateY(0)";

    },index*70);

});

/* ==========================
IMAGE FALLBACK
========================== */

document.querySelectorAll("img").forEach(img=>{

    img.onerror=()=>{

        img.src="https://placehold.co/56x56/e5e5e5/666?text=MP";

    };

});
