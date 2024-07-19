const form = document.getElementById("form");
const error_msg = document.getElementById("errmsg");

const button = document.querySelector(".btn");
const success_card = document.querySelector(".alert");

const card = document.querySelector(".card")


function handleSubmit(e) {
    e.preventDefault(); //prevent default behaviour

    const formData = new FormData(e.target);
    const formDataObject = Object.fromEntries(formData.entries());
    const email = formDataObject.email;

    const emailErrorMessage = validEmail(email);
    if(emailErroMessage) {
        error_msg.classList.toggle("error-msg");

    }else {
        card.classList.add("none");
        success_card.classList.toggle("none");

    }

}

form.addEventListener("submit", handleSubmit);

function validateEmail(email){
    if (!email) return error_msg;


button.addEventListener('click', function(){
    show.classList.toggle("none");
   
});
}
