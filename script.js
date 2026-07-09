const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");
const okPopup = document.getElementById("okPopup");

function closeWindow(){
    popup.style.display = "none";
}

closePopup.addEventListener("click", closeWindow);
okPopup.addEventListener("click", closeWindow);

// Ẩn popup 1 giờ
const hideBtn = document.querySelector(".hide-btn");

hideBtn.addEventListener("click", () => {

    localStorage.setItem(
        "hidePopupUntil",
        Date.now() + 60 * 60 * 1000
    );

    closeWindow();

});

const hideUntil = localStorage.getItem("hidePopupUntil");

if(hideUntil && Date.now() < Number(hideUntil)){
    popup.style.display = "none";
}

// Tìm kiếm
const search = document.getElementById("search");

search.addEventListener("keyup", function(){

    let value = this.value.toLowerCase();

    document.querySelectorAll(".item").forEach(item=>{

        if(item.innerText.toLowerCase().includes(value)){
            item.style.display="flex";
        }else{
            item.style.display="none";
        }

    });

});
