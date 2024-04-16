let counter=document.querySelector(".counter");
let decrease=document.querySelector(".decrease");
let reset=document.querySelector(".reset");
let increase=document.querySelector(".increase");

let count=0;
increase.addEventListener("click",()=>{
    count++;
    counter.innerHTML=count;
    updateCounterColor();

});

decrease.addEventListener("click",()=>{
    count--;
    counter.innerHTML=count;
    updateCounterColor();

});
reset.addEventListener("click",()=>{
    count=0;
    counter.innerHTML=count;
    updateCounterColor();

});
function updateCounterColor(){
    if(count>0){
        counter.classList.add("green");
    }
    else if(count<0){
        counter.classList.add("red");
    }
    else{
        counter.classList.remove("green");
        counter.classList.remove("red");
    }

}
