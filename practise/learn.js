/* setTimeout(() => {
    console.log("fuckkk");
}, 4000); */

/* function sum(a,b){
    console.log(a+b);
}

function calculator(a,b, sum){
    sum(a,b);
}

calculator(1,2,(a,b)=>{
    console.log(a+b);
}); */

/* const hello=()=>{
    console.log("hello");
}
setTimeout(hello, 2000); */

/* callback hell  */

/* function getData(dataId,nextData){
    setTimeout(() => {
        console.log("data",dataId);
        if(nextData){
            nextData();
        }
    }, 2000);
}

getData(1,()=>{
    getData(2,()=>{
        getData(3);
    });
}); */

/* promises */

/* function getData(dataId,nextData){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log("data",dataId);
            resolve("success");
            if(nextData){
                nextData();
            }
        }, 5000);
    })
} */

/* const getPromise =() =>{
   return new Promise((resolve,reject)=>{
        console.log("I am a promise");
        resolve("success");
         //reject("error occured"); 
    });
} */

/* let promise= getPromise();
promise.then((res)=>{
    console.log("I got a one");
})
promise.catch((err)=>{
    console.log("I got an error");
}) */

/* let promise=new Promise((resolve,reject)=>{
    console.log("promise");
    reject("error occured");
}); */
/* 
function asyncFun1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data1");
      resolve("success1");
    }, 3000);
  });
}
function asyncFun2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data2");
      resolve("success2");
    }, 3000);
  });
}
function asyncFun3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data3");
      resolve("success3");
    }, 3000);
  });
}
function asyncFun4() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data4");
      resolve("success4");
    }, 3000);
  });
}

console.log("Fetching Data1....");
asyncFun1().then((res) => {
  console.log("Fetching Data2....");
  asyncFun2().then((res) => {
    console.log("Fetching Data3....");
  asyncFun3().then((res) =>{
    console.log("Fetching Data4....");
  asyncFun4().then((res) =>{

  });
  });
  });
}); */

/* async function */

//async function always returns a promise
/* async function hello(){
    console.log("Hello");
} */

/* function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Data");
            resolve("success");
        }, 2000);
    });
} 

async function hello(){
    await api();
} */

/* function getData(dataId,nextData){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log("data",dataId);
            resolve("success");
            if(nextData){
                nextData();
            }
        }, 5000);
    })
}

async function getAlldata(){
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
    await getData(5);
 }
//auto invoked IIFI
(function (dataId,nextData){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log("data",dataId);
            resolve("success");
            if(nextData){
                nextData();
            }
        }, 5000);
    })
})(); */



/* api */

/* let btn=document.querySelector(".btn");
let para=document.querySelector(".para");
const URL="https://cat-fact.herokuapp.com/facts";
let i=0;

const getFacts= async ()=>{
    let response= await fetch(URL);
    let data=await response.json();
    console.log(data);
    para.innerHTML=data[i].text;
    i++;
    if(i==5){
        i=0;
    }
    
} */

/* function getFacts(){
    fetch(URL).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data[0].text);
        para.innerHTML=data[0].text;

    })
} */
/* btn.addEventListener("click",getFacts); */

let students={
    name:"prasan",
    roll: 22,
    class: 4
}


    let x= JSON.stringify(students);
    let y=JSON.parse(x);

    console.log(y);


