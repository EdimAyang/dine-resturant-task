//for switching page on mobile view//
// if onscreen is on display is =0 display none//
//else display offscreen//

let btN = document.querySelector("#button")
let btN1 = document.querySelector("#button1")
let btN2 = document.querySelector("#button2")
let offScreen = document.querySelector("#offscreen1")
let onScreen = document.querySelector("#wrap")
let offBtn = document.getElementById("offbtn")
let offBtn1 = document.getElementById("offbtn1")
let person = document.getElementById("person")
const Plus = document.getElementById("plus")
const Minus = document.getElementById("minus")
let month = document.getElementById("month")
const text = document.getElementById("text")

let countValue = 0  




let display = 0

length = 0

btN.addEventListener("click", function(){
    if(display == 0){
        onScreen.style.display ="none";
        display == 0 ;

        offScreen.style.display ="block";
    }

})

    
btN1.addEventListener("click", function(){
    if(display == 0){
        onScreen.style.display ="none";
        display == 0 ;

        offScreen.style.display ="block";
    }

})

btN2.addEventListener("click", function(){
    if(display == 0){
        onScreen.style.display ="none";
        display == 0 ;

        offScreen.style.display ="block";
    }

})

offBtn.addEventListener("click", () =>{
    if(display == 0){
        onScreen.style.display ="block";
        display == 0 ;
        offScreen.style.display ="none";
    }
})


offBtn1.addEventListener("click", () =>{
    if(display == 0){
        onScreen.style.display ="block";
        display == 0 ;
        offScreen.style.display ="none";
    }
})

Plus.addEventListener("click" , () =>{
    countValue ++  ;
    persons.innerText = countValue ;
})

Minus.addEventListener("click" , () =>{
    countValue -=1 ;
    persons.innerText = countValue ;
})
