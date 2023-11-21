let content=document.querySelectorAll(".content")
let button=document.querySelectorAll(".button")
let result=document.querySelectorAll(".result")

// content.forEach(element => {
//     console.log(element);
// });

let nam="T"

function firstName(a) {

    for (let i = 1; i < a.length; i++) {
        let c=a.charCodeAt(i)
        let first=a.charCodeAt(0)
        if(64<first&&first<93){

            if(96<c&&c<123){

            }else{
                return "Name Should contain only small letter excet first capital letter"
            }

        }else{
            return "First Letter must be capital"
        }
    }
    return "Valid Output"
}

function lastName(a) {
    if(a.length!=1){
        return "Last name should contains only 1 letter"
    }
    return "Valid Output"
}

function mobileNo(a) {
    if(a.length==10){
        return "Valid Phone No"
    }
    return "Invalid Phone No"
}

function mailId(a) {
    if(a.endsWith("@gmail.com")){
        return "Valid Mail Id"
    }
    return "Invalid  Mail Id"
}
function pass(a) {
        let cc=0;
        let lc=0;
        let nc=0;
        let sc=0;
        for (let i = 0; i < a.length; i++) {
            let c=a.charCodeAt(i)
            if((65<=c && c<=90)){
                cc++;
            }else if ((97<=c && c<=122)) {
                lc++;
                }else if((48<=c && c<=57)) {
                    nc++;
                    }else{
                        sc++;
                        }  
        }
        if (a.length<=8) {
            return "Password must contain min 8 character"
        }else if(cc<1){
            return "Password must contain min 1 uppercase"
        }else if(lc<1){
            return "Password must contain min 1 lowercase"
        }else if(nc<1){
            return "Password must contain min 1 number"
        }else if(sc<1){
            return "Password must contain min 1 Symbol"
        }else{
            return "Valid password"
        }
}

function check(a) {
    let confirm=content[4].value


    console.log(confirm);
    console.log(a);
    if(confirm==a){
        return "Password correct"
    }
    return "Incorrect Password"
}


button[1].addEventListener("click",(event)=>{
    event.preventDefault()
    result[0].innerHTML=firstName(content[0].value)
    result[1].innerHTML=lastName(content[1].value)
    result[2].innerHTML=mobileNo(content[2].value)
    result[3].innerHTML=mailId(content[3].value)
    result[4].innerHTML=pass(content[4].value)
    result[5].innerHTML=check(content[5].value)

})