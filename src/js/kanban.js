let buttonAdd = document.getElementById("addCard");
let todoCol = document.getElementById("todo-col");

const container = document.querySelector(".kanban"); 



buttonAdd.addEventListener("click" , function() {
    
    

    const card = document.createElement('div');
    card.className = 'card';

    //Header
    const cardHeader = document.createElement('div');
    cardHeader.className = 'card-header';

    const priority = document.createElement('div');
    priority.className = 'priority';

    const status = document.createElement('div');
    status.className = 'status low';
    status.textContent = 'Low';

    priority.appendChild(status); 
    cardHeader.appendChild(priority); 

    const date = document.createElement('div');
    date.className = 'date';
    date.textContent = 'Oct 06,24';

    cardHeader.appendChild(date);
    card.appendChild(cardHeader); 

    //content
    const cardContent = document.createElement('div');
    cardContent.className = 'card-content';
    cardContent.textContent = 'Make popcorn';

    card.appendChild(cardContent); 

    //footer
    const cardFooter = document.createElement('div');
    cardFooter.className = 'card-footer';
    
    const closeIcon = document.createElement('img');
    closeIcon.className = 'close-icon';
    closeIcon.src = 'assets/images/icons/X.png';
    closeIcon.alt = '';
    
    cardFooter.appendChild(closeIcon);
    
    
    const users = document.createElement('div');
    users.className = 'users';
    
    const user = document.createElement('div');
    user.className = 'user';
    user.style.backgroundColor = '#af4a00';
    
    const initials = document.createElement('span');
    initials.className = 'initials';
    initials.textContent = 'GM';
    
    user.appendChild(initials); 
    users.appendChild(user); 
    cardFooter.appendChild(users);
    
    card.appendChild(cardFooter); 

    todoCol.appendChild(card); buttonX = document.querySelectorAll(".close-icon");
})



container.addEventListener("click", function (event) {
    if (event.target.classList.contains("close-icon")) { 
        event.target.parentElement.parentElement.remove(); 
    }else if(event.target.classList.contains("card"))
    {
        const divParaMover = event.target;
        let destino = "";
        console.log(event.target.parentElement.id);

        switch (event.target.parentElement.id)
        {    
            case "todo-col":
                destino = document.getElementById("inProgress-col");
            break;
            case "inProgress-col":
                destino = document.getElementById("complete-col");
            break;
            default:
                destino = document.getElementById("todo-col");
        }
        destino.appendChild(event.target);
        }
});
