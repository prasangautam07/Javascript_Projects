let breakfast=document.querySelectorAll(".breakfast");
let lunch=document.querySelectorAll(".lunch");
let shakes=document.querySelectorAll(".shakes");
let dinner=document.querySelectorAll(".dinner");

let breakfast_btn=document.querySelector(".breakfast-btn");
let lunch_btn=document.querySelector(".lunch-btn");
let shakes_btn=document.querySelector(".shakes-btn");
let dinner_btn=document.querySelector(".dinner-btn");
let all_btn=document.querySelector(".all-btn");

breakfast_btn.addEventListener("click", ()=>{
    
    for(item of lunch){
        item.classList.add("hideitem");
    }
    for(item of shakes){
        item.classList.add("hideitem");
    }
    for(item of dinner){
        item.classList.add("hideitem");
    }
    for(item of breakfast){
        item.classList.remove("hideitem");
    }
});
lunch_btn.addEventListener("click", ()=>{
    for(item of breakfast){
        item.classList.add("hideitem");
    }
    for(item of shakes){
        item.classList.add("hideitem");
    }
    for(item of dinner){
        item.classList.add("hideitem");
    }
    for(item of lunch){
        item.classList.remove("hideitem");
    }
});
shakes_btn.addEventListener("click", ()=>{
    for(item of lunch){
        item.classList.add("hideitem");
    }
    for(item of breakfast){
        item.classList.add("hideitem");
    }
    for(item of dinner){
        item.classList.add("hideitem");
    }
    for(item of shakes){
        item.classList.remove("hideitem");
    }
});
dinner_btn.addEventListener("click", ()=>{
    for(item of lunch){
        item.classList.add("hideitem");
    }
    for(item of shakes){
        item.classList.add("hideitem");
    }
    for(item of breakfast){
        item.classList.add("hideitem");
    }
    for(item of dinner){
        item.classList.remove("hideitem");
    }
});
all_btn.addEventListener("click", ()=>{
    for(item of lunch){
        item.classList.remove("hideitem");
    }
    for(item of shakes){
        item.classList.remove("hideitem");
    }
    for(item of dinner){
        item.classList.remove("hideitem");
    }
    for(item of breakfast){
        item.classList.remove("hideitem");
    }
});