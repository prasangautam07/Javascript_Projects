let menu =document.querySelector(".menu-list");
let cross_btn=document.querySelector(".cross");
let menu_bar=document.querySelector(".menu-icon");
    
cross_btn.addEventListener("click",()=>{
        menu.classList.add("hide");

})

menu_bar.addEventListener("click",()=>{
    menu.classList.toggle("hide");
})