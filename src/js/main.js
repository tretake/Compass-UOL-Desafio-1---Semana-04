const email = document.getElementById("mail");
const userName = document.getElementById("name");
const submit = document.getElementById("submit");

const emailValidationMessage = document.getElementById("email-validation-message");
const nameValidationMessage = document.getElementById("name-validation-message");

var form = document.getElementById("login");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);


const ValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;



let LocalStorage = {};

submit.addEventListener("click" , (event) => 
{    
    let emailPass = false;
    let namePass = false;

    if(email.value == "")
    {
        emailValidationMessage.innerHTML = "campo não preenchido"
        emailValidationMessage.className = "error-message"}
    else
    {
        if(email.value.match(ValidEmail))
            {emailValidationMessage.innerHTML = "";
                emailPass =true;}
        else{
            emailValidationMessage.innerHTML = "Email Invalido";
            emailValidationMessage.className = "error-message"
        }
    }

    if(userName.value === "")
    {
        nameValidationMessage.innerHTML = "campo não preenchido";
        nameValidationMessage.className = "error-message";
    }
    else
    {
        namePass = true;
        nameValidationMessage.innerHTML = ""
    }

        if(namePass && emailPass)
        {
            localStorage.setItem('userName',userName.value);
            localStorage.setItem('UserEmail', email.value);
            console.log(localStorage);
            const comfirmation = document.createElement('p');
            comfirmation.className = 'comfimation-text';
            comfirmation.innerHTML = "Email Registered";

            event.target.parentElement.appendChild(comfirmation);
        }

})