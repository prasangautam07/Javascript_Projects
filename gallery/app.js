img_container=document.querySelector(".img-container");
let full_imgsrc=document.querySelector(".fullimg img");
let images=document.querySelectorAll(".container img");
let black_screen=document.querySelector(".black-screen");
let one=document.querySelector(".one");

for(image of images){
    image.addEventListener("click",(event)=>{
        one.classList.add("hide");
        black_screen.classList.remove("hide");
        img_container.classList.remove("hide");
        let img_src=event.target.src;
        full_imgsrc.setAttribute("src",img_src);
    })
}

let cross=document.querySelector(".cross");
cross.addEventListener("click",()=>{
        img_container.classList.add("hide");
        one.classList.remove("hide");
        black_screen.classList.add("hide");
})