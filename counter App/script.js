const countValue=document.querySelector("#counter");
let dec=()=>{
    let value=parseInt(countValue.innerText);
    value-=1;
    countValue.innerText=value;
};
let inc=function fn(){
    let value=parseInt(countValue.innerText);
    value+=1;
    countValue.innerText=value;
};
// const content=document.querySelector("#incre");
// content.addEventListener('click',()=>{
//     let value=parseInt(countValue.innerText);
//     value+=1;
//     countValue.innerText=value;
// })
let reSet=()=>{
    let value=0;
    countValue.innerText=value;
}