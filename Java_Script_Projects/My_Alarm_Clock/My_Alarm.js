let displayclock=document.querySelector("#bar")
let input=document.querySelector("#input")
let set=document.querySelector("#set")
let clock=document.querySelector("#clock")
let img=document.querySelectorAll(".img")

let sethr;
let setmin;

set.addEventListener("click",()=>{
    let i=input.value
    var hr=i.split(":");
    sethr=hr[0]
    setmin=hr[1]
})

// .................................................................................................
function myalarm() {

    if (hours<=12) {
        let s=new SpeechSynthesisUtterance(`time is ${hours} ${min} AM` )
        
        console.log(min+" "+hours);
        speechSynthesis.speak(s)
    } else {
        let s=new SpeechSynthesisUtterance(`time is ${hours-12} ${min} PM`)
        console.log(min+" "+hours);
        speechSynthesis.speak(s)
    }
    
    
    let colour=setInterval(() => {
        clock.style.backgroundColor="rgb(29, 29, 29)"
        clock.style.color="white"
        input.style.color="white"

        img.forEach((ele)=>{
            ele.innerHTML=` <img src="./Alarm/Clock alarm.gif" alt="" height="100%" width="100%">`
        })

    }, 500);
    
    setTimeout(()=>{
        clearInterval(colour)
    },500)
    
}



function time() {
    let date=new Date()

 let hours=date.getHours()
 let min=date.getMinutes()
 let sec=date.getSeconds()
 console.log(`${hours}:${min}:${sec}`);
 displayclock.innerText=`${hours}:${min}:${sec}`
 console.log(min==setmin && hours==sethr);

if (min==setmin && hours==sethr ){
   myalarm()
}else{
    img.forEach((ele)=>{
        ele.innerHTML=` <img src="" alt="" height="100%" width="100%">`
    })
}
}

setInterval(() => {
    time()
    clock.style.backgroundColor="rgb(255, 255, 255)"
    clock.style.color="black"
    input.style.color="black"
}, 1000);
