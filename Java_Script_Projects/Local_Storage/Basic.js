let data=document.querySelectorAll(".data");
let button=document.querySelectorAll("#button button");
let input=document.querySelectorAll(".data input");

localStorage.setItem("tha","nesh")
let a=localStorage.getItem("th")
console.log(a);

button[0].addEventListener("click",()=>{
    localStorage.setItem(input[0].value,input[1].value)
})
button[1].addEventListener("click",()=>{
    input[1].value=localStorage.getItem(input[0].value)
})
button[2].addEventListener("click",()=>{
    localStorage.removeItem(input[0].value)
})
button[3].addEventListener("click",()=>{
    localStorage.clear()
})
