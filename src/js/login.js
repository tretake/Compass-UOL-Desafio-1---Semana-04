const email = document.getElementById("mail");
const password = document.getElementById("password");
const submit = document.getElementById("submit");

const emailValidationMessage = document.getElementById("email-validation-message");
const passwordValidationMessage = document.getElementById("password-validation-message")

var form = document.getElementById("login");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);


const ValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;





submit.addEventListener("click" , (event) => 
{    
    let emailPass = false;
    let passwordPass = false;

    if(email.value == "")
        emailValidationMessage.innerHTML = "campo não preenchido"
    else
    {
        if(email.value.match(ValidEmail))
            {emailValidationMessage.innerHTML = "";
                emailPass =true;}
        else
            emailValidationMessage.innerHTML = "Email Invalido";
    }

    if(password.value === "")
        passwordValidationMessage.innerHTML = "campo não preenchido";
    else
    {
        passwordPass = true;
        passwordValidationMessage.innerHTML = ""
    }

    if(passwordPass && emailPass)
        window.location.href = "kanban.html"

})