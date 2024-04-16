let dropdowns=document.querySelectorAll(".dropdown select");
let btn=document.querySelector(".btn");
let fromCurr=document.querySelector(".from select");
let toCurr=document.querySelector(".to select");
let msg=document.querySelector(".msg");


for (let select of dropdowns) {
    for(currCode in countryList){
        let newOption=document.createElement("option");
        newOption.innerText=currCode;
        newOption.value=currCode;
        if (select.name === "from" && currCode === "NPR") {
            newOption.selected = "selected";
          } else if (select.name === "to" && currCode === "USD") {
            newOption.selected = "selected";
          }
        select.append(newOption);
    }
     select.addEventListener("change", (evt) => {
        updateFlag(evt.target);

      }); 
} 
const updateExchangeRate= async ()=>{
    let amount=document.querySelector(".amount input");
    let amtVal=amount.value;
    if(amtVal===""|| amtVal<1){
        amount.value=1;
        amtVal=1;
    }
    const toURL=`https://v6.exchangerate-api.com/v6/68140cc268bdfab8ea7b8b05/latest/${fromCurr.value}`;
    let response=await fetch(toURL);
    let fromData=await response.json();
    let fromRate=fromData.conversion_rates[toCurr.value];
 
    let finalAmount = amtVal * fromRate;
  msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;

}

const updateFlag =(element)=>{
    console.log(element);
    let currCode=element.value;
    console.log(currCode);
    let countryCode=countryList[currCode];
    console.log(countryCode);
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let flag=element.parentElement.querySelector("img");
    flag.src=newSrc;
}
btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateExchangeRate();
  });
  
  window.addEventListener("load", () => {
    updateExchangeRate();
  });
