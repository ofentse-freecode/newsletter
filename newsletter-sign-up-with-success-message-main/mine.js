const form = document.getElementById("form");
const error_msg = document.getElementById("errmsg");
const button = document.querySelector(".btn");
const button_success = document.querySelector(".btns");
const success_card = document.getElementById("success-card");
const card = document.querySelector(".card");
const email = document.getElementsByClassName(".text-box");

function switchSections(){
    error_msg.classList.remove("none");
    error_msg.classList.add("error-msg");

}
function switchBlock(){
      success_card.classList.toggle("none");
    card.classList.toggle("card");
      
}

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    const emailValue = email.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(emailValue)) {
     
        switchBlock();
      
      } else {
       error_msg.classList.add("error-msg");
       error_msg.classList.remove("none");

      }

      //button.addEventListener('click', function(){
      // success_card.classList.remove("none");
      //  success_card.classList.add("alert");
   // card.classList.remove("card");
    // card.classList.add("none");
    // });
    });
    
    
    button_success.addEventListener('click', function(){
       success_card.classList.add("none");
        success_card.classList.remove("alert");
       card.classList.remove("none");
       card.classList.add("card");
       error_msg.classList.remove("error-msg");
       error_msg.classList.add("none");
    });