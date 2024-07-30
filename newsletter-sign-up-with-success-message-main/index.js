//calls
const form = document.getElementById("form");
const error_msg = document.getElementById("errmsg");
const button = document.querySelector(".btn");
const button_success = document.querySelector(".btns");
const success_card = document.getElementById("success-card");
const card = document.querySelector(".card")
const email = document.getElementsByClassName(".text-box")


form.addEventListener('submit', (e) =>{
//const error_msg = document.getElementById("errmsg");
const regex = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/

 const emailValue = email.value.trim();

 if(emailValue == ""|| !emailValue.match(regex)){
        error_msg.classList.add("error-msg");
        error_msg.classList.remove("none")
        //alert("valid email")
        
  }
    
 // else if(!emailValue.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
   //   error_msg.classList.add("error-msg");
   //  error_msg.classList.remove("none")
    
   // }
   e.preventDefault();

  
   button.addEventListener('click', function(){
      success_card.classList.remove("none");
      success_card.classList.add("alert");
    card.classList.remove("card");
     card.classList.add("none");
  });
  
  button_success.addEventListener('click', function(){
      success_card.classList.add("none");
      success_card.classList.remove("alert");
     card.classList.remove("none");
     card.classList.add("card");
  });


//e.preventDefault();

//validateInputs();


  // }
});
//const setError = (element,message)=>{

//}


//function validateEmail(email){
   // if (!email) return error_msg;
//const validateInputs = () => {
 //   const emailValue = email.value.trim();
//
    //   if(emailValue == "" ){
    //    error_msg.classList.add("error-msg");
    //    error_msg.classList.remove("none")
  // }
    
 //  if(!emailValue.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
  //    error_msg.classList.add("error-msg");
 //     error_msg.classList.remove("none")
    
   // }

 //   else{
   //     button.addEventListener('click', /function(){
 //   success_card.classList.remove("none");
 //  success_card.classList.add("alert");
 //   });
//}
//}
//
//button.addEventListener('click', function(){
  //  success_card.classList.remove("none");
  //  success_card.classList.add("alert");
 // card.classList.remove("card");
  // card.classList.add("none");
//});

//button_success.addEventListener('click', function(){
 //   success_card.classList.add("none");
 //   success_card.classList.remove("alert");
 //  card.classList.remove("none");
 //  card.classList.add("card");
//});

//};

