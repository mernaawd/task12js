var myName= document.getElementById("nAme");
var myage= document.getElementById("age");
var mymail= document.getElementById("mail");
var text=document.getElementsByClassName('txt')[0];
var text2=document.getElementsByClassName('txt2')[0];
var text3=document.getElementsByClassName('txt3')[0];
var tbody= document.getElementsByTagName("tbody")[0];
var form= document.getElementsByTagName("form")[0];
var submit=document.getElementById('btn');
////// decleration finished/////////////

/////////validation for name//////////////
function name_validation(event){
    console.log(myName.value);
    var myNv= myName.value;
    if (myNv==""){
        text.innerHTML="This field is required";
        event.preventDefault();
    }
    else if(isFinite(myNv)) {
        text.innerHTML="Please enter strings only";
        event.preventDefault();
    } else if (myNv.length<3){
        text.innerHTML="please enter valid name";
        event.preventDefault();
    } else{
        console.log(myNv);
        text.innerText=""
        return true;
    }
 }
/////////validation for age//////////////
 function number_validation(event){
    console.log(myage.value);
    var myAg= myage.value;
    if(isNaN(myAg) ){
        text2.innerHTML="Please enter numbers only";
        event.preventDefault();
  
    }else if(myAg==""){
        text2.innerHTML="This field is required";
        event.preventDefault();

    }
    else if (myAg<10 || myAg >60){
        text2.innerHTML="This age is not a valid age to use the form";
        event.preventDefault();

    }else{
        console.log(myAg);
        text2.innerText=""
        return true;
    }
}

/////////validation for mail//////////////
function mail_validation(event){
    console.log(mymail.value);
    var myMV=mymail.value;
    var mail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var mail_test=mail.test(myMV);

    if(myMV==""){
        text3.innerHTML="This field is required";
        event.preventDefault();
        }
    else if(mail_test==false){
        text3.innerHTML="please enter valid mail";
        event.preventDefault();
        }
    else{
      console.log(myMV);
      text3.innerText=""
      return true;
    }
}
///////////validation done//////////////


/////////execution function///////
function myform(event){ 
    validat1= name_validation(event);
    validat2=number_validation(event);
    validat3=mail_validation(event)
    if(validat1 && validat2 && validat3){
        displayInTable () 
        event.preventDefault()
    }
}
form.addEventListener("submit",myform);
// /  add data to table//////
function displayInTable() {
    var tr = document.createElement('tr');
    var td = document.createElement('td');
        td.innerText = myName.value;
        tr.appendChild(td);
    var td = document.createElement('td');
        td.innerText = myage.value;
        tr.appendChild(td);
    var td = document.createElement('td');
        td.innerText = mymail.value;
        tr.appendChild(td);
    tbody.appendChild(tr);
}
