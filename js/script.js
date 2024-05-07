//for switching page on mobile view//
// if onscreen is on display is =0 display none//
//else display offscreen//
let id = (id) => document.getElementById(id);

let classes = (classes)=> document.getElementsByClassName(classes);



let  
    person =id("persons"),
     Plus = id("plus"),
     Minus = id("minus"),
     plus = id("Plus"),
    minus = id("Minus"),
     userName= id("name"),
     userName1= id("name1"),
     email = id("email"),
     form = id("form"),
     form2 = id("form2"),
    errorMsg1 = classes("error1"),
    color1 = classes("input-box"),
    paragraph = classes("p"),
    year = id("year"),
    day = id("day"),
    month = id("month"),
    dateColor = classes("date"),
    timeColor = classes("time"),
    Hours = id("hour"),
    option = id("select-box"),
    HtmlValidationBtn = id("HV"),
    javascriptValidationBtn = id("JV"),
    Minutes = id("minutes");


let countValue = 0 ;

console.log(Minus)

Minus.addEventListener("click" , () =>{
    countValue -=1;
    person.innerText = countValue ;
})

minus.addEventListener("click" , () =>{
    countValue -=1;
    person.innerText = countValue ;
})


Plus.addEventListener("click" , () =>{
    countValue ++ ;
    person.innerText = countValue ;
})

/*btN.addEventListener("click", function(){
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

})*/

/*form.addEventListener("submit", (e) =>{
    e.preventDefault();
    errorMsg1[0].innerHTML="This field is required";

})


let engine = () =>{

}*/


form2

form.addEventListener("submit",(e) =>{
    e.preventDefault();

   

    engine(userName, 0, "This field is required", 0, "red");
    engine(email, 1, "This field is required", 1, "red");
    engine2(day, 2, "This field is incomplete");
    engine2(month, 2, "This field is incomplete");
    engine2(year, 2, "This field is incomplete");
    engine3(Minutes, 3, "This field is incomplete");
    engine3(Hours, 3, "This field is incomplete");
})

let engine = ( id , serial,message, serial1,color) =>{
    if(id.value === "" ){
        errorMsg1[serial].innerHTML = message;
        errorMsg1[serial].style.marginLeft ="6%";
        color1[serial1].style.borderColor=color;
    }
    else{
        errorMsg1[serial].innerHTML ="";
        color1[serial1].style.borderColor="black";
        userName.value="";
        email.value="";
    }

}

let engine2 = ( id, serial,message,) =>{
    if(id.value === "" ){
        errorMsg1[serial].innerHTML = message;
        dateColor[0].style.borderColor="red";
        dateColor[1].style.borderColor="red";
        dateColor[2].style.borderColor="red";
        paragraph[0].style.color="red";
    }
    else{
        errorMsg1[serial].innerHTML ="";
        dateColor[0].style.borderColor="black";
        dateColor[1].style.borderColor="black";
        dateColor[2].style.borderColor="black";
        paragraph[0].style.color="black";
    }

}


let engine3 = ( id, serial,message) =>{
    if(id.value === "" ){
        errorMsg1[serial].innerHTML = message;
        timeColor[0].style.borderColor="red";
        timeColor[1].style.borderColor="red";
        timeColor[2].style.borderColor="red";
        paragraph[1].style.color="red";
    }
    else{
        errorMsg1[serial].innerHTML ="";
        timeColor[0].style.borderColor="black";
        timeColor[1].style.borderColor="black";
        timeColor[2].style.borderColor="black";
        paragraph[1].style.color="black";
    }

}






HtmlValidationBtn.addEventListener("click", ()=>{
    form2.style.display="block";
    form.style.display="none";

})

javascriptValidationBtn.addEventListener("click", ()=>{
    form2.style.display="none";
    form.style.display="block";
})
